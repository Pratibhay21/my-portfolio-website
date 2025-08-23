import React from 'react';
import { GraduationCap, Award, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  score?: string;
  description?: string;
  type: 'education' | 'certification' | 'award';
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      institution: "Vidyalankar Institute of Technology",
      degree: "B.E. (Information Technology)",
      duration: "2018 - 2022",
      score: "CGPA: 9.19/10",
      description: "Graduated with distinction in Information Technology. Specialized in software development, data structures, and project management.",
      type: "education"
    },
    {
      institution: "Model College of Science & Commerce",
      degree: "12th Standard",
      duration: "2017 - 2018",
      score: "92.77%",
      description: "Higher Secondary Certificate with focus on Science stream including Physics, Chemistry, and Mathematics.",
      type: "education"
    },
    {
      institution: "Model English High School",
      degree: "10th Standard",
      duration: "2015 - 2016",
      score: "92%",
      description: "Secondary School Certificate with excellent academic performance across all subjects.",
      type: "education"
    }
  ];

  const certifications: EducationItem[] = [
    {
      institution: "LinkedIn Learning",
      degree: "PMI Agile Certified Practitioner (PMI-ACP) Cert Prep",
      duration: "2023",
      type: "certification"
    },
    {
      institution: "LinkedIn Learning",
      degree: "Technical Product Management",
      duration: "2023",
      type: "certification"
    },
    {
      institution: "LinkedIn Learning",
      degree: "Agile Product Leadership",
      duration: "2023",
      type: "certification"
    },
    {
      institution: "LinkedIn Learning",
      degree: "Transitioning to Product Management",
      duration: "2022",
      type: "certification"
    },
    {
      institution: "LinkedIn Learning",
      degree: "Agile Product Owner Role: Foundations",
      duration: "2022",
      type: "certification"
    }
  ];

  const awards: EducationItem[] = [
    {
      institution: "Reliance Jio",
      degree: "Jio Spot Award",
      duration: "2023",
      description: "Recognized for exceptional teamwork and impactful results in product development and cross-functional collaboration.",
      type: "award"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Education & Achievements
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-indigo-100 rounded-full mr-4">
                  <GraduationCap className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-6">
                {educationItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-500"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {item.degree}
                    </h4>
                    <p className="text-indigo-600 font-semibold mb-2">
                      {item.institution}
                    </p>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 text-sm">{item.duration}</span>
                      {item.score && (
                        <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm font-semibold">
                          {item.score}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Award className="text-green-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500"
                  >
                    <h4 className="text-md font-bold text-gray-900 mb-1">
                      {item.degree}
                    </h4>
                    <p className="text-green-600 font-semibold text-sm mb-1">
                      {item.institution}
                    </p>
                    <p className="text-gray-600 text-sm">{item.duration}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center mb-8">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <Trophy className="text-yellow-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Awards</h3>
              </div>
              
              <div className="space-y-6">
                {awards.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500 shadow-md"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {item.degree}
                    </h4>
                    <p className="text-yellow-600 font-semibold mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">{item.duration}</p>
                    {item.description && (
                      <p className="text-gray-700 text-sm italic">{item.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Additional Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 bg-indigo-50 p-6 rounded-lg"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4">Other Achievements</h4>
                <ul className="space-y-2">
                  <li className="text-gray-700 text-sm flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Product Adoption: Enabled cross-team integration by mentoring 2 new team members</span>
                  </li>
                  <li className="text-gray-700 text-sm flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Automated workflows reducing 50% of operational bottlenecks</span>
                  </li>
                  <li className="text-gray-700 text-sm flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span>Improved vendor collaboration with 50% increase in partner adoption</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
