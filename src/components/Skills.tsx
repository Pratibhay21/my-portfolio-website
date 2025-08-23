import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Product Management Skills
    { name: "Product Roadmap Ownership", level: 95, category: "Product Management" },
    { name: "Backlog Grooming & Prioritization", level: 90, category: "Product Management" },
    { name: "User Research & Market Analysis", level: 88, category: "Product Management" },
    { name: "Wireframing and Prototyping", level: 85, category: "Product Management" },
    { name: "Data Analysis & KPI Tracking", level: 92, category: "Product Management" },
    { name: "Growth Strategy & Experimentation", level: 87, category: "Product Management" },
    { name: "Go-to-Market (GTM) Alignment", level: 85, category: "Product Management" },
    { name: "AI Productization", level: 80, category: "Product Management" },
    
    // Technical Skills
    { name: "Python", level: 85, category: "Technical Skills" },
    { name: "Figma", level: 90, category: "Technical Skills" },
    { name: "Miro", level: 85, category: "Technical Skills" },
    { name: "Azure DevOps", level: 88, category: "Technical Skills" },
    { name: "MySQL", level: 80, category: "Technical Skills" },
    { name: "Excel", level: 92, category: "Technical Skills" },
    { name: "Tableau", level: 85, category: "Technical Skills" },
    { name: "API Collaboration", level: 82, category: "Technical Skills" },
    
    // Project Management
    { name: "Scrum Methodologies", level: 95, category: "Project Management" },
    { name: "Sprint Planning", level: 90, category: "Project Management" },
    { name: "Task Prioritization", level: 92, category: "Project Management" },
    { name: "Cross-functional Coordination", level: 88, category: "Project Management" },
    { name: "Agile Practices", level: 90, category: "Project Management" }
  ];

  const categories = ["Product Management", "Technical Skills", "Project Management"];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category}
                </h3>
                
                <div className="space-y-6">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 font-medium text-sm">
                            {skill.name}
                          </span>
                          <span className="text-gray-600 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              delay: categoryIndex * 0.2 + index * 0.1, 
                              duration: 1,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Languages
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-600">EN</span>
                </div>
                <p className="font-semibold text-gray-900">English</p>
                <p className="text-gray-600">Proficient</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">HI</span>
                </div>
                <p className="font-semibold text-gray-900">Hindi</p>
                <p className="text-gray-600">Proficient</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-600">MR</span>
                </div>
                <p className="font-semibold text-gray-900">Marathi</p>
                <p className="text-gray-600">Intermediate</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
