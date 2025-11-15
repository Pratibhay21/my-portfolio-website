import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Reliance Jio - Jio Platforms Limited",
      position: "Associate Product Manager",
      duration: "Sep 2022 - Present",
      location: "Navi Mumbai, India",
      description: [
        "Revamped enterprise platforms for network maintenance & facilities management, streamlining operations for field engineers, vendors, and retail locations across India",
        "Led 0-to-1 product launches, optimizing B2B & B2C service workflows, reducing turnaround time by 30% and boosting vendor efficiency by 40%",
        "Launched AI-powered image verification, cutting manual compliance review efforts by 40% and boosting service accuracy by 35%",
        "Enhanced UX for internal & partner tools for Reliance ResQ, leading to a 75% increase in adoption rates and 35% faster task completion",
        "Built in-house platforms, eliminating reliance on third-party SaaS tools, reducing annual operational costs by 25%",
        "Developed real-time analytics dashboards, enabling business teams to track 15+ KPIs and reducing manual reporting efforts by 60%",
        "Defined and executed the end-to-end product vision for an AI-powered conversational platform (chatbot + voicebot), aligning roadmap with business goals and customer needs",
        "Identified key LLM use cases across support, sales, onboarding, and internal automation to drive platform adoption and revenue",
        "Conducted competitive analysis (Yellow.ai, Gupshup, Cohere, OpenAI ecosystem) to position the product with clear differentiators",
        "Led the design of prompt strategies, retrieval architecture (RAG), guardrails, and model-selection framework to optimize accuracy and latency",
        "Designed behaviour-driven flows enabling richer conversations with context retention, sentiment detection, and disambiguation",
        "Defined and shipped key platform capabilities including multi-channel orchestration, API-driven workflow automation, RAG-based knowledge management, advanced analytics dashboards, and a self-serve bot-building studio",
        "Worked closely with engineering, data, design, QA, GTM, and customer success to drive releases across weekly/bi-weekly sprints"
      ]
    },
    {
      company: "Reliance Jio - Jio Platforms Limited",
      position: "Graduate Engineer Trainee",
      duration: "July 2022 - Aug 2022",
      location: "Navi Mumbai, India",
      description: [
        "Supported early research on conversational AI platforms and LLM capabilities, contributing insights that shaped the initial product direction",
        "Assisted in gathering requirements from internal teams and pilot customers, documenting pain points and potential chatbot/voicebot use cases",
        "Helped design and test basic conversation flows, identifying UX gaps, flow breakages, and improvement opportunities",
        "Coordinated with engineering and QA on small feature releases and bug validations, strengthening cross-functional execution"
      ]
    },
    {
      company: "The Sparks Foundation",
      position: "Data Science & Business Analytics Intern",
      duration: "May 2022",
      location: "Remote",
      description: [
        "Developed a predictive model using Supervised Machine Learning to estimate student performance based on study hours",
        "Analyzed and processed datasets to derive meaningful insights for business decision-making",
        "Applied various machine learning algorithms to solve real-world business problems",
        "Created comprehensive reports and presentations to communicate findings to stakeholders"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Professional Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-indigo-200 hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative mb-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.position}
                      </h3>
                      <h4 className="text-xl text-indigo-600 font-semibold">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col md:text-right mt-4 md:mt-0">
                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start">
                        <span className="text-indigo-600 mr-2 mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
