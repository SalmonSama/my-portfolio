"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
    return (
        <section
            id="education"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Education"
        >
            {/* Mobile section heading */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:sr-only">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">
                    Education
                </h2>
            </div>

            <ol className="group/list flex flex-col gap-12">
                {education.map((edu, index) => (
                    <motion.li
                        key={edu.institution}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            {/* Hover Background Decorator */}
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                            {/* Left: Period (2/8 of grid) */}
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                                {edu.period}
                            </header>

                            {/* Right: Content (6/8 of grid) */}
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    {/* Link overlay — entire card is clickable via this anchor */}
                                    <a
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                        href={edu.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${edu.degree} · ${edu.institution}`}
                                    >
                                        {/* Invisible full-card overlay span */}
                                        <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                        <span>
                                            {edu.degree}
                                            {" · "}
                                            <span>{edu.institution}</span>
                                            <ArrowUpRight
                                                size={16}
                                                className="inline-block ml-1 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                            />
                                        </span>
                                    </a>
                                </h3>

                                {/* Description bullets */}
                                <div className="mt-2 text-sm leading-normal text-slate-400">
                                    <ul className="flex flex-col gap-2">
                                        {edu.description.map((bullet, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Skill badges */}
                                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills acquired">
                                    {edu.skills.map((skill) => (
                                        <li key={skill}>
                                            <span className="flex items-center rounded-full bg-teal-900/30 px-3 py-1 text-xs font-medium leading-5 text-teal-200 shadow-[0_0_5px_rgba(45,212,191,0.2)] transition-all duration-300 ease-in-out hover:bg-teal-800/50 hover:text-teal-50 hover:shadow-[0_0_12px_rgba(45,212,191,0.6)]">
                                                {skill}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ol>
        </section>
    );
}