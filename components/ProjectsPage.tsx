import React from 'react';
import { Project } from '../types';
import { GitHubIcon } from './icons/GitHubIcon';

const projects: Project[] = [
    {
        title: 'Luxury Hotel Booking Platform',
        description: 'An elegant and responsive website for a luxury hotel, featuring a seamless booking engine, room showcases, and amenity galleries. Built to provide an immersive user experience and drive direct bookings.',
        imageUrl: 'https://i.ibb.co/nNtR0QVp/Generated-Image-September-17-2025-4-38-PM.png',
        tech: ['React', 'Next.js', 'Tailwind CSS', 'Stripe API'],
        liveUrl: '#',
        repoUrl: 'https://github.com/soumikbairagi/hotel-booking-website',
    },
    {
        title: 'Modern Restaurant Website',
        description: 'A visually appealing website for a modern restaurant, complete with an online menu, reservation system, and a gallery of culinary delights. Designed to attract diners and streamline the booking process.',
        imageUrl: 'https://i.ibb.co/MynqLGtx/unnamed-2.png',
        tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
        liveUrl: '#',
        repoUrl: 'https://github.com/soumikbairagi/restaurant-website',
    },
    {
        title: 'Gourmet Burger Joint',
        description: 'A vibrant and engaging single-page website for a gourmet burger restaurant. Features mouth-watering visuals, an interactive menu, and easy online ordering integration.',
        imageUrl: 'https://i.ibb.co/jPgfJ88c/unnamed.png',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
        liveUrl: '#',
        repoUrl: 'https://github.com/soumikbairagi/burger-joint-website',
    },
    {
        title: 'Customer Feedback Dashboard',
        description: 'An intuitive and powerful analytics dashboard for managing customer feedback. Allows businesses to track sentiment, categorize comments, and derive actionable insights to improve service quality.',
        imageUrl: 'https://i.ibb.co/wDh5NM0/download.png',
        tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
        liveUrl: '#',
        repoUrl: 'https://github.com/soumikbairagi/feedback-dashboard',
    }
];

const ProjectsPage: React.FC = () => {
    return (
        <section id="projects">
            <div className="text-center mb-12">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold brutalist-font creative-font">My Work</h1>
                <p className="text-slate-600 dark:text-slate-400 mt-2">A selection of projects I'm proud of.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((p, index) => (
                    <div 
                        key={p.title} 
                        className="project-card card bg-light-card dark:bg-dark-card rounded-lg shadow-lg overflow-hidden group"
                        style={{ '--animation-delay': `${index * 100}ms` } as React.CSSProperties}
                    >
                        <img className="w-full h-56 object-cover transition-transform duration-300" src={p.imageUrl} alt={p.title} />
                        <div className="p-6 flex flex-col h-full">
                            <h3 className="text-xl font-bold mb-2 brutalist-font">{p.title}</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">{p.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {p.tech.map(t => <span key={t} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{t}</span>)}
                            </div>
                            <div className="flex justify-end space-x-4 mt-auto pt-4">
                                {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline font-semibold">Live Demo</a>}
                                {p.repoUrl && 
                                    <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary dark:text-blue-400 hover:underline font-semibold">
                                        <GitHubIcon className="w-5 h-5" />
                                        GitHub
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;