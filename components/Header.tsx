"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    // { label: "Education", href: "#education" },
];

export default function Header() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const sectionIds = navItems.map((item) => item.href.slice(1));
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col gap-10">
            {/* Name & Title */}
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"
                >
                    Jeadsada Tanya
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-3 text-lg font-medium tracking-tight text-slate-200"
                >
                    Junior Developer
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400"
                >
                    Crafting intelligent software and full-stack solutions with a focus on Machine Learning and AI.
                </motion.p>
            </div>

            {/* Navigation */}
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                aria-label="In-page jump links"
            >
                <ul className="flex flex-col gap-1">
                    {navItems.map(({ label, href }) => {
                        const isActive = activeSection === href.slice(1);
                        return (
                            <li key={href}>
                                <a
                                    href={href}
                                    onClick={(e) => handleNavClick(e, href)}
                                    className="group flex items-center gap-4 py-2"
                                >
                                    {/* Line indicator */}
                                    <span
                                        className={`h-px transition-all duration-300 ${isActive
                                            ? "w-16 bg-slate-200"
                                            : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-400"
                                            }`}
                                    />
                                    <span
                                        className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isActive
                                            ? "text-slate-200"
                                            : "text-slate-500 group-hover:text-slate-300"
                                            }`}
                                    >
                                        {label}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </motion.nav>
        </div>
    );
}
