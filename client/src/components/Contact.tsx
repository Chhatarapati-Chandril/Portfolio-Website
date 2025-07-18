import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactSchema, type InsertContact } from '@shared/schema';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import ScrollVelocity from './ScrollVelocity';


export default function Contact() {



  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const res = await apiRequest('POST', '/api/contact', data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'chandril6a@gmail.com',
      href: 'mailto:chandril6a@gmail.com',
      color: 'accent-purple',
    },
    // {
    //   icon: Phone,
    //   title: 'Phone',
    //   info: '+91 94661-35606',
    //   color: 'accent-pink',
    // },
    // {
    //   icon: MapPin,
    //   title: 'Location',
    //   info: 'Delhi, IN',
    //   color: 'accent-blue',
    // },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'fa-instagram', href: 'https://www.instagram.com/__chandril__/', target: '_blank' },
    { name: 'LinkedIn', icon: 'fa-linkedin', href: 'https://www.linkedin.com/in/chandril/', target: '_blank' },
    { name: 'GitHub', icon: 'fa-github', href: 'https://github.com/Chhatarapati-Chandril', target: '_blank' },
    { name: 'Whatsapp', icon: 'fa-whatsapp', href: 'https://wa.me/919466135606', target: '_blank' },
    { name: 'Telegram', icon: 'fa-telegram', href: 'https://telegram.me/CChandril', target: '_blank' }
  ];

  return (

    
    <section id="contact" className="py-24 relative overflow-hidden">

        <ScrollVelocity
          texts={["Let's Connect - ", "Text Me ! "]} 
          velocity={70} 
          className="custom-scroll-text "
        />

      {/* <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-transparent to-accent-pink/10" /> */}
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <h2 className="text-5xl font-black mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2> */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something extraordinary together.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Connect with me</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}

                >
                  <div className={`w-12 h-12 bg-${item.color}/20 rounded-full flex items-center justify-center`}>
                    <item.icon className={`text-${item.color}`} size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-300">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              {/* <h4 className="font-semibold mb-4">Connect with Me</h4> */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.target} 
                    className="w-12 h-12 bg-dark-light rounded-full flex items-center justify-center hover:bg-accent-purple transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={`fab ${social.icon}`} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            className="bg-dark-light border-gray-700 focus:border-accent-purple"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Your Email"
                            className="bg-dark-light border-gray-700 focus:border-accent-purple"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Subject"
                          className="bg-dark-light border-gray-700 focus:border-accent-purple"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          rows={6}
                          placeholder="Your Message"
                          className="bg-dark-light border-gray-700 focus:border-accent-purple resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent-purple to-accent-pink hover:from-accent-purple/90 hover:to-accent-pink/90 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-accent-purple/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.div>
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
