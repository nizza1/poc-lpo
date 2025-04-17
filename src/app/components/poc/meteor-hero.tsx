"use client";

import React from 'react';
import { Meteors } from "@/components/magicui/meteors";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MeteorHero = () => {
    return (
        <div className="relative min-h-[90vh] overflow-hidden bg-white dark:bg-black flex items-center justify-center">
            {/* Meteors background effect */}
            <Meteors number={30} />

            <div className="container mx-auto px-4 z-10 relative">
                <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
                    {/* Main title with gradient - different gradients for light/dark modes */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl md:text-7xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10"
                    >
                        Global Legal Process Excellence
                    </motion.h1>

                    {/* Subtitle with animation */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl"
                    >
                        Streamline your legal operations with our worldwide outsourcing solutions
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-zinc-700 dark:text-zinc-500 max-w-xl"
                    >
                        Empowering law firms and corporate legal departments with efficient, high-quality legal support services across jurisdictions.
                    </motion.p>

                    {/* Action buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Button className="bg-black hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-black px-6 py-6 rounded-full">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>

                        <Button variant="outline" className="bg-transparent border-zinc-300 text-black hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900 px-6 py-6 rounded-full">
                            Learn More
                        </Button>
                    </motion.div>

                    {/* Trust component */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400"
                    >
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-zinc-300 dark:bg-zinc-600"></div>
                            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-zinc-400 dark:bg-zinc-500"></div>
                            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-zinc-500 dark:bg-zinc-400"></div>
                            <div className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-zinc-600 dark:bg-zinc-300"></div>
                        </div>
                        <span className="text-sm">Trusted by 500+ legal teams worldwide</span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default MeteorHero;