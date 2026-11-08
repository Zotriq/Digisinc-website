import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ name, text }) => {
    // Child variants: Slow, blurred, cinematic drift
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            filter: "blur(15px)",
            scale: 0.97
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

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{
                scale: 1.015,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
            }}
            className="bg-[#222222] border-[3px] md:border-[4px] border-[#c3e264] rounded-2xl p-6 px-4 w-full md:p-10 text-center text-white relative flex flex-col items-center
                       hover:shadow-[0_20px_40px_rgba(195,226,100,0.1)] transition-shadow duration-700"
        >
            {/* Quote Icon */}
            <div className="flex justify-center mb-6 md:mb-8">
                <svg className="w-[40px] h-[40px] md:w-[72px] md:h-[54px]" viewBox="0 0 75 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 0H0V30H15C15 39.9 22.1 48 30 48V54C16.6 54 6 43.4 6 30V0H30V0ZM75 0H45V30H60C60 39.9 67.1 48 75 48V54C61.6 54 51 43.4 51 30V0H75V0Z" fill="#3c4903" />
                </svg>
            </div>

            {/* Testimonial Text */}
            <p className="leading-relaxed font-normal mb-8 text-gray-200 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
                "{text}"
            </p>

            {/* Client Name */}
            <h3 className="font-medium text-[#c3e264] text-[18px] md:text-[22px] lg:text-[26px] mt-auto">
                {name}
            </h3>
        </motion.div>
    );
};

const TestimonialsSection = ({ data }) => {
    return (
        <section className="flex flex-col items-center justify-center m-4">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.25 // Deliberate "one-by-one" reveal
                        }
                    }
                }}
                className="grid grid-cols-1 md:grid-cols-2 
                gap-8 px-auto mx-auto
                my-2
                w-[calc(100%-8px)]
                max-w-[450px] 
                md:max-w-[850px] 
                lg:max-w-[1050px] 
                xl:max-w-[1150px] 
                3xl:max-w-[1400px]"
            >
                {data.reviews.map((review) => (
                    <TestimonialCard
                        key={review.id}
                        name={review.name}
                        text={review.text}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default TestimonialsSection;