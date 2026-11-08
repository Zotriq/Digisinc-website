import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'

const ServicesGrid = ({ services }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25, // Increased stagger for luxury feel
                delayChildren: 0.1
            }
        }
    }

    const cardEntranceVariants = {
        hidden: {
            opacity: 0,
            y: 40,                // Deeper drift
            filter: "blur(10px)", // Heavier blur
            scale: 0.97
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                duration: 1.4,       // Very slow and smooth
                ease: [0.16, 1, 0.3, 1] // Out Quint
            }
        }
    }

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className='grid grid-cols-1 md:grid-cols-2 
                       px-4 gap-8 md:px-auto mx-auto
                       my-6 md:my-10 xl:my-12
                       w-[calc(100%-8px)]
                       max-w-[450px] md:max-w-[850px] lg:max-w-[1050px] 
                       xl:max-w-[1150px] 3xl:max-w-[1400px]'
        >
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    svg={service.svg}
                    title={service.title}
                    p={service.p}
                    variants={cardEntranceVariants}
                />
            ))}
        </motion.section>
    )
}

export default ServicesGrid