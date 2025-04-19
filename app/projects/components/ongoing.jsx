import React from 'react';

const ongoingProjects = [
  {
    id: 1,
    title: 'LG Balakrishnan & Bros Ltd',
    description: 'Civil maintenance project',
    image: '/images/skyline-towers.jpg', // Replace with actual image URL
    progress: 70, // Progress percentage
  },
  {
    id: 2,
    title: 'RVS College',
    description: 'Pharmaceutical Sciences: Various civil works in Sulur.',
    image: '/images/sunset-villas.jpg', // Replace with actual image URL
    progress: 45, // Progress percentage
  },
  {
    id: 3,
    title: 'RR Promoters',
    description: 'Residential and commercial complexes, including RR Complex and Apartments.',
    image: '/images/green-city-mall.jpg', // Replace with actual image URL
    progress: 85, // Progress percentage
  },
];

const OngoingProjects = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8 uppercase">Our Ongoing Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ongoingProjects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-blue-500 transition duration-200">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Progress Bar */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-gray-500 text-sm">Progress</div>
                  <div className="flex items-center">
                    <span className="text-xs font-semibold text-green-600">{project.progress}%</span>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="relative pt-1 w-full">
                  <div className="h-2 mb-4 bg-gray-200 rounded-full">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Icon representing progress */}
                <div className="flex justify-end">
                  <span className="text-xs font-medium text-gray-500">{project.progress >= 100 ? 'Completed' : 'In Progress'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
