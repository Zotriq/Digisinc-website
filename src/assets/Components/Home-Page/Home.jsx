import React from 'react'
import MainTitle from './MainTitle'
import SubTitle from './SubTitle';
import Socials from './Socials';
import Recent from './Recent';
import ProjectSection from './ProjectSection';
import ServicesSection from './ServiceSection';
import BenefitsGrid from './BenefitGrid';
import TestimonialsSection from './TestimonialsSection';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';



const homeContent = {
    marketing: {
        mainTitle: {
            h1: "The Performance Driven",
            span: "Agency"
        },
        subTitle: {
            h3: "Stop Guessing. Start",
            span: "Dominating"
        },
        p: "We don't just build websites; we build revenue engines. Partner with a results first agency that transforms your digital presence into a high performance growth machine."
    },
    stats: [
        { id: 1, value: "15+", label: "Recent Clients" },
        { id: 2, value: "98%", label: "Success Rate" },
        { id: 3, value: "25+", label: "Projects Sent" },
        { id: 4, value: "5+", label: "Expert Team" }
    ],
    projects: {
        mainTitle: {
            h1: "Our Recent",
            span: "Projects"
        },
        projectsContent: [
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
                description: "Built for speed and scale. A headless React architecture designed to handle high traffic spikes while maintaining sub second load times across all devices.",
                thumbnail: "./media/Projects/Web-Projects/Forever.png",
                technologies: [
                    { "name": "Tailwind CSS", "icon": "./media/icons/tailwind.jpg" },
                    { "name": "React", "icon": "./media/icons/react.png" }
                ]
            }
        ]
    },
    services: {
        mainTitle: {
            h1: "Our Core",
            span: "Capabilities"
        },
        services: [

            {
                title: "Websites &",
                highlight: "Apps",
                features: ["High-Conversion Landing Pages", "CMS Integrated Websites", "Full-Stack Web Apps & E-commerce"],
                benefit: "Digital real estate engineered to turn casual visitors into loyal customers."
            },
            {
                title: "AI Automations &",
                highlight: "Systems",
                features: ["Automations (n8n)", "Custom AI Workflows", "Chatbots & Neural Systems"],
                benefit: "Replace manual overhead with 24/7 autonomous systems that scale without increasing headcount."
            },
            {
                title: "Graphic",
                highlight: "Design",
                features: ["Social Media Content Kits", "Ad Creative Sets", "Presentation & Pitch Decks"],
                benefit: "Stop the scroll with high-impact visuals that demand attention and drive clicks."
            },
            {
                title: "UI/UX",
                highlight: "Design",
                features: ["Visual Audits & Style Guides", "User Journey & Wireframing", "Full Design Systems & CRO"],
                benefit: "Intuitive interfaces that reduce friction and skyrocket user engagement."
            },
        ]
    },
    benefits: {
        mainTitle: {
            h1: "Why Choose",
            span: "Us"
        },
        subTitle: {
            h3: "What we actually deliver to our",
            span: "Clients"
        },
        content: [
            {
                id: "results",
                title: "Results That",
                highlight: "Matter",
                desc: "Deliver real, trackable results in traffic, leads, sales, and brand reach."
            },
            {
                id: "systems",
                title: "Intelligent Systems",
                desc: "AI solutions that optimize workflows, save time, and reduce errors. Custom automation designed for scale.",
                stats: "10+",
                statsLabel: "Recent Clients"
            },
            {
                id: "custom",
                title: "Custom Approach",
                desc: "Every project is tailored to your brand and business goals."
            },
            {
                id: "growth",
                title: "Strategic Growth",
                desc: "Data-driven marketing strategies to grow your digital presence."
            }
        ]
    },
    testimonials: {
        mainTitle: {
            h1: "What our Clients Say",
            span: "Testimonials"
        },
        subTitle: {
            h3: "Discover real stories of our",
            span: "Clients"
        },
        reviews: [
            {
                "id": 1,
                "name": "Arsalan Khan",
                "text": "The web development team exceeded our expectations. They delivered a high performance, responsive site that has significantly improved our user retention rates."
            },
            {
                "id": 2,
                "name": "Zainab Malik",
                "text": "The AI integration for our customer support bot was seamless. It has automated nearly 60% of our routine queries, allowing our staff to focus on complex tasks."
            },
            {
                "id": 3,
                "name": "Bilal Ahmed",
                "text": "Outstanding graphic design work. They captured our brand identity perfectly with a modern UI/UX design that is both aesthetic and highly functional."
            },
            {
                "id": 4,
                "name": "Fatima Sohail",
                "text": "A truly versatile digital partner. From custom web portals to complex data visualization tools, their technical expertise in the Pakistani market is unmatched."
            }
        ]
    }
};



const Home = (props) => {
    return (
        <main>
            <Helmet>
                <title>Digisinc | AI Automations & High-Performance Web Agency</title>
                <meta name="description" content="Digisinc engineers digital growth through Autonomous AI Workflows, React Web Apps, and Strategic Design. Scale your business with our results-driven systems." />
                <link rel="canonical" href="https://digisinc.com/" />
            </Helmet>
            <div className='mt-8 md:mt-10 xl:mt-14 '></div>
            {/* Marketing  */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                    visible: {
                        transition: { staggerChildren: 0.15 }
                    }
                }}
                className='flex flex-col items-center justify-center pt-10 md:pt-12'
            >
                <MainTitle props={homeContent.marketing.mainTitle} isHero={true} />
                <SubTitle data={homeContent.marketing} />

                {/* Buttons Reveal */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                    }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 px-6'
                >
                    <Link
                        to="/projects"
                        aria-label="View Digisinc's portfolio of AI, Web, and Design projects"
                        className="w-full sm:w-auto text-center border-4 border-[#c3e264] text-white px-8 py-2 font-medium transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#c3e264] hover:text-black hover:scale-[1.02] active:scale-[0.98] text-[14px] md:text-[16px] lg:text-[20px]"
                    >
                        Projects
                    </Link>

                    <Link
                        to="/contact"
                        aria-label="Hire Digisinc for AI automation and web development services"
                        className="w-full sm:w-auto text-center bg-[#c3e264] border-4 border-[#c3e264] text-black px-8 py-2 font-medium transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-transparent hover:text-white hover:scale-[1.02] active:scale-[0.98] text-[14px] md:text-[16px] lg:text-[20px]"
                    >
                        Hire us!
                    </Link>
                </motion.div>

                <Socials />
                <Recent data={homeContent.stats} />
            </motion.section>

            {/* Projects  */}
            <section className='flex flex-col items-center justify-center m-6'>

                <MainTitle props={homeContent.projects.mainTitle} />
                <ProjectSection data={homeContent.projects.projectsContent} />


            </section>

            {/* Services  */}

            <section className='flex flex-col items-center justify-center m-6'>

                <MainTitle props={homeContent.services.mainTitle} />

                <ServicesSection data={homeContent.services} />

            </section>

            {/* Benefits  */}

            <section className='flex flex-col items-center justify-center m-6'>

                <MainTitle props={homeContent.benefits.mainTitle} />

                <SubTitle data={homeContent.benefits.subTitle} />

                <BenefitsGrid data={homeContent.benefits.content} />

            </section>

            {/* Testimonials  */}

            <section className='flex flex-col items-center justify-center m-8'>

                <MainTitle props={homeContent.testimonials.mainTitle} />

                <SubTitle data={homeContent.testimonials.subTitle} />

                <TestimonialsSection data={homeContent.testimonials} />


            </section>

            <Footer />
        </main>
    )
}

export default Home
