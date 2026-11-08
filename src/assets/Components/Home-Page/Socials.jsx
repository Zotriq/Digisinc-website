import React from 'react';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';



const Socials = () => {

    const socialLinks = [

        {

            name: 'LinkedIn',

            path: 'https://linkedin.com',

            icon: (

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">

                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />

                    <rect width="4" height="12" x="2" y="9" />

                    <circle cx="4" cy="4" r="2" />

                </svg>

            ),

        },

        {

            name: 'Instagram',

            path: 'https://instagram.com',

            icon: (

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />

                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />

                </svg>

            ),

        },

        {

            name: 'Facebook',

            path: 'https://facebook.com',

            icon: (

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">

                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />

                </svg>

            ),

        },

    ];



    // Logic: Mobile (10/40px) -> Tablet (12/48px) -> Desktop (14/56px)

    const containerStyles = `

    group relative flex items-center justify-center

    w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14

    rounded-full border border-gray-700

    transition-all duration-300 ease-out

    hover:border-[#c3e264] hover:shadow-[0_0_15px_rgba(195,226,100,0.3)] hover:-translate-y-1

  `;



    const iconStyles = `

    w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7

    text-[#c3e264] transition-colors

  `;



    return (

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { transition: { staggerChildren: 0.12 } }
            }}
            className="flex flex-wrap gap-4 mt-6"
        >
            {socialLinks.map((social, index) => (
                <motion.div
                    key={index}
                    variants={{
                        hidden: { opacity: 0, y: 25, filter: "blur(10px)", scale: 0.9 },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }
                    }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Link
                        to={social.path}
                        className={containerStyles}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                    >
                        <div className={iconStyles}>
                            {social.icon}
                        </div>
                    </Link>
                </motion.div>
            ))}
        </motion.div>

    );

};



export default Socials;