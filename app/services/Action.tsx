'use client';

import { services } from "./component/data";
import ServiceCard from "./component/ServiceCard";


export default function Action() {
  return (
     <section className="max-w-7xl w-full mx-auto py-20 px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-end mb-12">
        <div>
          <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-red-700" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-700">
            Our Services
          </p>
        </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-none tracking-tight text-gray-900 mb-5">
           What We Do
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
              Integrated EPCM and energy solutions for Nigeria’s oil and gas sector.
            </p>
        </div>
       
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
}