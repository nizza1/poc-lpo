"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
    return (
        <div className=" py-40 dark:bg-black bg-white w-full">
            <div className="max-w-7xl mx-auto text-center">
                <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
                    Borderless{" "}
                    <span className="text-neutral-400">
                        {"Expertise".split("").map((word, idx) => (
                            <motion.span
                                key={idx}
                                className="inline-block"
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.04 }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </span>
                </p>
                <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
                    Delivering top-tier legal support across continents. Embrace flexibility, stay compliant, and operate with confidence—wherever you are.
                </p>
            </div>
            <WorldMap
                // lineColor="#000000"
                dots={[
                    {
                        start: { lat: 35.8617, lng: 104.1954 }, // China
                        end: { lat: 35.8617, lng: 104.1954 },
                    },
                    {
                        start: { lat: 51.1657, lng: 10.4515 }, // Germany
                        end: { lat: 51.1657, lng: 10.4515 },
                    },
                    {
                        start: { lat: 23.8859, lng: 45.0792 }, // Saudi Arabia
                        end: { lat: 23.8859, lng: 45.0792 },
                    },
                    {
                        start: { lat: 20.5937, lng: 78.9629 }, // India
                        end: { lat: 20.5937, lng: 78.9629 },
                    },
                    {
                        start: { lat: 39.3999, lng: -8.2245 }, // Portugal
                        end: { lat: 39.3999, lng: -8.2245 },
                    },
                    {
                        start: { lat: 37.0902, lng: -95.7129 }, // USA
                        end: { lat: 37.0902, lng: -95.7129 },
                    },
                    {
                        start: { lat: 56.1304, lng: -106.3468 }, // Canada
                        end: { lat: 56.1304, lng: -106.3468 },
                    },
                    {
                        start: { lat: -14.2350, lng: -51.9253 }, // Brazil
                        end: { lat: -14.2350, lng: -51.9253 },
                    },
                ]}
            />
        </div>
    );
}





///example
// dots={[
//     {
//         start: {
//             lat: 64.2008,
//             lng: -149.4937,
//         }, // Alaska (Fairbanks)
//         end: {
//             lat: 34.0522,
//             lng: -118.2437,
//         }, // Los Angeles
//     },
//     {
//         start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
//         end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
//     },
//     {
//         start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
//         end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
//     },
//     {
//         start: { lat: 51.5074, lng: -0.1278 }, // London
//         end: { lat: 28.6139, lng: 77.209 }, // New Delhi
//     },
//     {
//         start: { lat: 28.6139, lng: 77.209 }, // New Delhi
//         end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
//     },
//     {
//         start: { lat: 28.6139, lng: 77.209 }, // New Delhi
//         end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
//     },
// ]}



