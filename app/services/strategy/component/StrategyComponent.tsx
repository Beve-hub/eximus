"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { MdLocationOn, MdPublic, MdEngineering, MdTune, MdBusinessCenter, MdEco } from "react-icons/md";

const advantages = [
  {
    number: "01",
    title: "Nigerian Operating Experience",
    body: "Strong understanding of Nigerian operating environments, logistics realities, regulatory systems and stakeholder expectations.",
    color: "red",
    Icon: MdLocationOn,
  },
  {
    number: "02",
    title: "International Technical Network",
    body: "Strategic alliances with engineering, fabrication, inspection and OEM organizations across Canada, the USA, Europe and Nigeria.",
    color: "green",
    Icon: MdPublic,
  },
  {
    number: "03",
    title: "Practical EPCM Execution",
    body: "Balanced focus on engineering excellence, constructability, operability and commercial viability.",
    color: "red",
    Icon: MdEngineering,
  },
  {
    number: "04",
    title: "Flexible Delivery Model",
    body: "Capability to support stand-alone scopes, owner's engineering, procurement-only support or integrated EPCM execution.",
    color: "green",
    Icon: MdTune,
  },
  {
    number: "05",
    title: "Asset Acquisition Expertise",
    body: "Experience supporting technical due diligence, asset acquisition evaluations, modular facility sourcing and relocation projects.",
    color: "red",
    Icon: MdBusinessCenter,
  },
  {
    number: "06",
    title: "Responsible Growth",
    body: "A future-facing energy company built to support profitable, safe and environmentally responsible project development.",
    color: "green",
    Icon: MdEco,
  },
];

// Unsplash office/professional images
const officeImages = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
];

export default function StrategyComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [visibleRows, setVisibleRows] = useState<boolean[]>(Array(advantages.length).fill(false));
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    rowRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisibleRows(prev => { const n = [...prev]; n[i] = true; return n; }), i * 110);
          obs.disconnect();
        }
      }, { threshold: 0.08 });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <>

      <section
        ref={sectionRef}
        className="bg-white py-24 px-6 md:px-12"
        style={{ fontFamily: "'Source Sans 3', sans-serif" }}
      >
        <div className="max-w-6xl mx-auto">

          {/* ── Header ── */}
          <div className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-red-700" />
              <span className="text-red-700 text-[11px] font-semibold tracking-[0.3em] uppercase">Why Choose Us</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b-2 border-gray-900">
              <h2
                className="text-gray-900 text-5xl md:text-6xl font-medium leading-[1.05]"
               
              >
                Strategic <span className="font-medium text-green-700">Advantages</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs border-l-2 border-red-700 pl-4 font-light">
                Focused capability. Global reach.<br />
                <span className="text-gray-700 font-medium">Nigerian execution discipline.</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start">

            <div>
              {advantages.map((item, i) => {

                return (
                  <div
                    key={item.number}
                    ref={el => { rowRefs.current[i] = el; }}
                    className={`flex gap-6 py-7 border-b border-gray-100 last:border-0 transition-all duration-600 ease-out
                      ${visibleRows[i] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                  >
                    {/* Number + dot column */}
                    <div className="flex flex-col items-center pt-1 shrink-0">
                      <span className={`text-[11px] font-mono tracking-[0.2em] text-[var(--input-bg)] font-bold `}>{item.number}</span>
                      <div className={`w-px flex-1 mt-3 bg-[var(--input-bg)] opacity-20`} />
                    </div>

                    {/* Content */}
                    <div className={`border-l-2 border-green-700 pl-5 flex-1`}>
                      <div className="flex items-center gap-2 mb-2">
                        <item.Icon className={`text-xl text-red-700`} />
                        <h3
                          className="text-gray-900 text-xl font-semibold leading-snug"
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed font-light">
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: image collage */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {/* Tall primary image */}
              <div className="relative w-full h-[340px] overflow-hidden">
                <img
                  src={officeImages[0]}
                  alt="Team in office"
                  className="w-full h-full object-cover"
                />
                <div className="img-overlay" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-xs tracking-widest uppercase font-medium opacity-80">Engineering Excellence</p>
                </div>
              </div>

              {/* Two smaller images side by side */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="relative h-[180px] overflow-hidden">
                  <img
                    src={officeImages[1]}
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="img-overlay" />
                </div>
                <div className="relative h-[180px] overflow-hidden">
                  <img
                    src={officeImages[2]}
                    alt="Professional at work"
                    className="w-full h-full object-cover"
                  />
                  <div className="img-overlay" />
                  {/* Red accent badge */}
                  <div className="absolute top-3 left-3 bg-red-700 text-white text-[10px] font-semibold tracking-widest uppercase px-2 py-1">
                    Since 2010
                  </div>
                </div>
              </div>

             
            </div>

          </div>

        </div>
      </section>
    </>
  );
}