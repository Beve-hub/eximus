'use client';

import React from 'react';
import { 
  FaShieldAlt, 
  FaUsers, 
  FaLeaf, 
  FaGlobe, 
  FaHandshake 
} from 'react-icons/fa';

const ValuesContent: React.FC = () => {
  const commitments = [
    {
      title: "Health, Safety and Security",
      icon: FaShieldAlt,
      description: "Prioritizing the wellbeing and protection of our people and operations."
    },
    {
      title: "Community Development",
      icon: FaUsers,
      description: "Building meaningful partnerships and creating lasting positive impact."
    },
    {
      title: "Sustainability",
      icon: FaLeaf,
      description: "Integrating responsible practices for long-term viability."
    },
    {
      title: "Environmental Stewardship",
      icon: FaGlobe,
      description: "Protecting and preserving the environment for future generations."
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaHandshake className="text-lg" />
            OUR COMMITMENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Values and Commitments
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            Disciplined execution with <span className="text-emerald-600 font-semibold">people</span>, 
            <span className="text-emerald-600 font-semibold"> environment</span>, and 
            <span className="text-emerald-600 font-semibold"> performance</span> at the center.
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-100 hover:border-emerald-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-2xl mb-6 group-hover:bg-emerald-100 transition-colors">
                <item.icon className="text-3xl" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Emphasis */}
        <div className="mt-16 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">
            Guided by integrity • Driven by excellence
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesContent;