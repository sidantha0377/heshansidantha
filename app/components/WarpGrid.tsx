"use client";

import { useEffect, useRef } from "react";

type RGB = [number, number, number];

const FONTS: Record<string, string> = {
    mono: "ui-monospace, SFMono-Regular, Menlo, monospace",
    courier: '"Courier New", Courier, monospace',
    sans: "system-ui, -apple-system, Segoe UI, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
};

function parseColor(value: string, fallback: RGB): RGB {
    const v = value.trim();
    if (v.startsWith("#")) {
        let h = v.slice(1);
        if (h.length === 3) h = h.split("").map((ch) => ch + ch).join("");
        if (h.length >= 6) {
            return [
                parseInt(h.slice(0, 2), 16),
                parseInt(h.slice(2, 4), 16),
                parseInt(h.slice(4, 6), 16),
            ];
        }
    }
    const m = v.match(/rgba?\(([^)]+)\)/);
    if (m) {
        const p = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
        if (p.length >= 3) return [p[0], p[1], p[2]];
    }
    return fallback;
}

const num = (v: string, fb: number) => {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : fb;
};
const pct = (v: string, fb: number) => num(v, fb) / 100;
const seconds = (v: string, fb: number) => {
    const n = num(v, fb);
    return v.trim().endsWith("ms") ? n / 1000 : n;
};
const isOn = (v: string, fb = true) => {
    const s = v.trim().toLowerCase();
    if (!s) return fb;
    return !(s === "off" || s === "0" || s === "false" || s === "none");
};

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function WarpGrid({ className = "warp-grid" }: { className?: string }) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        let W = 0;
        let H = 0;
        let dpr = 1;
        let cols = 0;
        let rows = 0;
        let glyphs: string[] = [];
        let raf = 0;
        let lastShuffle = 0;
        let mx = -9999;
        let my = -9999;

        // Settings (re-read from CSS on resize)
        let s = readSettings();

        function readSettings() {
            const cs = getComputedStyle(canvas!);
            const g = (name: string) => cs.getPropertyValue(name);
            return {
                mode: g("--wg-mode").trim() || "dots",
                font: FONTS[g("--wg-font").trim()] ?? FONTS.mono,
                fontSize: num(g("--wg-font-size"), 8),
                shuffle: num(g("--wg-shuffle"), 0),
                spacing: Math.max(4, num(g("--wg-spacing"), 12)),
                dot: parseColor(g("--wg-dot-color"), [88, 88, 88]),
                bg: parseColor(g("--wg-background"), [10, 10, 10]),
                transparentBackground: g("--wg-background").trim().toLowerCase() === "transparent",
                originX: pct(g("--wg-origin-x"), 0.5),
                originY: pct(g("--wg-origin-y"), 0.5),
                expansion: pct(g("--wg-expansion"), 1),
                feathering: pct(g("--wg-feathering"), 1),
                wave: isOn(g("--wg-wave")),
                speed: Math.max(0.5, seconds(g("--wg-speed"), 8)),
                length: pct(g("--wg-length"), 0.6),
                force: num(g("--wg-force"), 10),
                ripples: Math.max(1, Math.round(num(g("--wg-ripples"), 1))),
                glow: parseColor(g("--wg-wave-glow"), [232, 232, 232]),
                cursor: isOn(g("--wg-cursor")),
                cursorMode: g("--wg-cursor-mode").trim() || "attract",
                radius: num(g("--wg-radius"), 30),
                pull: num(g("--wg-pull"), 4),
                trail: isOn(g("--wg-trail"), false),
                motionBlur: isOn(g("--wg-motion-blur"), false),
            };
        }

        function randomGlyph() {
            return s.mode === "text"
                ? LETTERS[Math.floor(Math.random() * LETTERS.length)]
                : String(Math.floor(Math.random() * 10));
        }

        function resize() {
            s = readSettings();
            const rect = canvas!.getBoundingClientRect();
            W = rect.width;
            H = rect.height;
            dpr = window.devicePixelRatio || 1;
            canvas!.width = Math.round(W * dpr);
            canvas!.height = Math.round(H * dpr);
            ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
            cols = Math.ceil(W / s.spacing) + 1;
            rows = Math.ceil(H / s.spacing) + 1;
            glyphs = Array.from({ length: cols * rows }, randomGlyph);
        }

        function frame(t: number) {
            const sec = t / 1000;
            const { spacing, bg, dot, glow } = s;

            // Clear (leave a fading trail if requested)
            if (s.transparentBackground) {
                ctx!.clearRect(0, 0, W, H);
            } else {
                const clearAlpha = s.trail ? 0.12 : s.motionBlur ? 0.3 : 1;
                ctx!.fillStyle = `rgba(${bg[0]},${bg[1]},${bg[2]},${clearAlpha})`;
                ctx!.fillRect(0, 0, W, H);
            }

            if (s.shuffle > 0 && sec - lastShuffle > 1 / s.shuffle) {
                lastShuffle = sec;
                for (let i = 0; i < glyphs.length; i++) glyphs[i] = randomGlyph();
            }

            const cx = W * s.originX;
            const cy = H * s.originY;
            const maxR = Math.max(
                Math.hypot(cx, cy),
                Math.hypot(W - cx, cy),
                Math.hypot(cx, H - cy),
                Math.hypot(W - cx, H - cy)
            );
            const visible = Math.max(1, maxR * s.expansion);
            const fadeW = Math.max(1, visible * s.feathering);
            const fadeStart = visible - fadeW;

            const sigma = Math.max(4, maxR * s.length * 0.25);
            const travel = maxR + sigma * 3;
            const rings: number[] = [];
            if (s.wave && !reduced) {
                for (let k = 0; k < s.ripples; k++) {
                    const phase = ((sec / s.speed + k / s.ripples) % 1 + 1) % 1;
                    rings.push(phase * travel);
                }
            }

            const sign = s.cursorMode === "repel" ? -1 : 1;
            const infl = Math.max(1, s.radius * 2);

            ctx!.textAlign = "center";
            ctx!.textBaseline = "middle";
            ctx!.font = `${s.fontSize}px ${s.font}`;

            const offX = (W - (cols - 1) * spacing) / 2;
            const offY = (H - (rows - 1) * spacing) / 2;

            for (let j = 0; j < rows; j++) {
                for (let i = 0; i < cols; i++) {
                    let x = offX + i * spacing;
                    let y = offY + j * spacing;

                    const dx = x - cx;
                    const dy = y - cy;
                    const dist = Math.hypot(dx, dy) || 1;

                    const alpha = Math.min(1, Math.max(0, 1 - (dist - fadeStart) / fadeW));
                    if (alpha <= 0.01) continue;

                    // Wave displacement + brightness
                    let w = 0;
                    for (const r of rings) {
                        const d = dist - r;
                        const k = Math.exp(-(d * d) / (2 * sigma * sigma));
                        if (k > w) w = k;
                    }
                    if (w > 0.001) {
                        const push = s.force * w;
                        x += (dx / dist) * push;
                        y += (dy / dist) * push;
                    }

                    // Cursor pull / push
                    if (s.cursor && !reduced) {
                        const ax = mx - x;
                        const ay = my - y;
                        const dd = Math.hypot(ax, ay);
                        if (dd < infl && dd > 0.1) {
                            const f = 1 - dd / infl;
                            const mv = sign * f * f * s.radius * 0.15 * s.pull;
                            x += (ax / dd) * mv;
                            y += (ay / dd) * mv;
                        }
                    }

                    const r = Math.round(dot[0] + (glow[0] - dot[0]) * w);
                    const gC = Math.round(dot[1] + (glow[1] - dot[1]) * w);
                    const b = Math.round(dot[2] + (glow[2] - dot[2]) * w);
                    ctx!.fillStyle = `rgba(${r},${gC},${b},${alpha})`;

                    if (s.mode === "dots") {
                        ctx!.beginPath();
                        ctx!.arc(x, y, Math.max(0.6, s.fontSize / 6), 0, Math.PI * 2);
                        ctx!.fill();
                    } else {
                        ctx!.fillText(glyphs[j * cols + i], x, y);
                    }
                }
            }

            raf = requestAnimationFrame(frame);
        }

        const onMove = (e: PointerEvent) => {
            const rect = canvas.getBoundingClientRect();
            mx = e.clientX - rect.left;
            my = e.clientY - rect.top;
        };
        const onLeave = () => {
            mx = -9999;
            my = -9999;
        };

        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(canvas);
        // Canvas has pointer-events: none, so listen on window instead
        window.addEventListener("pointermove", onMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", onLeave);
        raf = requestAnimationFrame(frame);

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
            window.removeEventListener("pointermove", onMove);
            document.documentElement.removeEventListener("pointerleave", onLeave);
        };
    }, []);

    return <canvas ref={ref} className={className} aria-hidden="true" />;
}