"use client";

import Image from "next/image"; // แนะนำให้เพิ่มรูปภาพเพื่อความเป๊ะ
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
    return (
        <section
            id="projects"
            // ✅ ปรับระยะห่างและ Scroll Margin ให้สมดุล
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Selected projects"
        >
            {/* Mobile Header */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:sr-only">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">
                    Projects
                </h2>
            </div>

            <ul className="group/list flex flex-col gap-12">
                {projects.map((project, index) => (
                    <motion.li
                        key={project.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            {/* Hover Background Decorator */}
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                            {/* Left Side: Project Image (2/8 columns) */}
                            <div className="z-10 sm:order-1 sm:col-span-2 md:col-span-2">
                                <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-slate-200/10 bg-slate-800 transition group-hover:border-slate-200/30 sm:translate-y-1">
                                    <Image
                                        src={project.image || "/project-placeholder.jpg"}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, 200px"
                                    />
                                </div>
                            </div>

                            {/* Right Side: Content (6/8 columns) */}
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3>
                                    <a
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={project.title}
                                    >
                                        <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                        <span>
                                            {project.title}
                                            <ArrowUpRight
                                                size={16}
                                                className="inline-block ml-1 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                                            />
                                        </span>
                                    </a>
                                </h3>
                                <p className="mt-2 text-sm leading-normal text-slate-400">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                                    {project.technologies.map((tech) => (
                                        <li key={tech}>
                                            <span className="flex items-center rounded-full bg-teal-900/30 px-3 py-1 text-xs font-medium leading-5 text-teal-200 shadow-[0_0_5px_rgba(45,212,191,0.2)] transition-all duration-300 ease-in-out hover:bg-teal-800/50 hover:text-teal-50 hover:shadow-[0_0_12px_rgba(45,212,191,0.6)]">
                                                {tech}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ul>

            {/* View Full Project Archive Link */}
            <div className="mt-12">
                <a
                    className="inline-flex items-center font-semibold leading-tight text-slate-200 group"
                    href="/archive"
                >
                    <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                        View Full Project Archive
                    </span>
                    <ArrowUpRight
                        size={16}
                        className="ml-1 inline-block shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none"
                    />
                </a>
            </div>
        </section>
    );
}