import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Introduction = function () {
    return (
        <div className="bg-[#131424]/60 w-full z-10">
            <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
                <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div
                        className="hidden w-auto h-auto mx-auto md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image src="/assets/home-4.png" priority width="800" height="600" alt="Avatar" />
                    </motion.div>

                    <motion.div
                        className=" mt-28 mb-16 overflow-y-auto h-full md:h-auto"
                        style={{ maxHeight: '100vh' }} // Limita la altura para móviles
                        variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <h1 className="mb-5 mt-8 text-3xl sm:text-4xl leading-tight md:mb-4">
                            Action is <br />
                            <span className="text-secondary">the key to success</span>
                        </h1>
                        <p className="max-w-sm text-md mb-4 md:max-w-2xl md:mx-0 md:mb-4 md:text-lg">
                            I am an experienced iOS Developer with over 2 years of professional experience in mobile and web development. My passion for technology and creating intuitive user interfaces has led me to specialize in the latest mobile technologies, particularly within the Apple ecosystem.
                        </p>
                        <p className="max-w-sm text-md text-secondary mt-2 md:max-w-2xl md:mx-0 md:text-xl">
                            Key Skills and Experience:
                        </p>
                        <div>
                            <p className="max-w-sm text-md mb-4 md:max-w-2xl md:mx-0 md:mb-4 md:text-sm">
                                - iOS Native Development: Proficient in Swift 5 and SwiftUI, building high-performance, user-centric native applications that leverage the latest iOS features.
                            </p>
                            <p className="max-w-sm text-md mb-4 md:max-w-2xl md:mx-0 md:mb-4 md:text-sm">
                                - Flutter Development: Developing cross-platform mobile applications for iOS and Android using Dart and Flutter, ensuring consistency and quality across both platforms.
                            </p>
                            <p className="max-w-sm text-md mb-4 md:max-w-2xl md:mx-0 md:mb-4 md:text-sm">
                                - Web Development: Skilled in React.js, Next.js, and TailwindCSS, crafting modern, responsive web interfaces with TypeScript.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
                            <a href="/works" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                                Projects
                            </a>
                            <a href="https://wa.me/+5353933754" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                Contact with me
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;
