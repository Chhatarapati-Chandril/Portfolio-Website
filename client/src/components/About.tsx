import { motion } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';

export default function About() {
  const scrollY = useParallax();

  const skills = [
    { name: 'React', color: 'accent-purple' },
    { name: 'Three.js', color: 'accent-pink' },
    { name: 'GSAP', color: 'accent-blue' },
    { name: 'Node.js', color: 'accent-purple' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-8">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm Chhatarapati Chandril, a passionate creative developer with over 6 years of experience crafting digital experiences that blur the line between art and technology. My work combines cutting-edge development with stunning visual design.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From interactive web applications to immersive digital installations, I specialize in bringing bold ideas to life through code, creativity, and attention to detail.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  className={`bg-${skill.color}/20 text-${skill.color} px-4 py-2 rounded-full text-sm font-medium`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
            
            <motion.button
              className="bg-white text-dark px-8 py-4 rounded-full font-semibold transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
              alt="Professional headshot of Chhatarapati Chandril" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto" 
            />
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent-purple to-accent-pink rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-blue/30 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
