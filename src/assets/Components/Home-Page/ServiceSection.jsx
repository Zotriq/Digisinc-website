import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, highlight, features, benefit }) => {
    // Shared cinematic reveal variant
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60, // Increased drift for a slower feel
            filter: "blur(15px)", // deeper blur
            scale: 0.96
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                duration: 2.2, // Pushed to 2.2s for high-end luxury speed
                ease: [0.16, 1, 0.3, 1] // Out Quint
            }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{
                scale: 1.015,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
            }}
            // REMOVED 'transition-all' to prevent conflict with Framer Motion
            className="bg-[#222222] border-[3px] md:border-[4px] border-[#c3e264] rounded-2xl p-6 font-sans mx-0 mb-8
                w-[calc(100%-8px)]
                max-w-[500px] md:max-w-[800px] lg:max-w-[1100px] xl:max-w-[1300px] 2xl:max-w-[1500px]
                hover:shadow-[0_20px_40px_rgba(195,226,100,0.1)] transition-shadow duration-700"
        >
            {/* title */}
            <h1 className="text-white font-medium leading-[1.1] text-left mb-4
                text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[26px]">
                {title}{" "}
                <span className="text-white">{highlight}</span>
            </h1>

            {/* features */}
            <ul className="space-y-2 md:space-y-3 mb-4 text-white">
                {features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-medium 
                        text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                        <span className="w-1.5 h-1.5 bg-[#c3e264] rounded-full shrink-0"></span>
                        {item}
                    </li>
                ))}
            </ul>

            {/* benefits */}
            <div className="pt-4 border-t border-gray-700/50">
                <h4 className="text-[#c3e264] font-medium mb-1
                    text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
                    Benefits:
                </h4>
                <p className="text-gray-400 leading-relaxed 
                    md:text-[12px] lg:text-[14px] xl:text-[16px]">
                    {benefit}
                </p>
            </div>
        </motion.div>
    );
};

const ServicesSection = ({ data }) => {
    return (
        <section className="mt-0 px-auto flex flex-col items-center">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.3 // Increased stagger for a more deliberate "one-by-one" reveal
                        }
                    }
                }}
                className="grid grid-cols-1 md:grid-cols-2 
                gap-8 px-auto mx-auto
                my-2 md:my-4
                w-[calc(100%-8px)]
                max-w-[450px] md:max-w-[850px] lg:max-w-[1050px] xl:max-w-[1150px] 3xl:max-w-[1400px]"
            >
                {data.services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        highlight={service.highlight}
                        features={service.features}
                        benefit={service.benefit}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default ServicesSection;