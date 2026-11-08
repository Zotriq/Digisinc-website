import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    return (
        <motion.div 
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#222222] border-[3px] md:border-[4px] border-[#c3e264] rounded-xl p-4 md:p-6 text-white w-full max-w-[450px] md:max-w-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(195,226,100,0.2)]"
        >

            {/* Thumbnail */}
            <div className="w-full h-[200px] md:h-[240px] bg-[#333333] rounded-[12px] flex items-center justify-center overflow-hidden mb-2 xl:mb-4">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading='lazy'
                />
            </div>

            <div className="px-1 md:px-2">
                <h1 className="font-medium text-gray-50 mb-2 leading-tight text-[20px] md:text-[24px] lg:text-[28px]">
                    {project.title}
                </h1>

                <p className="text-gray-300 leading-relaxed mb-2 xl:mb-4 text-[12px] md:text-[16px] lg:text-[18px]">
                    {project.description}
                </p>

                <div className="space-y-2 xl:space-y-4 ">
                    <h3 className="font-medium text-[14px] md:text-[16px] lg:text-[18px]">
                        Tools / Technologies:
                    </h3>

                    <div className="flex flex-wrap gap-2 md:gap-4">
                        {project.technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="w-8 h-8  md:w-12 md:h-12 rounded-full bg-[#e5e5e3] overflow-hidden flex items-center justify-center shadow-md"
                            >
                                <img
                                    src={tech.icon}
                                    alt={`tech-${index}`}
                                    className="w-full h-full object-cover"
                                    title={tech.name}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;