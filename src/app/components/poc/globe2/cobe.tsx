"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import createGlobe from "cobe"
import { useEffect, useRef } from "react"

export function DeployFeature() {
    const feature = {
        title: "Just another example of Globe ",
        description:
            "With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.",
        skeleton: <SkeletonFour />,
    }

    return (
        <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
            <div className="px-8">
                <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                    {feature.title}
                </h4>

                <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                    {feature.description}
                </p>
            </div>

            <div className="relative">
                <div className="mt-12 xl:border rounded-md dark:border-neutral-800">
                    <FeatureCard>
                        <div className="h-full w-full">{feature.skeleton}</div>
                    </FeatureCard>
                </div>
            </div>
        </div>
    )
}

const FeatureCard = ({
    children,
    className,
}: {
    children?: React.ReactNode
    className?: string
}) => {
    return <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>{children}</div>
}

export const SkeletonFour = () => {
    return (
        <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
            <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
        </div>
    )
}

export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        let phi = 0

        if (!canvasRef.current) return

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi
                phi += 0.01
            },
        })

        return () => {
            globe.destroy()
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
            className={className}
        />
    )
}
