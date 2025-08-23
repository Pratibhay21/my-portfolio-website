import React from 'react';
import { ExternalLink, Github, TrendingUp, Users, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  achievements: string[];
  impact: string;
  type: 'professional' | 'academic';
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Enterprise Network Management Platform",
      description: "Revamped enterprise platforms for network maintenance & facilities management, streamlining operations for field engineers, vendors, and retail locations across India.",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/6366f1/ffffff?text=Network+Platform",
      technologies: ["Product Strategy", "UX Design", "Analytics", "Cross-functional Leadership"],
      achievements: [
        "75% increase in adoption rates",
        "35% faster task completion",
        "25% reduction in operational costs"
      ],
      impact: "Streamlined operations for thousands of field engineers across India",
      type: "professional"
    },
    {
      title: "AI-Powered Image Verification System",
      description: "Launched AI-powered image verification system that revolutionized compliance processes by automating manual review workflows.",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/8b5cf6/ffffff?text=AI+Verification",
      technologies: ["AI Integration", "Process Automation", "Quality Assurance", "Data Analytics"],
      achievements: [
        "40% reduction in manual compliance efforts",
        "35% boost in service accuracy",
        "Automated workflow implementation"
      ],
      impact: "Transformed compliance processes across multiple business units",
      type: "professional"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Developed comprehensive analytics dashboards enabling business teams to track 15+ KPIs with real-time data updates and automated reporting.",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/10b981/ffffff?text=Analytics+Dashboard",
      technologies: ["Data Visualization", "KPI Tracking", "Business Intelligence", "Automation"],
      achievements: [
        "60% reduction in manual reporting",
        "15+ KPIs tracked in real-time",
        "Enhanced decision-making speed by 25%"
      ],
      impact: "Enabled data-driven decision making across business teams",
      type: "professional"
    },
    {
      title: "Crop Recommendation System",
      description: "BE Final Year Project utilizing machine learning to predict optimal crop selection based on environmental and soil conditions using Kaggle dataset with 2200+ entries.",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x250/f59e0b/ffffff?text=ML+Agriculture",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Predictive Modeling"],
      achievements: [
        "Multiple ML algorithms evaluation",
        "High accuracy crop predictions",
        "Comprehensive dataset analysis"
      ],
      impact: "Academic project demonstrating ML application in agriculture",
      type: "academic"
    }
  ];

  const professionalProjects = projects.filter(p => p.type === 'professional');
  const academicProjects = projects.filter(p => p.type === 'academic');

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Featured Projects
          </h2>
          
          {/* Professional Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <TrendingUp className="mr-3 text-indigo-600" size={24} />
              Professional Impact
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionalProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Professional
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                        <Award size={16} className="mr-1 text-green-600" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start">
                            <span className="text-green-600 mr-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                        <Users size={16} className="mr-1 text-blue-600" />
                        Business Impact
                      </h5>
                      <p className="text-xs text-gray-600">{project.impact}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic Projects */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Zap className="mr-3 text-green-600" size={24} />
              Academic Research
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {academicProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Academic
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Technical Highlights</h5>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
