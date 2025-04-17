"use client";

import React from 'react';
import { motion } from "motion/react";
import { ArrowRight, Globe, FileText, Scale, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    const iconContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const iconVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    return (
        <div className="relative overflow-hidden bg-white dark:bg-zinc-900 transition-colors">
            {/* Background gradients */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[40%] -right-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-r from-zinc-200/50 to-zinc-300/30 blur-3xl dark:from-zinc-800/40 dark:to-zinc-700/30 transition-colors"></div>
                <div className="absolute -bottom-[30%] -left-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-r from-zinc-200/50 to-zinc-300/30 blur-3xl dark:from-zinc-800/40 dark:to-zinc-700/30 transition-colors"></div>
            </div>

            {/* Hero content */}
            <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left column - Text content */}
                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                                Global Legal Process
                                <span className="text-zinc-600 dark:text-zinc-400"> Excellence</span>
                            </h1>

                            <h2 className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-xl">
                                Streamline your legal operations with our worldwide outsourcing solutions
                            </h2>

                            <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
                                Empowering law firms and corporate legal departments with efficient, high-quality legal support services across jurisdictions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button className="bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 px-6 py-2 rounded-full">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>

                            <Button variant="outline" className="bg-transparent border-zinc-300 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800 px-6 py-2 rounded-full">
                                Learn More
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400"
                        >
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-300 dark:bg-zinc-600"></div>
                                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-400 dark:bg-zinc-500"></div>
                                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-500 dark:bg-zinc-400"></div>
                                <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-600 dark:bg-zinc-300"></div>
                            </div>
                            <span className="text-sm">Trusted by 500+ legal teams worldwide</span>
                        </motion.div>
                    </div>

                    {/* Right column - Visual elements */}
                    <div className="relative h-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-full aspect-square max-w-md mx-auto"
                        >
                            {/* Central globe */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-zinc-300 to-zinc-200 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center shadow-lg">
                                    <Globe className="w-24 h-24 md:w-32 md:h-32 text-zinc-700 dark:text-zinc-300" strokeWidth={1} />
                                </div>
                            </div>

                            {/* Orbiting icons */}
                            <motion.div
                                variants={iconContainerVariants}
                                initial="hidden"
                                animate="visible"
                                className="absolute inset-0"
                            >
                                {/* FileText icon */}
                                <motion.div
                                    variants={iconVariants}
                                    className="absolute top-5 left-1/2 -translate-x-1/2 bg-white dark:bg-zinc-800 p-3 rounded-full shadow-lg"
                                >
                                    <FileText className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
                                </motion.div>

                                {/* Scale icon */}
                                <motion.div
                                    variants={iconVariants}
                                    className="absolute top-1/2 -translate-y-1/2 right-5 bg-white dark:bg-zinc-800 p-3 rounded-full shadow-lg"
                                >
                                    <Scale className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
                                </motion.div>

                                {/* Shield icon */}
                                <motion.div
                                    variants={iconVariants}
                                    className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white dark:bg-zinc-800 p-3 rounded-full shadow-lg"
                                >
                                    <Shield className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
                                </motion.div>
                            </motion.div>

                            {/* Connecting lines */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                                {/* Animated orbital paths */}
                                <motion.ellipse
                                    cx="200" cy="200" rx="180" ry="80"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    className="text-zinc-300 dark:text-zinc-700"
                                    strokeDasharray="5,5"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.ellipse
                                    cx="200" cy="200" rx="120" ry="160"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    className="text-zinc-300 dark:text-zinc-700"
                                    strokeDasharray="5,5"
                                    initial={{ rotate: 90 }}
                                    animate={{ rotate: -270 }}
                                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 120L40 114C80 108 160 96 240 90C320 84 400 84 480 78C560 72 640 60 720 60C800 60 880 72 960 78C1040 84 1120 84 1200 78C1280 72 1360 60 1400 54L1440 48V120H1400C1360 120 1280 120 1200 120C1120 120 1040 120 960 120C880 120 800 120 720 120C640 120 560 120 480 120C400 120 320 120 240 120C160 120 80 120 40 120H0Z"
                        className="fill-transparent dark:fill-[#09090B] transition-colors"
                    />
                </svg>
            </div>
        </div>
    );
};

export default HeroSection;