import React from 'react';
import { TailwindCssIcon } from './icons/TailwindCssIcon';

const skills = [
    { name: 'HTML5', icon: <i className="fab fa-html5 text-5xl text-orange-600"></i> },
    { name: 'CSS3', icon: <i className="fab fa-css3-alt text-5xl text-blue-500"></i> },
    { name: 'JavaScript', icon: <i className="fab fa-js-square text-5xl text-yellow-400"></i> },
    { name: 'React', icon: <i className="fab fa-react text-5xl text-sky-400"></i> },
    { 
      name: 'TypeScript', 
      icon: (
        <span className="relative h-12 w-12 flex items-center justify-center" aria-hidden="true">
          <i className="fas fa-square text-5xl" style={{ color: '#3178C6' }}></i>
          <strong className="absolute text-white font-bold" style={{ fontSize: '1.2rem', fontFamily: 'sans-serif', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>TS</strong>
        </span>
      )
    },
    { name: 'Node.js', icon: <i className="fab fa-node-js text-5xl text-green-600"></i> },
    { name: 'Tailwind CSS', icon: <TailwindCssIcon className="w-14 h-14" /> },
    { name: 'Figma', icon: <i className="fab fa-figma text-5xl text-pink-500"></i> },
    { name: 'Next.js', icon: <img src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000" alt="Next.js icon" className="w-12 h-12 dark:invert" /> },
];

const TechStack: React.FC = () => {
    return (
        <section id="tech-stack" className="animate-fade-in-up">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold brutalist-font creative-font">My Go-To Technologies</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-2">I use a modern, high-performance tech stack to build my projects.</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                    {skills.map(skill => (
                        <div key={skill.name} className="group card flex flex-col items-center justify-center gap-4 p-6 bg-slate-100 dark:bg-dark-card rounded-xl shadow-md text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-blue-500/20">
                            <div className="h-14 w-14 flex items-center justify-center">
                                {skill.icon}
                            </div>
                            <span className="font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;