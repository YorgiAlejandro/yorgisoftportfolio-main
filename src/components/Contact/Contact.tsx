"use client"

import { AvatarWorks } from "../AvatarWorks/AvatarWorks"
import { Circle } from "@/components/Circle/Circle"
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motionTransitions'
import { BsArrowRight } from "react-icons/bs";

export function Contact() {




    return (
        <div className="h-screen">
            <AvatarWorks />
            <Circle />
            <div className="flex flex-col justify-center items-center min-h-screen">
                <motion.h1
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="my-5 text-4xl text-center md:my-10"
                >
                    Let <span className="text-secondary">Connect.</span>
                </motion.h1>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
                        <div className="flex gap-x-6 w-full">
                            <input
                                className="bg-[#4b3792] opacity-50 border-white/50 border p-3 rounded-lg"
                                type="text" placeholder="Name" />
                            <input
                                className="bg-[#4b3792] opacity-50 border-white/50 border p-3 rounded-lg"
                                type="text" placeholder="Email" />
                        </div>
                        <textarea
                            className="bg-[#4b3792] opacity-50 border-white/50 border p-3 rounded-lg"
                            placeholder="Message"
                            name="" id="">
                        </textarea>
                        <button className="rounded-full border border-white/50 max-w-[170px] px-8 transition-all
                        duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                            <span 
                            className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                Lets Talk
                            </span>
                            <BsArrowRight 
                            className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
                            group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
                        </button>

                    </form>
                </motion.div>
            </div>

        </div>
    )
}