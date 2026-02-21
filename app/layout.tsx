import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import SpotlightProvider from "@/components/SpotlightProvider";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Jeadsada Tanya",
    description:
        "Personal portfolio of Jeadsada Tanya, a Junior Developer passionate about building great web experiences.",
    keywords: ["Junior Developer", "React", "Next.js", "TypeScript", "Portfolio"],
    authors: [{ name: "Jeadsada Tanya" }],
    openGraph: {
        title: "Jeadsada Tanya — Junior Developer",
        description:
            "Personal portfolio of Jeadsada Tanya, a Junior Developer passionate about building great web experiences.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} scroll-smooth`}>
            <body className="bg-[#0f172a] leading-relaxed text-slate-400 antialiased selection:bg-teal-300/30 selection:text-slate-200">
                {/* Deep Ocean Blue Bloom Effect */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none fixed inset-0 z-0"
                    style={{
                        background: [
                            "radial-gradient(circle 800px at 50% -100px, rgba(29, 78, 216, 0.15), transparent)",
                            "radial-gradient(circle 600px at 80% 20%, rgba(30, 64, 175, 0.1), transparent)",
                        ].join(", "),
                    }}
                />
                <SpotlightProvider>{children}</SpotlightProvider>
            </body>
        </html>
    );
}
