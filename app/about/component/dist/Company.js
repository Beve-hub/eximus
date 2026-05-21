"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var fa_1 = require("react-icons/fa");
var workers_png_1 = require("../../../public/assests/workers.png");
var pillars = [
    {
        icon: React.createElement(fa_1.FaUsers, { className: "text-[var(--accent)] text-2xl" }),
        title: "Leadership Depth",
        desc: "Over 150 years of combined EPCM, operations, maintenance, and oil & gas execution experience."
    },
    {
        icon: React.createElement(fa_1.FaMapMarkerAlt, { className: "text-[var(--accent)] text-2xl" }),
        title: "Nigerian Focus",
        desc: "Structured for Nigerian oil & gas opportunities across onshore, swamp, shallow offshore, and gas infrastructure projects."
    },
    {
        icon: React.createElement(fa_1.FaGlobe, { className: "text-[var(--accent)] text-2xl" }),
        title: "Global Exposure",
        desc: "Relationships across Nigeria, West Africa, North America, Europe, and the Middle East ensure access to global standards and partners."
    },
    {
        icon: React.createElement(fa_1.FaCogs, { className: "text-[var(--accent)] text-2xl" }),
        title: "Execution Culture",
        desc: "A disciplined culture of delivery under real-world constraints, ensuring projects meet technical and commercial demands."
    },
];
var Company = function () {
    return (React.createElement("section", { className: "max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-14 items-start mt-12" },
        React.createElement("div", null,
            React.createElement("div", { className: "flex items-center gap-3 mb-2" },
                React.createElement("div", { className: "w-6 h-px bg-[var(--accent)]" }),
                React.createElement("p", { className: "text-[11px] tracking-[0.18em] uppercase text-[var(--accent)] font-medium" }, "About Us")),
            React.createElement("p", { className: " text-3xl font-light text-[var(--background)] mb-5 tracking-wide uppercase" }, "WHO WE ARE"),
            React.createElement("p", { className: "text-[16px] leading-relaxed text-[var(--input-border)] mb-8" },
                "Eximus Energy is led and supported by seasoned professionals with broad upstream, midstream, downstream, project management, operations and asset development experience in Nigeria and around the world.",
                React.createElement("br", null),
                " ",
                React.createElement("br", null),
                "Our people understand both the technical demands of oil and gas facilities and the commercial discipline required to deliver projects under real-world constraints."),
            React.createElement("div", { className: "flex flex-col divide-y divide-[var(--accent)]/15" }, pillars.map(function (p) { return (React.createElement("div", { key: p.title, className: "flex gap-4 py-4" },
                React.createElement("div", { className: "flex-shrink-0 w-9 h-9 border border-[var(--accent)]/30 rounded-lg flex items-center justify-center mt-0.5" }, p.icon),
                React.createElement("div", null,
                    React.createElement("p", { className: "text-[16px] font-semibold text-[var(--background)] mb-1" }, p.title),
                    React.createElement("p", { className: "text-[16px] leading-relaxed text-[var(--input-border)]" }, p.desc)))); }))),
        React.createElement("div", { className: "flex flex-col rounded-xl overflow-hidden border border-[var(--accent)]/20" },
            React.createElement("div", { className: "h-[2px] w-full bg-[var(--accent)] opacity-40 flex-shrink-0" }),
            React.createElement("div", { className: "relative w-full" },
                React.createElement(image_1["default"], { src: workers_png_1["default"], alt: "Eximus energy facility", width: 800, height: 300, className: "object-cover w-full h-[30rem]" }),
                React.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--accent)]/30 via-transparent to-black/50 pointer-events-none" })),
            React.createElement("div", { className: "px-5 py-4 border-t border-[var(--accent)]/15 bg-[var(--background)]" },
                React.createElement("p", { className: "text-[10px] tracking-[0.16em] uppercase text-[var(--accent)] opacity-70 mb-1" }, "Oil & Gas Infrastructure"),
                React.createElement("p", { className: " text-[16px] font-light text-[var(--color-foreground)] leading-snug" }, "Nigerian upstream & midstream excellence")))));
};
exports["default"] = Company;
