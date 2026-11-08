import React from 'react'
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const MainTitle = ({ props, isHero = false }) => {
    // Hero section animates immediately; all other sections animate on scroll
    const animateProps = isHero
        ? { animate: { opacity: 1, y: 0, filter: "blur(0px)" } }
        : { whileInView: { opacity: 1, y: 0, filter: "blur(0px)" }, viewport: { once: true, margin: "-80px" } };

    return (
        <div className="flex flex-col items-center justify-center mt-5 relative px-5">
            <motion.h1
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                {...animateProps}
                transition={{ duration: 1.8, ease: EASE }}
                className="text-white font-medium leading-none text-center
               text-[24px] 
               sm:text-[42px] 
               md:text-[50px] 
               lg:text-[65px]">
                {props.h1}
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 60, filter: "blur(15px)" }}
                {...animateProps}
                transition={{ duration: 2.2, delay: 0.15, ease: EASE }}
                className="z-10 shadow-sm text-center font-medium
               text-[50px] -mt-6 text-[#c3e264]
               sm:text-[80px] sm:-mt-8 
               md:text-[100px] md:-mt-12
               lg:text-[120px] lg:-mt-16
               xl:text-[140px] xl:-mt-20">
                {props.span}
            </motion.h2>
        </div>
    )
}

export default MainTitle