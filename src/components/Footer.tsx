import React from 'react';
import { Linkedin, Mail, Heart, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Feel free to connect with me on LinkedIn, check out my blog, or send me an email.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/pratibha-yadav21/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://medium.com/@yadavpratibha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              title="Medium Blog"
            >
              <BookOpen size={20} />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:yadavpratibha21111999@gmail.com"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} Pratibha Yadav. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-1">
              Built with <Heart className="text-red-500" size={14} /> and React
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;