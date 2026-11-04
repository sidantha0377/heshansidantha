import type { Metadata } from "next";
import "./globals.css";
import "./warp-grid.css";
import WarpGrid from "@/app/components/WarpGrid";
export const metadata: Metadata = {
  title: "Heshan Sidantha",
  description: "Designed & Built by Heshan Sidantha - 2026",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="relative min-h-full flex flex-col">
        <WarpGrid />
        {children}
      </body>
    </html>
  );
}
