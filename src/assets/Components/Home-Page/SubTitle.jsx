import React from 'react';
import { motion } from 'framer-motion';

const SubTitle = ({ data }) => {
    if (!data) return null;

    const titleText = data.subTitle?.h3 || data.h3;
    const spanText = data.subTitle?.span || data.span;
    const description = data.p;

    // Define the custom smooth curve to match MainTitle
    const smoothTransition = { duration: 1.8, ease: [0.16, 1, 0.3, 1] };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className='flex flex-col justify-center items-center mt-0 px-6 text-center'
        >
            <motion.h3
                variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={smoothTransition}
                className='text-white font-normal mb-4 leading-tight
                   text-[24px] md:text-[28px] lg:text-[30px] xl:text-[35px]'>
                {titleText}{" "}
                <span className='text-[#c3e264] font-medium'>
                    {spanText}
                </span>
            </motion.h3>

            {description && (
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                    }}
                    transition={{
                        ...smoothTransition,
                        duration: 2.5, // Slightly slower for depth
                        delay: 0.1
                    }}
                    className='text-gray-300 leading-relaxed mx-auto
                       text-[14px] max-w-[350px]
                       md:text-[16px] md:max-w-[650px]
                       lg:text-[18px] lg:max-w-[850px]
                       xl:text-[22px] xl:max-w-[1000px]'>
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
};

export default SubTitle;