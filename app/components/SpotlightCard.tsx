"use client";

import type { PointerEvent, ReactNode } from "react";

type SpotlightCardProps = {
    children: ReactNode;
    className?: string;
};

export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
    function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
        if (event.pointerType === "touch") return;

        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
        event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
    }

    return (
        <div onPointerMove={handlePointerMove} className={`spotlight-card ${className}`}>
            {children}
        </div>
    );
}
