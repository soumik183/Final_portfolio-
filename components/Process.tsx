
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { LightbulbIcon } from './icons/LightbulbIcon';
import { PencilSquareIcon } from './icons/PencilSquareIcon';
import { CodeBracketIcon } from './icons/CodeBracketIcon';
import { RocketLaunchIcon } from './icons/RocketLaunchIcon';

const processSteps = [
    {
        icon: <LightbulbIcon className="w-10 h-10 mb-4 text-accent" />,
        title: "1. Discovery & Strategy",
        description: "We start with a deep dive into your goals, audience, and project requirements. This phase is all about understanding your vision to build a solid strategic foundation for the project."
    },
    {
        icon: <PencilSquareIcon className="w-10 h-10 mb-4 text-accent" />,
        title: "2. UI/UX Design & Prototyping",
        description: "Next, I create wireframes and high-fidelity mockups. You'll get to see and approve the visual direction and user flow before any code is written, ensuring the final product is exactly what you envision."
    },
    {
        icon: <CodeBracketIcon className="w-10 h-10 mb-4 text-accent" />,
        title: "3. Development & Coding",
        description: "This is where the magic happens. I write clean, efficient, and scalable code using modern technologies to bring the design to life, providing you with regular updates along the way."
    },
    {
        icon: <RocketLaunchIcon className="w-10 h-10 mb-4 text-accent" />,
        title: "4. Testing & Deployment",
        description: "Before launch, the website undergoes rigorous testing to ensure it's bug-free and performs perfectly. Once approved, I'll handle the deployment and your new website will be live for the world to see."
    }
];

const Process: React.FC = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="process">
            <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold brutalist-font creative-font">My Development Process</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl mx-auto">
                    A clear, collaborative, and transparent journey from concept to launch.
                </p>
            </motion.div>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {processSteps.map((step, index) => (
                    <motion.div 
                        key={index} 
                        className="card bg-light-card dark:bg-dark-card p-6 text-center rounded-lg shadow-lg"
                        variants={itemVariants}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                        {step.icon}
                        <h3 className="text-lg md:text-xl font-bold mb-2 brutalist-font">{step.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Process;
