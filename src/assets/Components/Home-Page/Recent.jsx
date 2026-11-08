import React from 'react';
import { motion } from 'framer-motion';

const Recent = ({ data }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                visible: { transition: { staggerChildren: 0.15 } }
            }}
            className='flex flex-wrap items-center justify-center gap-y-4 py-4 md:gap-y-6 md:py-6 xl:gap-y-6 mx-auto w-full px-2 lg:w-3/4 xl:w-2/3 2xl:w-1/2'
        >
            {data.map((item) => (
                <motion.div
                    key={item.id}
                    variants={{
                        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                    }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center min-w-[150px] flex-1"
                >
                    <span className="font-medium text-white leading-tight text-[20px] md:text-[24px] lg:text-[28px]">
                        {item.value}
                    </span>
                    <p className="text-gray-400 font-medium whitespace-nowrap text-[16px] md:text-[18px] lg:text-[20px]">
                        {item.label}
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Recent;