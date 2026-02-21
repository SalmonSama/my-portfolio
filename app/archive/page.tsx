import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export const metadata = {
    title: "Project Archive | Jeadsada Tanya",
    description: "A full list of all projects built by Jeadsada Tanya.",
};

// Sort newest first
const sorted = [...projects].sort((a, b) => b.year - a.year);

export default function ArchivePage() {
    return (
        <div className="min-h-screen bg-[#0f172a] px-6 py-16 font-sans md:px-12 lg:px-24">
            {/* Back link */}
            <Link
                href="/"
                className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-teal-300"
            >
                <ArrowLeft
                    size={16}
                    className="transition-transform group-hover:-translate-x-1 motion-reduce:transition-none"
                />
                Jeadsada Tanya
            </Link>

            {/* Heading */}
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-slate-200">
                All Projects
            </h1>
            <p className="mb-12 text-slate-400">
                A complete list of things I&apos;ve built.
            </p>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                    {/* Header */}
                    <thead>
                        <tr className="border-b border-slate-700/60">
                            <th className="py-4 pr-8 text-xs font-semibold uppercase tracking-widest text-slate-500">
                                Year
                            </th>
                            <th className="py-4 pr-8 text-xs font-semibold uppercase tracking-widest text-slate-500">
                                Project
                            </th>
                            <th className="hidden py-4 pr-8 text-xs font-semibold uppercase tracking-widest text-slate-500 lg:table-cell">
                                Made at
                            </th>
                            <th className="hidden py-4 pr-8 text-xs font-semibold uppercase tracking-widest text-slate-500 sm:table-cell">
                                Built with
                            </th>
                            <th className="py-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                                Link
                            </th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {sorted.map((project) => (
                            <tr
                                key={project.title}
                                className="group border-b border-slate-700/30 transition-colors hover:bg-slate-800/50"
                            >
                                {/* Year */}
                                <td className="py-4 pr-8 align-top text-sm text-slate-500">
                                    {project.year}
                                </td>

                                {/* Project title */}
                                <td className="py-4 pr-8 align-top">
                                    <span className="font-medium text-slate-200 group-hover:text-teal-300 transition-colors">
                                        {project.title}
                                    </span>
                                    {/* On mobile, show tech badges inline under title */}
                                    <ul className="mt-2 flex flex-wrap gap-2 sm:hidden">
                                        {project.technologies.map((tech) => (
                                            <li key={tech}>
                                                <span className="flex items-center rounded-full bg-teal-900/30 px-3 py-1 text-xs font-medium leading-5 text-teal-200 shadow-[0_0_5px_rgba(45,212,191,0.2)]">
                                                    {tech}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </td>

                                {/* Made at */}
                                <td className="hidden py-4 pr-8 align-top text-sm text-slate-500 lg:table-cell">
                                    {project.madeAt}
                                </td>

                                {/* Built with */}
                                <td className="hidden py-4 pr-8 align-top sm:table-cell">
                                    <ul className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <li key={tech}>
                                                <span className="flex items-center rounded-full bg-teal-900/30 px-3 py-1 text-xs font-medium leading-5 text-teal-200 shadow-[0_0_5px_rgba(45,212,191,0.2)] transition-all duration-300 ease-in-out hover:bg-teal-800/50 hover:text-teal-50 hover:shadow-[0_0_12px_rgba(45,212,191,0.6)]">
                                                    {tech}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </td>

                                {/* Link */}
                                <td className="py-4 align-top">
                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${project.title} — external link`}
                                            className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition-colors hover:text-teal-300"
                                        >
                                            <span className="hidden sm:inline truncate max-w-[180px]">
                                                {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                                            </span>
                                            <ArrowUpRight
                                                size={16}
                                                className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            />
                                        </a>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
