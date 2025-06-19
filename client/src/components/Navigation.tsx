import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, FolderOpen, Code, Mail } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string, sectionName: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionName.toLowerCase());
    }
    setIsOpen(false);
  };

  // Auto-detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        name: item.name.toLowerCase(),
        element: document.querySelector(item.href)
      }));

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = (section.element as HTMLElement).offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Vertical Navigation */}
      <motion.nav
        className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="flex flex-col items-center bg-dark-light/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-4 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.name.toLowerCase();
            
            return (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.name)}
                className={`relative group flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 mb-3 last:mb-0 ${
                  isActive 
                    ? 'bg-gradient-to-br from-accent-purple to-accent-pink text-white shadow-lg shadow-accent-purple/25' 
                    : 'hover:bg-white/10 text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon size={20} />
                
                {/* Tooltip */}
                <motion.div
                  className="absolute left-20 bg-dark-light/95 backdrop-blur-xl border border-gray-700/50 rounded-lg px-3 py-2 text-sm font-medium text-white shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-dark-light/95 border-l border-t border-gray-700/50 rotate-45"></div>
                </motion.div>
              </motion.button>
            );
          })}
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        className="fixed top-6 right-6 z-40 lg:hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.button
          className="flex items-center justify-center w-12 h-12 bg-dark-light/90 backdrop-blur-xl border border-gray-700/50 rounded-full shadow-2xl"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
        </motion.button>

        {isOpen && (
          <motion.div
            className="absolute top-16 right-0 bg-dark-light/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 shadow-2xl min-w-[200px]"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.name.toLowerCase();
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.name)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-accent-purple to-accent-pink text-white' 
                      : 'hover:bg-white/10 text-gray-300 hover:text-white'
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.name}</span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </motion.div>

      {/* Brand Logo - Top Left */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="font-mono text-lg font-bold gradient-text bg-dark-light/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl w-14 h-14 flex items-center justify-center shadow-2xl">
          CC
        </div>
      </motion.div>
    </>
  );
}
