"use client";

import React, { useState, useEffect } from 'react';
import { motion, useInView } from "motion/react";
import { Globe, Building, Scale, Users, CheckCircle } from "lucide-react";

// Counter animation component
const AnimatedCounter = ({ value, label, icon }: { value: number, label: string, icon: React.ReactNode }) => {
    const [count, setCount] = useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            let animationFrameId: number;

            const duration = 2000; // 2 seconds

            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                setCount(Math.floor(progress * value));

                if (progress < 1) {
                    animationFrameId = requestAnimationFrame(step);
                } else {
                    setCount(value);
                }
            };

            animationFrameId = requestAnimationFrame(step);

            return () => cancelAnimationFrame(animationFrameId);
        }
    }, [isInView, value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 backdrop-blur-sm bg-zinc-100/30 dark:bg-zinc-800/40 rounded-xl border border-zinc-200/20 dark:border-zinc-700/20"
        >
            <div className="mb-3 text-primary dark:text-zinc-200">
                {icon}
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-black dark:text-white"
            >
                {count}+
            </motion.div>
            <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{label}</div>
        </motion.div>
    );
};

const Facts = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-zinc-20 dark:bg-zinc-900/30">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-black to-gray-500 bg-clip-text text-transparent dark:from-white dark:to-zinc-500">
                        Global Reach, Local Expertise
                    </h2>
                    <p className="mt-4 text-zinc-700 dark:text-zinc-400">
                        We leverage our extensive network to deliver legal process excellence across jurisdictions and practice areas
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    <AnimatedCounter
                        value={500}
                        label="Legal Teams Worldwide"
                        icon={<Users className="w-8 h-8" strokeWidth={1} />}
                    />
                    <AnimatedCounter
                        value={45}
                        label="Countries Represented"
                        icon={<Globe className="w-8 h-8" strokeWidth={1} />}
                    />
                    <AnimatedCounter
                        value={25}
                        label="Legal Practice Areas"
                        icon={<Scale className="w-8 h-8" strokeWidth={1} />}
                    />
                    <AnimatedCounter
                        value={1000}
                        label="Successful Projects"
                        icon={<CheckCircle className="w-8 h-8" strokeWidth={1} />}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800">
                        <Building className="w-4 h-4 mr-2 text-zinc-600 dark:text-zinc-400" strokeWidth={1} />
                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Trusted by international law firms and corporate legal departments</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Facts;