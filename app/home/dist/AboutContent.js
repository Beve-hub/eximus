"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var workers_png_1 = require("../../public/assests/workers.png");
var pillars = [
    {
        icon: react_1["default"].createElement(fa_1.FaUsers, { className: "text-[var(--accent)] text-2xl" }),
        title: "Leadership Depth",
        desc: "Over 150 years of combined EPCM, operations, maintenance, and oil & gas execution experience."
    },
    {
        icon: react_1["default"].createElement(fa_1.FaMapMarkerAlt, { className: "text-[var(--accent)] text-2xl" }),
        title: "Nigerian Focus",
        desc: "Structured for Nigerian oil & gas opportunities across onshore, swamp, shallow offshore, and gas infrastructure projects."
    },
    {
        icon: react_1["default"].createElement(fa_1.FaGlobe, { className: "text-[var(--accent)] text-2xl" }),
        title: "Global Exposure",
        desc: "Relationships across Nigeria, West Africa, North America, Europe, and the Middle East ensure access to global standards and partners."
    },
    {
        icon: react_1["default"].createElement(fa_1.FaCogs, { className: "text-[var(--accent)] text-2xl" }),
        title: "Execution Culture",
        desc: "A disciplined culture of delivery under real-world constraints, ensuring projects meet technical and commercial demands."
    },
];
var AboutContent = function () {
    return (react_1["default"].createElement("section", { className: "py-24 px-6 md:px-14 " },
        react_1["default"].createElement("div", { className: "max-w-6xl mx-auto" },
            react_1["default"].createElement("div", { className: "grid md:grid-cols-12 gap-10 items-center pb-12 border-b border-[var(--accent)]/20" },
                react_1["default"].createElement("div", { className: "md:col-span-5" },
                    react_1["default"].createElement("p", { className: "font-serif text-5xl font-light leading-[1.05] text-[var(--input-border)]" },
                        "Welcome to ",
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("span", { className: "text-[var(--accent)] italic font-normal" }, "Eximus"))),
                react_1["default"].createElement("div", { className: "md:col-span-7" },
                    react_1["default"].createElement("p", { className: "text-[16px] leading-relaxed text-[var(--input-border)]" }, "We are a Nigerian-focused integrated energy and EPCM company delivering engineering, procurement, construction, project management, and strategic advisory services across the full oil and gas value chain."))),
            react_1["default"].createElement("div", { className: "grid md:grid-cols-2 gap-14 items-start mt-12" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: "flex items-center gap-3 mb-2" },
                        react_1["default"].createElement("div", { className: "w-6 h-px bg-[var(--accent)]" }),
                        react_1["default"].createElement("p", { className: "text-[11px] tracking-[0.18em] uppercase text-[var(--accent)] font-medium" }, "About Us")),
                    react_1["default"].createElement("p", { className: "font-serif text-3xl font-light text-[var(--background)] mb-5 tracking-wide uppercase" }, "WHO WE ARE"),
                    react_1["default"].createElement("p", { className: "text-[16px] leading-relaxed text-[var(--input-border)] mb-8" }, "Eximus Energy is led and supported by seasoned professionals with broad upstream, midstream, downstream, project management, operations and asset development experience in Nigeria and around the world."),
                    react_1["default"].createElement("div", { className: "flex flex-col divide-y divide-[var(--accent)]/15" }, pillars.map(function (p) { return (react_1["default"].createElement("div", { key: p.title, className: "flex gap-4 py-4" },
                        react_1["default"].createElement("div", { className: "flex-shrink-0 w-9 h-9 border border-[var(--accent)]/30 rounded-lg flex items-center justify-center mt-0.5" }, p.icon),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("p", { className: "text-[16px] font-semibold text-[var(--background)] mb-1" }, p.title),
                            react_1["default"].createElement("p", { className: "text-[16px] leading-relaxed text-[var(--input-border)]" }, p.desc)))); }))),
                react_1["default"].createElement("div", { className: "flex flex-col rounded-xl overflow-hidden border border-[var(--accent)]/20" },
                    react_1["default"].createElement("div", { className: "h-[2px] w-full bg-[var(--accent)] opacity-40 flex-shrink-0" }),
                    react_1["default"].createElement("div", { className: "relative w-full" },
                        react_1["default"].createElement(image_1["default"], { src: workers_png_1["default"], alt: "Eximus energy facility", width: 800, height: 300, className: "object-cover w-full h-[30rem]" }),
                        react_1["default"].createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-[var(--accent)]/30 via-transparent to-black/50 pointer-events-none" })),
                    react_1["default"].createElement("div", { className: "px-5 py-4 border-t border-[var(--accent)]/15 bg-[var(--background)]" },
                        react_1["default"].createElement("p", { className: "text-[10px] tracking-[0.16em] uppercase text-[var(--accent)] opacity-70 mb-1" }, "Oil & Gas Infrastructure"),
                        react_1["default"].createElement("p", { className: "font-serif text-[16px] font-light text-[var(--color-foreground)] leading-snug" }, "Nigerian upstream & midstream excellence")))))));
};
exports["default"] = AboutContent;
