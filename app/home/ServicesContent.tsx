import React from "react";
import { services } from "../services/component/data";
import ServiceCard from "../services/component/ServiceCard";

const ServicesContent = () => {
  return (
    <section className="max-w-7xl w-full mx-auto py-20 px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-end mb-12">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-6 h-px bg-[var(--foreground)]" />
            <p className="text-[18px] tracking-[0.18em] uppercase text-[var(--foreground)] font-medium">
              What we do
            </p>
          </div>
          <h2 className="text-[38px] font-normal text-[var(--foreground)] leading-tight">
            Our Services
          </h2>
        </div>
        <p className="text-sm text-[#555] max-w-[260px] text-right leading-relaxed">
          End-to-end solutions across the full oil and gas value chain
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-px bg-[var(--foreground)]/10 border border-white/5">
        {services.map((service) => (
          <ServiceCard
            key={service.num}
            num={service.num}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesContent;