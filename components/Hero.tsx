import React from 'react';

interface HeroProps {}

const DecorativeElement: React.FC = () => (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 dark:opacity-10 filter blur-2xl animate-subtle-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-200 rounded-full opacity-20 dark:opacity-10 filter blur-2xl animate-subtle-float" style={{ animationDelay: '3s' }}></div>
    </div>
);


const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 text-center">
      <DecorativeElement />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* About Section Content */}
          <div id="about">
              <img src="https://picsum.photos/id/1005/150/150" alt="Soumik" className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg border-4 border-white dark:border-slate-700 animate-fade-in-up" style={{ animationDelay: '0.1s' }}/>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 brutalist-font creative-font animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Hi, I'm Soumik</h1>
              <p className="text-xl text-primary dark:text-blue-400 font-medium animate-fade-in-up" style={{ animationDelay: '0.3s' }}>A Passionate Web Developer & Designer</p>
              <div className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 space-y-4 mt-8 text-left animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
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
          </div>
          
          <div className="my-16 md:my-24"></div>

          {/* Original Hero Content */}
          <div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 brutalist-font creative-font animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  Crafting Digital Excellence
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  I build beautiful, fast, and user-centric web experiences that drive results.
              </p>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                  <a href="#contact" className="primary-button inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-transform transform hover:scale-105 duration-300">
                      Get in Touch
                  </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;