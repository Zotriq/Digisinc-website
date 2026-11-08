import React from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({ svg, title, p, variants }) => {
    return (
        <motion.div
            variants={variants}
            whileHover={{
                scale: 1.015,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
            }}
            className='bg-[#222222] border-[3px] border-[#c3e264] rounded-2xl p-6 md:p-10 font-sans
                w-full transition-shadow duration-700 hover:shadow-[0_20px_40px_rgba(195,226,100,0.1)]
                flex flex-col items-start'
        >
            {/* The Circle Container */}
            <div className='bg-[#c3e264] rounded-full w-20 h-20 md:w-24 md:h-24 
                flex items-center justify-center mb-6 
                overflow-hidden shrink-0'>
                {/* Increased from 1/2 (50%) to 65% for a bolder look */}
                <div className="w-[65%] h-[65%] flex items-center justify-center">
                    {React.cloneElement(svg, {
                        className: "w-full h-full object-contain",
                        style: { width: '100%', height: '100%' }
                    })}
                </div>
            </div>

            <h3 className='text-white font-medium leading-[1.1] mb-3
                text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]'>
                {title}
            </h3>

            <p className='text-gray-400 leading-relaxed font-normal
                text-[14px] md:text-[16px] lg:text-[17px]'>
                {p}
            </p>
        </motion.div>
    )
}

export default ServiceCard