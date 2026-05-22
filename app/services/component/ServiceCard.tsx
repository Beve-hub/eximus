import React from "react";

interface ServiceCardProps {
  num: string;
  title: string;
  desc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ num, title, desc }) => {
  return (
    <div
      className="relative group overflow-hidden p-9 transition-all duration-300"
      style={{
        background: `color-mix(in srgb, var(--input-placeholder) 55%, transparent)`,
      }}
    >
      {/* Hover brightening layer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `color-mix(in srgb, var(--background) 70%, transparent)`,
        }}
      />

      {/* Gold top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="w-10 h-10 border border-[var(--foreground)]/40 flex items-center justify-center mb-6 bg-[var(--background)]/5">
          <span className="text-[var(--foreground)] text-sm font-mono">
            {num}
          </span>
        </div>

        <h3 className="text-[15px] font-medium text-[var(--foreground)] mb-2 tracking-wide">
          {title}
        </h3>

        <p className="text-[13px] leading-relaxed text-[var(--foreground)]/65">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;