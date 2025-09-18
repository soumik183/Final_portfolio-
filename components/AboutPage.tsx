import React from 'react';

const AboutPage: React.FC = () => {
    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId.substring(1));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="home" className="text-center">
            <img src="https://i.ibb.co/PVnLvR2/AIRetouch-20250917-122058327.png" alt="Soumik" className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg border-4 border-white dark:border-slate-700 transition-transform duration-300 hover:scale-105" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 brutalist-font creative-font">Hi, I'm Soumik</h1>
            <p className="text-lg sm:text-xl text-primary dark:text-blue-400 font-medium">A Passionate Web Developer & Designer</p>
            <div className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-8 text-center">
                <p>
                    I started my journey with a simple ‘Hello World,’ and ever since, I’ve loved how the web can bring people and ideas together. I enjoy making websites and apps that look good, work smoothly, and are easy for anyone to use. My focus is always on people first—technology should feel simple and helpful, not complicated. I write clean code so the sites I build stay fast, reliable, and ready to grow. From small personal sites to full web apps, I put care into every detail so the result feels natural, friendly, and useful. Working with others excites me, and I love turning ideas into digital spaces that not only meet needs but also create a positive, lasting impact.
                </p>
            </div>
            <div className="mt-16">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 brutalist-font creative-font animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    Crafting Digital Excellence
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    I build beautiful, fast, and user-centric web experiences that drive results.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                    <a href="#projects" onClick={(e) => handleScrollTo(e, '#projects')} className="primary-button w-full sm:w-auto inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-transform transform hover:scale-105 duration-300">
                        View My Work
                    </a>
                    <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="primary-button w-full sm:w-auto inline-block bg-transparent border-2 border-primary text-primary font-bold py-3 px-8 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;