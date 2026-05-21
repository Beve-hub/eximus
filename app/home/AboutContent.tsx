import Image from "next/image";
import React from "react";
import { FaUsers, FaMapMarkerAlt, FaGlobe, FaCogs } from "react-icons/fa";
import Tank from "../../public/assests/workers.png";

const pillars = [
  {
    icon: <FaUsers className="text-[var(--accent)] text-2xl" />,
    title: "Leadership Depth",
    desc: "Over 150 years of combined EPCM, operations, maintenance, and oil & gas execution experience.",
  },
  {
    icon: <FaMapMarkerAlt className="text-[var(--accent)] text-2xl" />,
    title: "Nigerian Focus",
    desc: "Structured for Nigerian oil & gas opportunities across onshore, swamp, shallow offshore, and gas infrastructure projects.",
  },
  {
    icon: <FaGlobe className="text-[var(--accent)] text-2xl" />,
    title: "Global Exposure",
    desc: "Relationships across Nigeria, West Africa, North America, Europe, and the Middle East ensure access to global standards and partners.",
  },
  {
    icon: <FaCogs className="text-[var(--accent)] text-2xl" />,
    title: "Execution Culture",
    desc: "A disciplined culture of delivery under real-world constraints, ensuring projects meet technical and commercial demands.",
  },
];

const AboutContent = () => {
  return (
    <section className="py-24 px-6 md:px-14 ">
      <div className="max-w-6xl mx-auto">
        {/* ── Top: Welcome heading + intro text ── */}
        <div className="grid md:grid-cols-12 gap-10 items-center pb-12 border-b border-[var(--accent)]/20">
          <div className="md:col-span-5">
            <p className=" text-5xl font-light leading-[1.05] text-[var(--input-border)]">
              Welcome to <br />
              <span className="text-[var(--accent)] italic font-normal">
                Eximus
              </span>
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-[16px] font-light leading-relaxed text-[var(--input-border)]">
              We are a Nigerian-focused integrated energy and EPCM company
              delivering engineering, procurement, construction, project
              management, and strategic advisory services across the full oil
              and gas value chain.
            </p>
          </div>
        </div>

        {/* ── Bottom: Who We Are (left) + Image (right) ── */}
        <div className="grid md:grid-cols-2 gap-14 items-start mt-12">
          {/* Left column */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-px bg-[var(--accent)]" />
              <p className="text-[11px] tracking-[0.18em] uppercase text-[var(--accent)] font-medium">
                About Us
              </p>
            </div>
            <p className=" text-3xl font-light text-[var(--background)] mb-5 tracking-wide uppercase">
              WHO WE ARE
            </p>
            <p className="text-[16px] font-light leading-relaxed text-[var(--input-border)] mb-8">
              Eximus Energy is led and supported by seasoned professionals with
              broad upstream, midstream, downstream, project management,
              operations and asset development experience in Nigeria and around
              the world.
            </p>

            <div className="flex flex-col divide-y divide-[var(--accent)]/15">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-4 py-4">
                  <div className="flex-shrink-0 w-9 h-9 border border-[var(--accent)]/30 rounded-lg flex items-center justify-center mt-0.5">
                    {p.icon}
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold text-[var(--background)] mb-1">
                      {p.title}
                    </p>
                    <p className="text-[16px] font-light leading-relaxed text-[var(--input-border)]">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column – image */}
          <div className="flex flex-col rounded-xl overflow-hidden border border-[var(--accent)]/20">
            {/* accent top bar */}
            <div className="h-[2px] w-full bg-[var(--accent)] opacity-40 flex-shrink-0" />
            <div className="relative w-full">
              <Image
                src={Tank}
                alt="Eximus energy facility"
                width={800}
                height={300}
                className="object-cover w-full h-[30rem]"/>
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/30 via-transparent to-black/50 pointer-events-none" />
            </div>

            {/* caption */}
            <div className="px-5 py-4 border-t border-[var(--accent)]/15 bg-[var(--background)]">
              <p className="text-[10px] tracking-[0.16em] uppercase text-[var(--accent)] opacity-70 mb-1">
                Oil &amp; Gas Infrastructure
              </p>
              <p className="text-[16px] font-light text-[var(--color-foreground)] leading-snug">
                Nigerian upstream &amp; midstream excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
