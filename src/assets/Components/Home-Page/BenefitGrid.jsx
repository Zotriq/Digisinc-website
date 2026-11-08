import React from 'react';
import { motion } from 'framer-motion';

const BenefitCard = ({ item, index }) => {
    const isWide = index === 0; // "Results That Matter"
    const isTall = index === 1; // "Intelligent Systems"

    // Unified Cinematic Variants
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            filter: "blur(15px)",
            scale: 0.97
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                duration: 2.0,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{
                y: -8,
                scale: 1.01,
                transition: { duration: 0.4, ease: "easeOut" }
            }}
            className={`bg-[#222222] border-[3px] md:border-4 border-[#c3e264] rounded-2xl 
            flex flex-col text-center items-center text-white
            transition-shadow duration-700 hover:shadow-[0_20px_40px_rgba(195,226,100,0.1)]
            ${isWide ? 'lg:col-span-2 p-6 md:p-10 justify-center order-1' : ''}
            ${isTall ? 'lg:row-span-2 p-8 justify-between order-2 lg:order-none' : ''}
            ${!isWide && !isTall ? 'p-6 justify-center order-3 md:order-4' : ''}`}
        >
            <div className={isTall ? 'mb-8 lg:mb-1' : ''}>
                <h1 className={`font-bold leading-[1.1] mb-2
                    ${isWide ? 'text-[22px] sm:text-[26px] md:text-[30px]' : ''}
                    ${isTall ? 'text-[20px] md:text-[24px]' : ''}
                    ${!isWide && !isTall ? 'text-[20px] md:text-[24px]' : ''}`}>
                    {item.title} <span className="text-[#c3e264]">{item.highlight}</span>
                </h1>

                <p className={`font-normal mx-auto
                    ${isWide ? 'text-gray-300 text-[16px] md:text-[18px] max-w-[90%] md:max-w-[100%]' : ''}
                    ${isTall ? 'text-gray-400 leading-relaxed text-[14px] md:text-[18px]' : ''}
                    ${!isWide && !isTall ? 'text-gray-400 text-[14px] md:text-[16px]' : ''}`}>
                    {item.desc}
                </p>
            </div>

            {item.stats && (
                <div className="flex flex-col items-center mt-8 lg:mt-0">
                    <span className="text-[50px] md:text-[60px] font-bold block text-[#c3e264] leading-none">
                        {item.stats}
                    </span>
                    <span className="text-[14px] md:text-[16px] text-gray-400 uppercase tracking-[0.2em] font-medium">
                        {item.statsLabel}
                    </span>
                </div>
            )}
        </motion.div>
    );
};

const BenefitsGrid = ({ data }) => {
    return (
        <section className="mt-4 px-auto mx-auto w-[calc(100%-8px)]
            max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1300px] mb-8">

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.3 // Slow stagger to let the layout "build" itself
                        }
                    }
                }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 text-white"
            >
                {data.map((item, index) => (
                    <BenefitCard key={item.id || index} item={item} index={index} />
                ))}
            </motion.div>
        </section>
    );
};

export default BenefitsGrid;