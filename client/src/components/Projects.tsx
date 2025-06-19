import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Nexus Analytics',
      category: 'web',
      description: 'Interactive data visualization platform with real-time analytics and 3D chart rendering.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      colors: ['accent-purple', 'accent-pink', 'accent-blue'],
    },
    {
      id: 2,
      title: 'Mindful Mobile',
      category: 'mobile',
      description: 'Meditation and wellness app with immersive 3D environments and biometric integration.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      colors: ['accent-pink', 'accent-blue'],
    },
    {
      id: 3,
      title: 'Spatial Gallery',
      category: '3d',
      description: 'Virtual reality art gallery with physics-based interactions and dynamic lighting.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      colors: ['accent-blue', 'accent-purple'],
    },
    {
      id: 4,
      title: 'Luxe Commerce',
      category: 'web',
      description: 'Premium e-commerce platform with AR try-on features and AI-powered recommendations.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      colors: ['accent-purple', 'accent-pink'],
    },
    {
      id: 5,
      title: 'Creator Studio',
      category: 'mobile',
      description: 'Professional content creation suite with AI-assisted editing and collaborative features.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      colors: ['accent-pink', 'accent-blue'],
    },
    {
      id: 6,
      title: 'Neural Network',
      category: '3d',
      description: 'Interactive 3D visualization of machine learning algorithms and data flow patterns.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      colors: ['accent-blue', 'accent-purple'],
    },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: '3d', label: '3D' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-dark-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work, pushing the boundaries of web development and creative design.
          </p>
        </motion.div>
        
        {/* Project Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-4 bg-dark rounded-full p-2">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeFilter === filter.id
                    ? 'bg-accent-purple text-white'
                    : 'hover:bg-accent-purple/20'
                }`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-dark rounded-2xl overflow-hidden glow-effect group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                transition: { duration: 0.4 }
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.description}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className={`text-xs bg-${project.colors[0]}/20 text-${project.colors[0]} px-2 py-1 rounded-full uppercase`}>
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {project.colors.map((color, i) => (
                      <span 
                        key={i}
                        className={`w-3 h-3 bg-${color} rounded-full`}
                      />
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <motion.button
                      className="hover:text-accent-purple transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                    <motion.button
                      className="hover:text-accent-purple transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
