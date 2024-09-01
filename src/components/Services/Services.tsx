"use client"
import { fadeIn } from "@/utils/motionTransitions";
import { AvatarWorks } from "../AvatarWorks/AvatarWorks";
import { Circle } from "../Circle/Circle";
import { motion } from 'framer-motion'
import { Slider } from "./Slider/Slider";

export function Services() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Circle />
            <AvatarWorks />

            <div className="flex flex-col md:flex-row gap-x-5 mt-12">
                <div className="flex flex-col text-center md:text-left md:w-[30vw] mb-10">
                    <motion.h1 className="mb-4 text-3xl"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        My <span className="text-secondary">services.</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="max-w-md text-sm">
                        As a software developer with experience in a variety of programming languages and frameworks, I offer a range of services to help businesses achieve their technology goals. Here are some of the services I offer:
                    </motion.p>
                </div>

                <motion.div
                    variants={fadeIn('up', 0.7)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <Slider />
                </motion.div>
            </div>
        </div>
    )
}