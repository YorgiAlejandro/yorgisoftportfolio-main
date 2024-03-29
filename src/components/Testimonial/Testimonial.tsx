"use client"
import { motion } from 'framer-motion'
import { AvatarWorks } from '../AvatarWorks/AvatarWorks'
import { Circle } from "@/components/Circle/Circle"
import { fadeIn } from '@/utils/motionTransitions'
import { TestimonialSlider } from './TestimonialSlider/TestimonialSlider'

export function Testimonial() {
    return (
        <div className='h-screen'>
            <AvatarWorks />
            <Circle />
            <div className="flex flex-col justify-center min-h-screen">
                <motion.h1
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="my-5 text-4xl text-center md:my-10"
                >
                    Some comments <br /><span className="text-secondary">of our clients.</span>
                </motion.h1>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <TestimonialSlider />
                </motion.div>
            </div>
        </div>
    )
}