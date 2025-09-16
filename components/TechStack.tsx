import React from 'react';

const skills = [
    { name: 'React', icon: <i className="fab fa-react text-5xl text-sky-400"></i> },
    { 
      name: 'TypeScript', 
      icon: (
        <div className="w-12 h-12 bg-[#3178C6] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-2xl">TS</span>
        </div>
      )
    },
    { name: 'Node.js', icon: <i className="fab fa-node-js text-5xl text-green-500"></i> },
    { name: 'Tailwind CSS', icon: <i className="fas fa-wind text-5xl text-cyan-400"></i> },
    { name: 'Figma', icon: <i className="fab fa-figma text-5xl text-orange-500"></i> },
    { 
      name: 'Next.js', 
      icon: (
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
            <span className="font-bold text-3xl">N</span>
        </div>
      )
    },
];

const TechStack: React.FC = () => {
    return (
        <section id="tech-stack" className="py-12 md:py-20 animate-fade-in-up">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold brutalist-font creative-font">My Go-To Technologies</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-2">I use a modern, high-performance tech stack to build my projects.</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                    {skills.map(skill => (
                        <div key={skill.name} className="group card flex flex-col items-center justify-center gap-4 p-6 bg-slate-100 dark:bg-dark-card rounded-xl shadow-md text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-blue-500/20">
                            <div className="h-12 w-12 flex items-center justify-center">
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