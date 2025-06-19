import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Alex transformed our vision into a stunning digital experience that exceeded all expectations. The attention to detail and innovative approach is truly remarkable.",
      author: "Sarah Chen",
      role: "CEO, TechVision",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    },
  ];

  return (
    <section className="py-24 bg-dark-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <Quote className="text-4xl text-accent-purple mb-6 mx-auto" />
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                {testimonials[0].quote}
              </p>
            </div>
            <div>
              <img 
                src={testimonials[0].image} 
                alt={`Professional headshot of ${testimonials[0].author}`}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" 
              />
              <h4 className="font-semibold text-lg">{testimonials[0].author}</h4>
              <p className="text-accent-purple font-mono text-sm">{testimonials[0].role}</p>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-3 h-3 bg-accent-purple rounded-full" />
            <div className="w-3 h-3 bg-gray-600 rounded-full" />
            <div className="w-3 h-3 bg-gray-600 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
