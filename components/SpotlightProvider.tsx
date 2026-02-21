"use client";

import { useEffect, useRef } from "react";

export default function SpotlightProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (spotlightRef.current) {
                spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(45,212,191,0.15), transparent 80%)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="relative">
            {/* Spotlight overlay */}
            <div
                ref={spotlightRef}
                className="pointer-events-none fixed inset-0 z-30 transition-all duration-300"
                style={{
                    background:
                        "radial-gradient(600px circle at 50% 50%, rgba(45,212,191,0.04), transparent 80%)",
                }}
            />
            {children}
        </div>
    );
}
