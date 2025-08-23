import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a dedicated Product Manager at Reliance Jio with a passion for creating 
                innovative solutions that drive business impact. My journey in product management 
                has been fueled by curiosity and a commitment to user-centered design.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With expertise in AI productization, growth strategy, and cross-functional 
                collaboration, I've successfully led 0-to-1 product launches and revamped 
                enterprise platforms that serve millions of users across India.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm fluent in English and Hindi, with intermediate Marathi skills, enabling 
                me to collaborate effectively across diverse teams and understand varied user needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-indigo-50 p-6 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-indigo-600 mb-2">3+</h3>
                <p className="text-gray-700">Years Experience</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">40%</h3>
                <p className="text-gray-700">Efficiency Boost</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-green-600 mb-2">75%</h3>
                <p className="text-gray-700">Adoption Increase</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <h3 className="text-3xl font-bold text-orange-600 mb-2">25%</h3>
                <p className="text-gray-700">Cost Reduction</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
