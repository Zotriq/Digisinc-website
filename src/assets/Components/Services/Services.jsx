import React from 'react'
import SubTitle from '../Home-Page/SubTitle'
import { Helmet } from 'react-helmet-async';
import Title from './Title'
import ServicesGrid from './ServicesGrid'
import PricingSection from './PricingSection'
import { NavLink } from 'react-router-dom';
import Footer from '../Footer'

const servicesContent = {
    topContent: {
        title: "Services",
        subTitle: {
            h3: " We build the tech that drives your",
            span: "Digital Growth"
        },
        p: "We don't just build software; we build growth engines. We follow a singular rule: Every solution from AI automations and custom web apps to UI/UX and graphic design must directly contribute to your bottom line."
    },
    services: [
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"
                    stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m10 9-3 3 3 3" />
                    <path d="m14 15 3-3-3-3" />
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                </svg>
            ),
            title: "Website & Apps",
            p: "Your digital interface is your most valuable employee. We engineer custom, high performance web applications that are fast, reliable, and optimized for seamless cross-device experiences."
        },
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"
                    stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8V4H8" />
                    <rect width="16" height="12" x="4" y="8" rx="2" />
                    <path d="M2 14h2" />
                    <path d="M20 14h2" />
                    <path d="M15 13v2" />
                    <path d="M9 13v2" />
                </svg>
            ),
            title: "AI Automations & Systems",
            p: "Scale your business without increasing your headcount. We eliminate manual 'busy work' by building the digital backbone your team needs to move faster and with more precision."
        },
        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"
                    stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 22a5 5 0 0 1-2-4" />
                    <path d="M7 16.93c.96.43 1.96.74 2.99.91" />
                    <path d="M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" />
                    <path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    <path d="M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z" />
                </svg>
            ),
            title: "Graphic Design",
            p: "We translate complex brand ideas into high impact visual assets. From social media kits to high stakes pitch decks, we design visuals that capture attention and build authority."
        },

        {
            svg: (
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"
                    stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
                    <path d="M10 19v-3.96 3.15" />
                    <path d="M7 19h5" />
                    <rect width="6" height="10" x="16" y="12" rx="2" />
                </svg>
            ),
            title: "UI/UX",
            p: "Design is more than aesthetics; it's conversion science. We build intuitive, high converting interfaces that guide users effortlessly from curiosity to loyalty."
        }
    ],
    pricing: {
        subTitle: {
            h3: "Transparent pricing for your",
            span: "Digital Evolution"
        },
        p: "Our straightforward investment tiers ensure you always know what you're paying for and exactly what you're getting. No hidden fees. No surprise billing. Just results.",
    }
}

const Services = () => {
    return (
        <main>
            <Helmet>
                <title>Services | AI Automations, Web & Design | Digisinc</title>
                <meta name="description" content="Discover Digisinc's professional services: Custom AI Workflows, High-performance React Apps, UI/UX Design, and Graphic Design." />
                <link rel="canonical" href="https://digisinc.solutions/services" />
            </Helmet>
            <div className='mt-16 md:mt-20 xl:mt-24'></div>
            <Title title={servicesContent.topContent.title} />
            <SubTitle data={servicesContent.topContent} />
            <ServicesGrid services={servicesContent.services} />
            <SubTitle data={servicesContent.pricing} />
            <PricingSection />
            <NavLink
                to="/contact"
                aria-label="Hire Digisinc for AI automation and web development services"
                className="z-10 block mx-auto w-fit text-center font-medium shadow-sm text-[55px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[100px] mb-5 text-[#c3e264] drop-shadow-[0_5px_5px_#293102] font-['Rosellinda_Alyamore']"
            >
                let's talk!
            </NavLink>
            <Footer />
        </main>
    )
}

export default Services
