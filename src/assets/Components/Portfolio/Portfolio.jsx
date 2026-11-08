import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SubTitle from '../Home-Page/SubTitle';
import Title from '../Services/Title';
import ProjectSection from '../Home-Page/ProjectSection';
import GraphicsProjects from './GraphicsProjects';
import Footer from '../Footer';
import { Helmet } from 'react-helmet-async';
const portfolioContent = {
    title: "Projects",
    subTitle: {
        h3: "Witness the Digital",
        span: "Transformation."
    },
    p: "Browse the blueprints of brands we've scaled from 'emerging' to 'essential.' We specialize in the high stakes digital evolution required to push a brand past its plateau and toward its next peak through performance engineering and relentless optimization."
};

const buttons = [
    "Web & Apps",
    "Graphic Design"
];

const ProjectsData = {
    "Web & Apps": [
        {
            id: 1,
            title: "Hijab Store",
            description: "A luxury e-commerce experience optimized for conversions. We combined high end aesthetic with seamless UX, resulting in a 40% increase in mobile checkout completion.",
            thumbnail: "./media/Projects/Web-Projects/Hijab.png",
            technologies: [
                { "name": "HTML5", "icon": "./media/icons/html.jpg" },
                { "name": "Tailwind CSS", "icon": "./media/icons/tailwind.jpg" },
                { "name": "JavaScript", "icon": "./media/icons/js.png" },
                { "name": "WordPress", "icon": "./media/icons/wp.jpg" }
            ]
        },
        {
            id: 2,
            title: "Forever - Shopping Brand",
            description: "Built for speed and scale. A headless React architecture designed to handle high traffic spikes while maintaining sub-second load times across all devices.",
            thumbnail: "./media/Projects/Web-Projects/Forever.png",
            technologies: [
                { "name": "Tailwind CSS", "icon": "./media/icons/tailwind.jpg" },
                { "name": "React", "icon": "./media/icons/react.png" }
            ]
        },
        {
            id: 3,
            title: "Kool Engineering Services",
            description: "An authoritative corporate portal for industrial experts. Features a precision led UI to showcase complex technical consulting and engineering solutions.",
            thumbnail: "./media/Projects/Web-Projects/Kool.png",
            technologies: [
                { "name": "HTML5", "icon": "./media/icons/html.jpg" },
                { "name": "Bootstrap", "icon": "./media/icons/bs.png" },
                { "name": "JavaScript", "icon": "./media/icons/js.png" },
                { "name": "WordPress", "icon": "./media/icons/wp.jpg" }

            ]
        },
        {
            id: 4,
            title: "Ys Photography",
            description: "A visually immersive gallery designed for high resolution performance. Focused on storytelling through lightning fast image loading and cinematic layout.",
            thumbnail: "./media/Projects/Web-Projects/Photo.png",
            technologies: [
                { "name": "HTML5", "icon": "./media/icons/html.jpg" },
                { "name": "Tailwind CSS", "icon": "./media/icons/tailwind.jpg" },
                { "name": "JavaScript", "icon": "./media/icons/js.png" }
            ]

        },
        {
            id: 5,
            title: "Saih Al Duba SPC",
            description: "An ISO standard industrial hub for construction and IoT. Developed to project corporate trust and technical dominance in the Middle Eastern telecom market.",
            thumbnail: "./media/Projects/Web-Projects/Saih.png",
            technologies: [
                { "name": "Tailwind CSS", "icon": "./media/icons/tailwind.jpg" },
                { "name": "React", "icon": "./media/icons/react.png" },
            ]
        },
        {
            id: 6,
            title: "Azreesha Visa Company",
            description: "A workflow driven platform for global recruitment. Streamlines complex visa processing with a secure, professional-grade management interface.",
            thumbnail: "./media/Projects/Web-Projects/Arzeesha.png",
            technologies: [
                { "name": "Tailwind CSS", "icon": "./media/icons/tailwind.jpg" },
                { "name": "React", "icon": "./media/icons/react.png" },
            ]
        },

        {
            id: 7,
            title: "Abu Tayyab Portfolio",
            description: "A personal brand architecture showcasing full-stack capabilities and AI systems. Built with modern UI patterns to prove technical authority.",
            thumbnail: "./media/Projects/Web-Projects/Tayyab.png",
            technologies: [
                { "name": "HTML5", "icon": "./media/icons/html.jpg" },
                { "name": "Tailwind CSS", "icon": "./media/icons/tailwind.jpg" },
                { "name": "JavaScript", "icon": "./media/icons/js.png" }
            ]
        }
    ],
    "Graphic Design": [
        { id: 1, thumbnail: "./media/Projects/design/1.png" },
        { id: 2, thumbnail: "./media/Projects/design/2.png" },
        { id: 3, thumbnail: "./media/Projects/design/3.png" },
        { id: 4, thumbnail: "./media/Projects/design/4.png" },
        { id: 5, thumbnail: "./media/Projects/design/5.png" },
        { id: 6, thumbnail: "./media/Projects/design/6.png" },
        { id: 7, thumbnail: "./media/Projects/design/7.png" },
        { id: 8, thumbnail: "./media/Projects/design/8.png" },
        { id: 9, thumbnail: "./media/Projects/design/9.png" },
        { id: 10, thumbnail: "./media/Projects/design/10.png" },
        { id: 11, thumbnail: "./media/Projects/design/11.png" },
        { id: 12, thumbnail: "./media/Projects/design/12.png" },
        { id: 13, thumbnail: "./media/Projects/design/13.png" },
        { id: 14, thumbnail: "./media/Projects/design/14.png" },
        { id: 15, thumbnail: "./media/Projects/design/15.png" },
        { id: 16, thumbnail: "./media/Projects/design/16.png" },
        { id: 17, thumbnail: "./media/Projects/design/17.png" },
        { id: 18, thumbnail: "./media/Projects/design/18.png" }
    ]
};

const Portfolio = () => {
    // Hooks must be inside the component
    const [activeTab, setActiveTab] = useState("Web & Apps");
    const filteredProjects = ProjectsData[activeTab] || [];

    // Filter projects based on the active tab


    return (
        <main >
            <Helmet>
                <title>Our Projects | AI & Web Development Portfolio | Digisinc</title>
                <meta name="description" content="Browse our digital transformation projects. From E-commerce platforms like Hijab Store to custom AI integrations for engineering and recruitment." />
                <link rel="canonical" href="https://digisinc.com/projects" />
            </Helmet>
            <div className=' mt-16 md:mt-20 xl:mt-24'></div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Title title={portfolioContent.title} />
                <SubTitle data={portfolioContent} />
            </motion.div>

            {/* Buttons Container */}
            <motion.div
                className="flex flex-wrap gap-4 mt-8 justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }} // Reveal at 5% visibility
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } } // Staggered appearance
                }}
            >
                {buttons.map((btn, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setActiveTab(btn)}
                        variants={{
                            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                            visible: {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                            }
                        }}
                        className={`text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] 
                font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full border-2 
                transition-all duration-300 ease-in-out whitespace-nowrap 
                ${activeTab === btn
                                ? "bg-[#c3e264] text-[#222222] border-[#c3e264] shadow-[0_0_20px_rgba(195,226,100,0.3)]"
                                : "bg-[#222222] text-gray-300 border-[#c3e264] hover:text-white hover:bg-[#2a2a2a] hover:shadow-[0_0_25px_rgba(195,226,100,0.1)] hover:-translate-y-0.5 active:scale-95"
                            }`}
                    >
                        {btn}
                    </motion.button>
                ))}
            </motion.div>
            <section className="mt-8 px-4 max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {activeTab === "Web & Apps" ? (
                            <ProjectSection data={ProjectsData["Web & Apps"]} />
                        ) : activeTab === "Graphic Design" ? (
                            <GraphicsProjects data={ProjectsData['Graphic Design']} />
                        ) : (
                            <div className="py-20 text-center">
                                <p className="text-gray-400 italic">No projects found in this category.</p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </section>
            <Footer />

        </main>
    );
};

export default Portfolio;