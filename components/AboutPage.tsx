import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <section id="about" className="animate-fade-in text-center">
            <img src="https://picsum.photos/id/1005/150/150" alt="Soumik" className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg border-4 border-white dark:border-slate-700" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 brutalist-font creative-font">Hi, I'm Soumik</h1>
            <p className="text-xl text-primary dark:text-blue-400 font-medium">A Passionate Web Developer & Designer</p>
            <div className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 space-y-4 mt-8 text-left">
                <p>
                    From the moment I wrote my first "Hello World," I was captivated by the web's power to connect people and ideas. My journey into web development has been a continuous exploration, driven by a relentless curiosity and a deep-seated passion for building beautiful, functional things for the internet. I thrive on the creative challenge of transforming complex problems into elegant, intuitive, and high-performance digital experiences that not only meet user needs but also leave a lasting, positive impact.
                </p>
                <p>
                    My expertise lies in a comprehensive range of modern frontend and backend technologies, but my true focus is always on the end-user. I operate on the principle that the best technology is invisible; it should facilitate a seamless and enjoyable journey, connecting a user to their goals without friction. This philosophy drives me to write exceptionally clean, maintainable, and scalable code—the kind of code that forms a robust foundation for future growth and stands the test of time.
                </p>
                 <p>
                    Whether I'm architecting a sleek marketing website, developing a dynamic e-commerce platform, or building a data-intensive web application, my ultimate goal remains the same: to create products that are as delightful to use as they are technically sound. I am committed to building websites that are not only visually stunning but also universally accessible, resilient, and meticulously optimized for speed. I believe in the power of collaboration and enjoy working closely with clients to truly understand their vision, translating it into a digital reality that not only meets but exceeds expectations and delivers tangible, measurable results.
                </p>
            </div>
        </section>
    );
};

export default AboutPage;