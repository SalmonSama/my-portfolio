"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Facebook } from "lucide-react";

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/SalmonSama",
        icon: Github,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jeadsada-tanya-701723388/",
        icon: Linkedin,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/jeadsada_tanya/",
        icon: Instagram,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/few.tanya",
        icon: Facebook,
    },
    {
        label: "Email",
        href: "mailto:jeadsada.tanya@gmail.com",
        icon: Mail,
    },
];

export default function SocialLinks() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-5"
        >
            {socials.map(({ label, href, icon: Icon }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group text-slate-500 transition-all duration-200 hover:-translate-y-1 hover:text-teal-300"
                >
                    <Icon size={24} strokeWidth={1.5} />
                </a>
            ))}
        </motion.div>
    );
}
