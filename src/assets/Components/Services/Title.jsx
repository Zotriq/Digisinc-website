import React from 'react'
import { motion } from 'framer-motion';

const Title = ({ title }) => {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
                duration: 2, // Increased for a slow, graceful reveal
                ease: [0.16, 1, 0.3, 1], // Custom ultra-smooth "Out Quint" curve
            }}
            className='fancy-font text-center px-4 py-5 text-[60px]  sm:text-[80px]  md:text-[100px]  lg:text-[120px]  xl:text-[140px]  leading-none mb-5'>
            {title}
        </motion.h2>
    )
}

export default Title
