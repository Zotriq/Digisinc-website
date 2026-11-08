import React from 'react'
import { motion } from 'framer-motion'

const GraphicsProjects = ({ data }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.08
                    }
                }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
        >
            {data.map((item) => (
                <motion.div
                    key={item.id}
                    variants={{
                        hidden: { opacity: 0, y: 30, scale: 0.9 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }
                        }
                    }}
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                    }}
                    className="relative group overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-xl aspect-square cursor-pointer"
                >
                    <img
                        src={item.thumbnail}
                        alt={`Design Work ${item.id}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default GraphicsProjects
