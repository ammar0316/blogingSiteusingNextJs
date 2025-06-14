import React from 'react';

// Sample blog data (you should import it from a shared file or context in a real app)
const blogs = [
  {
    id: 1,
    name: "The Rise of JavaScript in Modern Web Development",
    details: "JavaScript has become the backbone of modern web applications. From frontend frameworks like React and Angular to backend tools like Node.js, it's everywhere.",
  },
  {
    id: 2,
    name: "Why Learning TypeScript is Worth It",
    details: "TypeScript enhances JavaScript by adding static types. It helps catch errors during development, making large-scale projects easier to maintain.",
  },
  {
    id: 3,
    name: "How to Build a Full-Stack App Using the MEARN Stack",
    details: "The MEARN stack includes MongoDB, Express, Angular, React, and Node.js. It enables you to create powerful full-stack applications with JavaScript.",
  },
  {
    id: 4,
    name: "Top 5 Tips for Beginner Web Developers",
    details: "Start with HTML, CSS, and JavaScript. Build small projects. Use GitHub to showcase your work. Follow modern development trends. Never stop learning.",
  },
  {
    id: 5,
    name: "Understanding React Hooks: useState and useEffect",
    details: "React hooks allow function components to have state and side effects. Learn how to manage UI interactions and data fetching using these essential hooks.",
  }
];

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-center text-4xl font-bold text-blue-700 mb-10">About Page</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
        Learn more about our most trending blog topics below. We cover development, tools, and tech tips to empower your journey.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
            <p className="text-gray-600 text-sm">{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
