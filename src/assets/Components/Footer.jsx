import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer className="bg-[#1a1a1a] border-t-2 border-[#c3e264]/10 pt-10 pb-8 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 
                    px-4 mx-0
                    w-full">

                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center group cursor-pointer">
                            <img
                                src="./media/images/logo.svg"
                                alt="digisinc"
                                aria-label="Digisinc Home - AI Automations and Web Development Agency"
                                className="h-16 lg:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                            />
                        </Link>
                        <p className="text-gray-400 text-[18px] leading-relaxed max-w-[450px]">
                            We build high-performance digital experiences that bridge the gap between complex technology
                            and
                            human intuition.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <Link to="#"
                                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-300 group hover:border-[#c3e264] hover:shadow-[0_0_15px_rgba(195,226,100,0.3)] hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="w-5 h-5 text-[#c3e264] transition-colors">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </Link>

                            <Link to="#"
                                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-300 group hover:border-[#c3e264] hover:shadow-[0_0_15px_rgba(195,226,100,0.3)] hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="w-5 h-5 text-[#c3e264] transition-colors">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </Link>

                            <Link to="#"
                                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-300 group hover:border-[#c3e264] hover:shadow-[0_0_15px_rgba(195,226,100,0.3)] hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="w-5 h-5 text-[#c3e264] transition-colors">
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className=" font-medium text-[24px] mb-8 text-[#c3e264] tracking-wider">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link to="/"
                                aria-label="Digisinc Home - AI Automations and Web Development Agency"
                                className="text-gray-400 hover:text-[#c3e264] transition-colors">Home</Link></li>
                            <li><Link to="/projects"
                                aria-label="View Digisinc's portfolio of AI, Web, and Design projects"
                                className="text-gray-400 hover:text-[#c3e264] transition-colors">Projects</Link>
                            </li>
                            <li><Link to="/services"
                                aria-label="View Digisinc Services: AI, Web Apps, UI/UX, and Graphic Design"
                                className="text-gray-400 hover:text-[#c3e264] transition-colors">Services</Link>
                            </li>
                            <li><Link to="/contact"
                                aria-label="Hire Digisinc for AI automation and web development services"
                                className="text-gray-400 hover:text-[#c3e264] transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className=" font-medium text-[24px] mb-8 text-[#c3e264] tracking-normal">Let's Talk</h3>
                        <div className="space-y-4">
                            <p className="text-gray-400">Email: <br /> <a href="mailto:hello@brand.com"
                                className="text-[#c3e264] hover:underline transition-all">digisinc.solutions@gmail.com</a>
                            </p>
                            <p className="text-gray-400">Phone: <br /> <a href="mailto:hello@brand.com"
                                className="text-[#c3e264] hover:underline transition-all">0317-8433874</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
