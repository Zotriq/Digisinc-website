import React from 'react';
import { motion } from 'framer-motion';
import Title from '../Services/Title';
import Footer from '../Footer';
import { Helmet } from 'react-helmet-async';

const contactContent = {
    title: "Contact Us",
    subTitle: "Let's talk.",
    description: "New projects, collaborations, or just a chit chat. We're ready when you are.",
    inquiries: {
        label: "Inquiries",
        email: "digisinc.solutions@gmail.com"
    },
    directCall: {
        label: "Direct Call",
        number: "+92 317 8433864"
    },
    services: [
        { value: "ai", label: "AI Automations" },
        { value: "web", label: "Web & Apps" },
        { value: "uiux", label: "UI/UX Design" },
        { value: "graphic", label: "Graphic Design" }
    ]
};

const Contact = () => {
    const cinematicVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            filter: "blur(10px)",
            scale: 0.98
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

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <main>
            <Helmet>
                <title>Contact Us | Get a Free AI & Web Audit | Digisinc</title>
                <meta name="description" content="Ready to scale? Contact Digisinc today for a free consultation on AI automations, web development, or UI/UX design. Let's build your growth engine." />
                <link rel="canonical" href="https://digisinc.com/contact" />
            </Helmet>
            <div className='mt-16 md:mt-20 xl:mt-24'></div>

            {/* Title usually handles its own animation, but we'll ensure layout stability */}
            <Title title={contactContent.title} />

            <div className="max-w-7xl mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Contact Details */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.05 }}
                        variants={containerVariants}
                        className="flex flex-col gap-12 sm:gap-20"
                    >
                        <motion.div variants={cinematicVariants}>
                            <h2 className="fancy-font text-[#c3e264] leading-tight mb-4
                                text-[45px] sm:text-[60px] md:text-[80px] lg:text-[90px]">
                                {contactContent.subTitle}
                            </h2>
                            <p className="text-gray-400 text-base sm:text-lg max-w-sm">
                                {contactContent.description}
                            </p>
                        </motion.div>

                        <motion.div variants={cinematicVariants} className="space-y-8">
                            <a href={`mailto:${contactContent.inquiries.email}`} className="group block">
                                <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-2">
                                    {contactContent.inquiries.label}
                                </p>
                                <span className="text-lg md:text-xl text-[#c3e264] font-medium border-b-2 border-transparent group-hover:border-[#c3e264] transition-all duration-500 break-words">
                                    {contactContent.inquiries.email}
                                </span>
                            </a>

                            <div>
                                <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-2">
                                    {contactContent.directCall.label}
                                </p>
                                <span className="text-lg md:text-xl text-gray-300 font-light italic">
                                    {contactContent.directCall.number}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: The Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.05 }}
                        variants={cinematicVariants}
                        className="w-full"
                    >
                        <form onSubmit={(e) => e.preventDefault()} className="relative group w-full">
                            <div className="absolute -inset-1 bg-[#c3e264] rounded-[2rem] opacity-5 blur-xl group-hover:opacity-10 transition duration-1000"></div>

                            <div className="relative bg-[#222222] rounded-[2rem] p-8 sm:p-12 border-2 border-[#c3e264]/10 flex flex-col gap-10 transition-all duration-500 group-hover:border-[#c3e264]/30 shadow-2xl">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                                    <div className="relative">
                                        <input type="text" id="fname" placeholder=" " required className="peer w-full bg-transparent border-b-2 border-gray-700 py-2 text-white outline-none focus:border-[#c3e264] transition-all" />
                                        <label htmlFor="fname" className="absolute left-0 top-2 text-gray-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-[#c3e264] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[10px]">
                                            First Name
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <input type="text" id="phone" placeholder=" " required className="peer w-full bg-transparent border-b-2 border-gray-700 py-2 text-white outline-none focus:border-[#c3e264] transition-all" />
                                        <label htmlFor="phone" className="absolute left-0 top-2 text-gray-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-[#c3e264] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[10px]">
                                            Phone
                                        </label>
                                    </div>
                                </div>

                                <div className="relative">
                                    <input type="email" id="email" placeholder=" " required className="peer w-full bg-transparent border-b-2 border-gray-700 py-2 text-white outline-none focus:border-[#c3e264] transition-all autofill:text-white autofill:bg-transparent" />
                                    <label htmlFor="email" className="absolute left-0 top-2 text-gray-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-[#c3e264] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-[10px]">
                                        Email Address
                                    </label>
                                </div>

                                <div className="relative pt-4">
                                    <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">Service Interest</label>
                                    <select className="w-full bg-transparent border-b-2 border-gray-700 py-2 text-white outline-none appearance-none cursor-pointer focus:border-[#c3e264]">
                                        <option className="bg-[#222222]" value="" disabled selected>Select Service</option>
                                        {contactContent.services.map((service) => (
                                            <option key={service.value} className="bg-[#222222]" value={service.value}>
                                                {service.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="relative pt-4">
                                    <textarea id="desc" rows="3" placeholder=" " className="peer w-full bg-transparent border-b-2 border-gray-700 py-2 text-white outline-none focus:border-[#c3e264] transition-all resize-none"></textarea>
                                    <label htmlFor="desc" className="absolute left-0 top-4 text-gray-500 text-xs uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c3e264] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
                                        Project Brief
                                    </label>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                                    <button type="submit" className="group relative px-8 py-3 w-full sm:w-auto overflow-hidden rounded-full border-2 border-[#c3e264] transition-all active:scale-95">
                                        <span className="relative z-20 text-black text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors duration-500">
                                            Submit Request
                                        </span>
                                        <div className="absolute inset-0 z-10 bg-[#c3e264] transition-transform duration-500 group-hover:-translate-y-full"></div>
                                        <div className="absolute inset-0 z-0 bg-[#222222] transition-transform duration-500 translate-y-full group-hover:translate-y-0"></div>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Contact;