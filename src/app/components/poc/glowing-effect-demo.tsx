"use client"

import type React from "react"

import { FileText, Scale, Search, Shield, Gavel } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

export default function GlowingEffectDemo() {
    return (
        <ul className="px-4 py-32 grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4  xl:grid-rows-2">
            <GridItem
                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icon={<FileText className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Document Review Services"
                description="Expert legal document review with precision and efficiency, reducing your in-house workload."
            />

            <GridItem
                area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                icon={<Scale className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Contract Management"
                description="Comprehensive contract drafting, review, and management services with attention to detail."
            />

            <GridItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Legal Research & Analysis"
                description="In-depth legal research and case analysis to support your firm's strategic decisions."
            />

            <GridItem
                area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                icon={<Shield className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Compliance Services"
                description="Stay compliant with evolving regulations through our specialized compliance monitoring and reporting."
            />

            <GridItem
                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                icon={<Gavel className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Litigation Support"
                description="Comprehensive litigation assistance including e-discovery, case preparation, and paralegal services."
            />
        </ul>
    )
}

interface GridItemProps {
    area: string
    icon: React.ReactNode
    title: string
    description: React.ReactNode
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area} text-[--foregroundLight]`}>
            <div className="relative h-full rounded-2xl border  p-2 md:rounded-3xl md:p-3 dark:border-white/10 dark:bg-zinc-950 ">
                <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={100}
                    inactiveZone={0.01} borderWidth={1} />
                <div className="border border-zinc-400/10 dark:border relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] ">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border p-2">{icon}</div>
                        <div className="space-y-3">
                            <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white/90">
                                {title}
                            </h3>
                            <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
