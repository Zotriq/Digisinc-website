import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pricingData = [
    {
        category: "Websites and Apps",
        id: "Web & Apps",
        plans: [
            {
                tier: "Basic",
                name: "Landing Page",
                focus: "A precision built landing page designed for a single goal.",
                best: "High stakes product launches, lead magnets, or personal authority sites.",
                features: ["Single-page React/Next.js site", "SEO Optimized performance", "Mobile-first responsive design"]
            },
            {
                tier: "Intermediate",
                name: "Professional Website",
                focus: "Establishing market leadership and brand trust.",
                best: "Growing businesses requiring content scale and high traffic reliability.",
                features: ["Multi-page architecture", "CMS Integration", "Advanced SEO & Analytics"]
            },
            {
                tier: "Premium",
                name: "Web Apps",
                focus: "Custom software architecture that generates recurring value.",
                best: "SaaS startups, online stores, or internal company tools.",
                features: ["Full E-commerce setup", "User Authentication & Dashboards", "Custom Database & API Integrations"]
            }
        ]
    },
    {
        category: "AI Automations & Systems",
        id: "AI Automations",
        plans: [
            {
                tier: "Basic",
                name: "Task Automator",
                focus: "Eliminating manual data entry and repetitive overhead.",
                best: "Lean teams needing to automate core business triggers.",
                features: ["3 Custom n8n Workflows", "Standard Webhook Integration", "Email/Notification Alerts"]
            },
            {
                tier: "Intermediate",
                name: "Workflow Architect",
                focus: "Building the 'Logical Engine' for business operations.",
                best: "Growing agencies needing conditional logic and data transformation.",
                features: ["6 Advanced n8n Workflows", "Data Transformation & Mapping", "JavaScript/Function Nodes"]
            },
            {
                tier: "Premium",
                name: "AI Neural Systems",
                focus: "Integrating LLMs directly into your n8n workflows.",
                best: "Companies wanting autonomous AI Agents.",
                features: ["AI-Powered n8n Agents", "Custom Knowledge Retrieval (RAG)", "Smart AI Error Recovery"]
            }
        ]
    },
    {
        category: "Graphic & Digital Design",
        id: "Graphic Design",
        plans: [
            {
                tier: "Basic",
                name: "Social Starter",
                focus: "Keeping your brand active and professional on social media.",
                best: "Small businesses needing a consistent look.",
                features: ["5 Custom Social Media Posts", "2 High-Impact Brand Banners", "Single Platform Focus"]
            },
            {
                tier: "Intermediate",
                name: "Growth Kit",
                focus: "A complete digital presence designed to grab attention.",
                best: "Scaling brands needing assets for ads and emails.",
                features: ["12 Custom Graphics", "Ad Creative Set (Meta/Google)", "Branded Email Templates"]
            },
            {
                tier: "Premium",
                name: "Visual Identity Partner",
                focus: "Total brand dominance with custom creative assets.",
                best: "Companies launching products or heavy ad campaigns.",
                features: ["Unlimited Monthly Requests", "Full Cohesive Campaign Suite", "Custom Illustrations & Icons"]
            }
        ]
    },
    {
        category: "UI/UX Design",
        id: "UI/UX",
        plans: [
            {
                tier: "Basic",
                name: "Visual Refresh",
                focus: "Cleaning up your current site for a modern look.",
                best: "Existing websites that feel dated or hard to use.",
                features: ["Visual Friction Audit", "Custom Style Guide", "3 Key Page Mockups"]
            },
            {
                tier: "Intermediate",
                name: "Product Prototype",
                focus: "Designing a brand-new digital product from the ground up.",
                best: "Startups building a new app or complex tool.",
                features: ["User Journey Mapping", "Interactive Figma Prototype", "Full Component Library"]
            },
            {
                tier: "Premium",
                name: "Experience Lead",
                focus: "Using data and psychology to maximize revenue.",
                best: "Established platforms needing higher conversion rates.",
                features: ["Conversion Rate Optimization (CRO)", "Advanced User Testing", "Full Scalable Design System"]
            }
        ]
    }
];

const buttons = ["Web & Apps", "AI Automations", "Graphic Design", "UI/UX"];

const PricingSection = () => {
    const [activeTab, setActiveTab] = useState("Web & Apps");
    const activeCategory = pricingData.find(item => item.id === activeTab);

    // Cinematic Reveal Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.5 }
        }
    };

    const cardEntranceVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            filter: "blur(4px)",
            scale: 0.98
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                duration: 1.0, // Luxury slow motion
                ease: [0.16, 1, 0.3, 1] // Out Quint curve
            }
        }
    };

    return (
        <div className="py-12 overflow-hidden">
            {/* Navigation Grid */}
            <motion.div
                className="flex flex-wrap justify-center items-center my-2 gap-2 md:gap-6 px-4 pb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={{
                    visible: { transition: { staggerChildren: 0.08 } }
                }}
            >
                {buttons.map((btn) => (
                    <motion.button
                        key={btn}
                        onClick={() => setActiveTab(btn)}
                        // Reveal Animation Variants
                        variants={{
                            hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
                            visible: {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                            }
                        }}
                        // Keep your existing hover/active logic
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
            {/* Animated Plans Display */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-wrap justify-center gap-8 px-4"
                >
                    {activeCategory?.plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={cardEntranceVariants}
                            whileHover={{
                                scale: 1.015,
                                transition: { duration: 0.4 }
                            }}
                            className="w-full max-w-[450px] p-6 sm:p-8 md:p-10 flex flex-col gap-2 bg-[#222222] border-2 border-[#c3e264] rounded-3xl transition-shadow duration-500 hover:shadow-[0_0_25px_rgba(195,226,100,0.15)]"
                        >
                            {/* Header / Tier */}
                            <div className="flex items-center justify-start gap-4 mb-2">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#222222] border-2 border-[#c3e264] flex items-center justify-center">
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#c3e264]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-[#c3e264]">
                                    {plan.tier}
                                </h3>
                            </div>

                            {/* Title & Best For */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl sm:text-xl lg:text-2xl font-semibold tracking-tight text-white">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-400 text-base sm:text-md leading-relaxed">
                                    <span className="font-semibold text-gray-300">Best for:</span> {plan.best}
                                </p>
                            </div>

                            <div className="border-t border-[#c3e264]/30 my-2"></div>

                            {/* Features List */}
                            <div className="flex flex-col gap-2">
                                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Includes:</h4>
                                <ul className="space-y-4 text-gray-300 text-base sm:text-lg">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <span className="text-[#c3e264] text-2xl leading-none">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default PricingSection;