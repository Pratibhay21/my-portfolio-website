import React from 'react';
import { ArrowDown, Download, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-700 italic mb-12 max-w-4xl mx-auto font-medium leading-relaxed"
          >
            <span className="text-4xl md:text-5xl text-indigo-600 font-serif leading-none">"</span>
            <span className="relative">
              In an AI-first world, the product isn't what you build — it's how confidently your users can trust what you build.
            </span>
            <span className="text-4xl md:text-5xl text-indigo-600 font-serif leading-none">"</span>
          </motion.blockquote>
      
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            src="https://i.postimg.cc/NF2LzkMH/Whats-App-Image-2025-08-17-at-14-42-20.jpg"
            alt="Pratibha Yadav"
            className="w-36 h-36 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Pratibha Yadav
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Product Manager | Conversational AI & Platform Products (3.4 yrs)
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Transitioning from digital product management to AI-driven systems.
            <br /><br />
            Experienced in roadmap definition, cross-functional delivery, and exploring LLM-based use cases (chat + voice) for automation and CX improvement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => window.open('https://drive.google.com/uc?export=view&id=19D-zd9w9Of43qnnZ1l-aGTv7LxZtti4l', '_blank')}
            >
              <Download size={20} />
              Download Resume
            </motion.button>

            
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/pratibha-yadav21/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:pratibhauyadav@gmail.com"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="animate-bounce"
          >
            <ArrowDown className="mx-auto text-gray-400" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;