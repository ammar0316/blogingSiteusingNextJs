import React from 'react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'We create high-performance and SEO-friendly websites using modern frameworks like React and Next.js.'
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Our team designs intuitive and responsive user interfaces with focus on user experience and accessibility.'
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'We develop cross-platform mobile apps with React Native, ensuring performance and consistency.'
  },
  {
    id: 4,
    title: 'Backend API Services',
    description: 'Robust and secure backend APIs using Node.js, Express, MongoDB, and Firebase.'
  }
];

const Service = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h2>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
