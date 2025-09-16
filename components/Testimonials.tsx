import React from 'react';
import type { Testimonial } from '../types';
import { StarIcon } from './icons/StarIcon';

const testimonials: Testimonial[] = [
  {
    quote: "The communication was excellent from start to finish. Soumik is not just a developer, but a strategic partner who helped us refine our digital strategy.",
    name: 'Anjali Rao',
    title: 'Co-Founder, Edutech Startup',
    avatar: 'https://picsum.photos/id/1014/100/100',
    rating: 5,
  },
  {
    quote: "I'm extremely impressed with the performance of our new site. The code is clean, and the site loads in the blink of an eye. A true professional.",
    name: 'Karan Desai',
    title: 'Freelance Consultant',
    avatar: 'https://picsum.photos/id/1015/100/100',
    rating: 5,
  },
  {
    quote: "Working with Soumik was a game-changer. Our new website is not only beautiful but also incredibly fast. The traffic has doubled since launch!",
    name: 'Aarav Sharma',
    title: 'CEO, TechSolutions',
    avatar: 'https://picsum.photos/id/1005/100/100',
    rating: 5,
  },
  {
    quote: "The entire process was seamless. Soumik understood our vision perfectly and delivered a product that exceeded our expectations. Highly recommended!",
    name: 'Priya Patel',
    title: 'Founder, Creative Co.',
    avatar: 'https://picsum.photos/id/1011/100/100',
    rating: 5,
  },
  {
    quote: "An absolute professional. The attention to detail in the design and the focus on SEO from day one has made a huge difference for our business.",
    name: 'Rohan Mehta',
    title: 'Marketing Director, Innovate Inc.',
    avatar: 'https://picsum.photos/id/1027/100/100',
    rating: 5,
  },
  {
    quote: "Soumik's expertise in both frontend and backend development is impressive. He built us a custom e-commerce solution that's both robust and easy to manage.",
    name: 'Sneha Gupta',
    title: 'Owner, The Craft Store',
    avatar: 'https://picsum.photos/id/1012/100/100',
    rating: 5,
  },
  {
    quote: "I was looking for a sleek, modern portfolio and Soumik delivered exactly that. The UI/UX is intuitive and I've received countless compliments on the design.",
    name: 'Vikram Singh',
    title: 'Photographer',
    avatar: 'https://picsum.photos/id/1013/100/100',
    rating: 5,
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="card bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg h-full flex flex-col">
    <div className="flex-grow">
        <div className="flex mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} />
            ))}
        </div>
        <p className="text-slate-600 dark:text-slate-300 italic">"{testimonial.quote}"</p>
    </div>
    <div className="flex items-center mt-6">
      <img className="w-12 h-12 rounded-full mr-4" src={testimonial.avatar} alt={`${testimonial.name}'s profile photo`} />
      <div>
        <p className="font-bold text-slate-800 dark:text-white">{testimonial.name}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
      </div>
    </div>
  </div>
);


interface TestimonialsProps {
    className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  return (
    <section id="testimonials" className={`py-12 md:py-20 animate-fade-in-up ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold brutalist-font creative-font">What My Clients Say</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Real results from satisfied partners.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;