import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const ProjectSection = ({ data }) => {
    const projectList = Array.isArray(data) ? data : [];

    // Container variant to handle the staggering of children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                // This makes the cards pop in one after another
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    // Item variant for the individual card movement
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 12
            }
        },
    };

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }} // Triggers when 10% of the section is visible
            className="grid grid-cols-1 md:grid-cols-2 
                gap-10 px-auto mx-auto
                w-[calc(100%-8px)]
                max-w-[450px] 
                md:max-w-[850px] 
                lg:max-w-[1000px] 
                xl:max-w-[1100px] 
                3xl:max-w-[1400px]
                mb-10"
        >
            {projectList.map((project) => (
                <motion.div key={project.id} variants={cardVariants}>
                    <ProjectCard project={project} />
                </motion.div>
            ))}
        </motion.section>
    );
};

export default ProjectSection;