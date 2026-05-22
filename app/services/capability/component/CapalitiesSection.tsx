"use client";

import { useState } from "react";

const capabilities = [
  {
    id: "surface",
    label: "Surface Infrastructure",
    icon: "ti-building-factory-2",
    items: [
      { text: "Flowstations" },
      { text: "Gas processing facilities" },
      { text: "Mechanical refrigeration systems" },
      { text: "Early production facilities" },
      { text: "Storage facilities" },
    ],
  },
  {
    id: "conveyance",
    label: "Conveyance & Wellheads",
    icon: "ti-pipe",
    items: [
      { text: "Pipelines and flowlines" },
      { text: "Well hook-ups" },
      { text: "Compression systems" },
      { text: "Metering systems" },
      { text: "LACT units" },
    ],
  },
  {
    id: "utility",
    label: "Utility & Controls",
    icon: "ti-cpu",
    items: [
      { text: "Utility systems" },
      { text: "Power generation interfaces" },
      { text: "Instrumentation & controls" },
      { text: "Process optimization" },
      { text: "Asset integrity reviews" },
    ],
  },
  {
    id: "modular",
    label: "Modular & Field Systems",
    icon: "ti-box-multiple",
    items: [
      { text: "Modular facilities" },
      { text: "Relocatable process systems" },
      { text: "Offshore and swamp facilities" },
      { text: "Construction supervision" },
      { text: "Commissioning support" },
      { text: "Operations readiness" },
    ],
  },
];

export default function CapabilitiesSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Header */}
      <div className="mb-14 max-w-3xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-red-700" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-700">
            What we deliver
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-black uppercase leading-none tracking-tight text-gray-900 mb-5">
          Core Capabilities
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
          Fit-for-purpose engineering and execution across critical oil and gas
          infrastructure — from upstream wellheads to integrated processing
          facilities.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {capabilities.map((group, i) => (
          <div
            key={group.id}
            onMouseEnter={() => setActive(group.id)}
            onMouseLeave={() => setActive(null)}
            className={`
              relative flex flex-col rounded-2xl border bg-white p-6 cursor-default
              transition-all duration-300
              ${
                active === group.id
                  ? "border-red-200 shadow-xl shadow-red-900/10 -translate-y-1"
                  : "border-gray-100 shadow-none"
              }
            `}
          >
            {/* Top row: icon + number */}
            <div className="flex items-start justify-between mb-5">
              <span
                className={`
                  flex items-center justify-center w-12 h-12 rounded-xl
                  transition-colors duration-300
                  ${active === group.id ? "bg-green-700" : "bg-red-50"}
                `}
              >
                <i
                  className={`ti ${group.icon} text-lg
                    ${active === group.id ? "text-white" : "text-red-700"}
                    transition-colors duration-300
                  `}
                  aria-hidden="true"
                />
              </span>
              <span className="text-xs font-bold tracking-[0.25em] text-gray-200 tabular-nums mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Label */}
            <h3 className="text-base font-bold uppercase tracking-wide text-gray-900 mb-3 leading-tight">
              {group.label}
            </h3>

            {/* Animated divider */}
            <div
              className={`
                mb-5 h-0.5 rounded-full bg-red-700
                transition-all duration-500
                ${active === group.id ? "w-full" : "w-8"}
              `}
            />

            {/* Items with Dot Icons */}
            <ul className="flex-1 space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item.text}
                  className={`
                    flex items-center gap-2.5 text-xs
                    transition-colors duration-200
                    ${active === group.id ? "text-gray-600" : "text-gray-400"}
                  `}
                >
                  {/* Simple Dot */}
                  <span
                    className={`shrink-0 w-1.5 h-1.5 rounded-full bg-red-700 transition-all duration-200
                      ${active === group.id ? "bg-red-700 scale-110" : "bg-red-400"}
                    `}
                  />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}