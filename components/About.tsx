"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            // ✅ แก้ไข: เพิ่ม mb และปรับ scroll-mt ให้สมดุลกับฝั่งซ้าย (py-24)
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
        >
            {/* Mobile Header (โผล่มาเฉพาะตอนจอมือถือ) */}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:sr-only">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-200">
                    About
                </h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                // ✅ แก้ไข: ลบ gap-4 ออก และใช้ mb-4 ที่แท็ก <p> แทน เพื่อการจัดช่องไฟที่เนียนแบบต้นฉบับ
                className="text-slate-400"
            >
                <p className="mb-4 leading-relaxed">
                    I&apos;m a{" "}
                    <span className="font-medium text-slate-200">
                        Computer Science student
                    </span>{" "}
                    with a deep passion for building intelligent systems and meaningful
                    software. My academic journey has led me to focus on{" "}
                    <span className="font-medium text-slate-200">
                        Artificial Intelligence
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-slate-200">Machine Learning</span>
                    , where I enjoy turning complex data into practical, real-world
                    solutions — from predictive models to optimization algorithms.
                </p>

                <p className="mb-4 leading-relaxed">
                    Beyond software, I&apos;m fascinated by the physical world of
                    computing. I&apos;ve built{" "}
                    <span className="font-medium text-slate-200">IoT solutions</span>{" "}
                    that bridge hardware and software, like a smart farming system that
                    integrates sensors with real-time monitoring. I love the challenge of
                    making technology work not just on screen, but out in the field.
                </p>

            </motion.div>
        </section>
    );
}