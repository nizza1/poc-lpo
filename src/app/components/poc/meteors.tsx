import React from 'react'
import { Meteors } from "@/components/magicui/meteors";
const MeteorsPOC = () => {
    return (
        <div className='relative min-h-[80vh] flex items-center justify-center overflow-hidden'>
            <Meteors number={20} />
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                LPO
            </span>
        </div>
    )
}

export default MeteorsPOC


