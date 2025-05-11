"use client"

import createGlobe from "cobe"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

// Define a proper type for the globe instance
type GlobeInstance = ReturnType<typeof createGlobe>

const GlobeTitle = () => {
    return <div className="max-w-7xl mx-auto text-center">
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
            Delivering top-tier legal support across continents. Embrace flexibility, stay compliant, and operate with confidence—just another example.
        </p>
    </div>
    // return <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-5xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10">
    //     Just another example of Globe 
    //     </h1>
}



export const GlobeCustom = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    // Set up scroll animations
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end center"]  // Start when the top of the element reaches the bottom of the viewport, end when the element leaves the viewport
    })

    // Transform values for the title
    const titleY = useTransform(scrollYProgress, [0, 0.5], [200, 0])
    const titleScale = useTransform(scrollYProgress, [0, 0.5], [0.2, 1])

    // Transform values for the globe body
    const globeScale = useTransform(scrollYProgress, [0, 0.5], [1.5, 1])
    const globeY = useTransform(scrollYProgress, [0, 0.5], [-50, 0])

    return (
        <div ref={containerRef} className="flex flex-col items-center px-2 py-[50px]
        md:py-[70px] min-h-screen">
            <motion.div
                className="globe-title"
                style={{
                    y: titleY,
                    scale: titleScale
                }}
            >
                <GlobeTitle />
            </motion.div>

            <motion.div
                className="z-20 globe-body mt-8"
                style={{
                    y: globeY,
                    scale: globeScale
                }}
            >
                <Globe className="" />
            </motion.div>
        </div>
    )
}




export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [size, setSize] = useState(600)
    const globeInstanceRef = useRef<GlobeInstance | null>(null)



    // Function to calculate the appropriate size based on viewport width
    const calculateSize = () => {
        // Min size: 400px, Max size: 800px
        const viewportWidth = window.innerWidth

        // Calculate responsive size between 400px and 800px
        let newSize = Math.max(400, Math.min(800, viewportWidth * 0.5))

        // Ensure the globe fits in the viewport height as well
        const viewportHeight = window.innerHeight
        const maxHeight = viewportHeight * 0.8 // Use 80% of viewport height as maximum

        // If calculated size exceeds maxHeight, adjust to fit
        if (newSize > maxHeight) {
            newSize = maxHeight
        }

        return Math.floor(newSize)
    }

    // Initialize and handle resize
    useEffect(() => {
        const handleResize = () => {
            const newSize = calculateSize()
            setSize(newSize)
        }

        // Set initial size
        handleResize()

        // Add resize listener
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // Create and update the globe when size changes
    useEffect(() => {
        let phi = 0

        if (!canvasRef.current) return

        // Clean up previous globe instance if it exists
        if (globeInstanceRef.current) {
            globeInstanceRef.current.destroy()
        }

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: size * 2,
            height: size * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            //  devicePixelRatio: 400,
            glowColor: [0.5, 0.5, 0.5],
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },

                // additions 
                { location: [52.5200, 13.4050], size: 0.07 },   // Germany (Berlin)
                { location: [20.5937, 78.9629], size: 0.02 },   // India (center)
                { location: [51.5074, -0.1278], size: 0.03 },   // London
                { location: [23.8859, 45.0792], size: 0.02 },   // Saudi Arabia (Riyadh)
                { location: [31.7683, 35.2137], size: 0.03 },   // Israel (Jerusalem)
                { location: [-15.7801, -47.9292], size: 0.02 }, // Brazil (Brasília)
                { location: [25.2048, 55.2708], size: 0.02 },   // Dubai
                { location: [-30.5595, 22.9375], size: 0.02 },  // South Africa (center)
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi
                phi += 0.01
            },
        })

        globeInstanceRef.current = globe

        return () => {
            globe.destroy()
        }
    }, [size])

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: size,
                height: size,
                maxWidth: "100%",
                aspectRatio: 1
            }}
            className={className}
        />
    )
}
