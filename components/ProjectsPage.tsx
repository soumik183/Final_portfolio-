import React from 'react';
import { Project } from '../types';
import { GitHubIcon } from './icons/GitHubIcon';

const projects: Project[] = [
    {
        title: 'Community Forum Platform',
        description: 'A full-stack forum application built with the T3 Stack, featuring authentication, posting, commenting, and nested replies.',
        imageUrl: 'https://picsum.photos/seed/project4/600/400',
        tech: ['Next.js', 'TypeScript', 'Prisma', 'tRPC', 'Tailwind'],
        liveUrl: '#',
        repoUrl: 'https://github.com/soumikbairagi/community-forum',
    },
    {
        title: 'Real-time Chat Application',
        description: 'A responsive chat app using Socket.IO for instant messaging, user presence indicators, and room-based communication.',
        imageUrl: 'https://picsum.photos/seed/project5/600/400',
        tech: ['React', 'Node.js', 'Express', 'Socket.IO'],
        repoUrl: 'https://github.com/soumikbairagi/realtime-chat-app',
    },
    {
        title: 'E-commerce Platform',
        description: 'A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process, built with a focus on performance.',
        imageUrl: 'https://picsum.photos/seed/project1/600/400',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        liveUrl: '#',
    },
    {
        title: 'Data Visualization Dashboard',
        description: 'An interactive dashboard for visualizing complex datasets, allowing users to filter and explore data in real-time.',
        imageUrl: 'https://picsum.photos/seed/project2/600/400',
        tech: ['D3.js', 'React', 'Tailwind CSS'],
        liveUrl: '#',
    }
];

const ProjectsPage: React.FC = () => {
    return (
        <section id="projects" className="animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold brutalist-font creative-font">My Work</h1>
                <p className="text-slate-600 dark:text-slate-400 mt-2">A selection of projects I'm proud of.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map(p => (
                    <div key={p.title} className="project-card card bg-light-card dark:bg-dark-card rounded-lg shadow-lg overflow-hidden group">
                        <img className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" src={p.imageUrl} alt={p.title} />
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