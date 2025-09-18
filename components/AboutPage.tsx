import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <section id="about" className="text-center">
            <img src="https://i.ibb.co/PVnLvR2/AIRetouch-20250917-122058327.png" alt="Soumik" className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg border-4 border-white dark:border-slate-700 transition-transform duration-300 hover:scale-105" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 brutalist-font creative-font">Hi, I'm Soumik</h1>
            <p className="text-xl text-primary dark:text-blue-400 font-medium">A Passionate Web Developer & Designer</p>
            <div className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 space-y-4 mt-8 text-left">
                <p>
                    I started my journey with a simple ‘Hello World,’ and ever since, I’ve loved how the web can bring people and ideas together. I enjoy making websites and apps that look good, work smoothly, and are easy for anyone to use.
                </p>
                <p>
                    My focus is always on people first—technology should feel simple and helpful, not complicated. I write clean code so the sites I build stay fast, reliable, and ready to grow.
                </p>
                 <p>
                    From small personal sites to full web apps, I put care into every detail so the result feels natural, friendly, and useful. Working with others excites me, and I love turning ideas into digital spaces that not only meet needs but also create a positive, lasting impact.
                </p>
            </div>
        </section>
    );
};

export default AboutPage;