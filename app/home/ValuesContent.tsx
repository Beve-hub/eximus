'use client';

import { FiUsers, FiFlag, FiTrendingUp, FiFeather } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";
import { FaHandshake } from 'react-icons/fa';

const ValuesContent: React.FC = () => {
  const values = [
    {
      icon: BsShieldCheck,
      title: "Health, Safety and Security",
      body: "The health, safety and security of our personnel, contractors, clients and host communities are fundamental to how we work. We design and execute projects with a strong safety mindset.",
    },
    {
      icon: FiUsers,
      title: "Community Development",
      body: "We support constructive engagement with host communities and aim to create meaningful local participation through employment, training and responsible project delivery.",
    },
    {
      icon: FiFlag,
      title: "Nigerian Content Development",
      body: "We are committed to Nigerian content development, local capability building and appropriate execution of work in Nigeria while leveraging global technology and expertise.",
    },
    {
      icon: FiTrendingUp,
      title: "Sustainability",
      body: "We believe long-term business success requires a balance between commercial performance, social responsibility and environmental stewardship.",
    },
    {
      icon: FiFeather,
      title: "Environmental Stewardship",
      body: "We support energy development with practical measures that reduce waste, improve reliability, reduce emissions and protect the operating environment.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaHandshake className="text-lg" />
            OUR COMMITMENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Values and Commitments
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            Disciplined execution with <span className="text-green-600 font-semibold">people</span>, 
            <span className="text-green-600 font-semibold"> environment</span>, and 
            <span className="text-green-600 font-semibold"> performance</span> at the center.
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-100 hover:border-green-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-green-50 text-green-600 rounded-2xl mb-6 group-hover:bg-green-100 transition-colors">
                <item.icon className="text-3xl" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {item.body}
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