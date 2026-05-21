"use strict";
exports.__esModule = true;
var react_1 = require("react");
var services = [
    {
        num: '01', title: 'Engineering',
        desc: 'Concept studies, FEED, detailed engineering, design review, debottlenecking, brownfield modifications and integrated facilities engineering.'
    },
    {
        num: '02', title: 'Procurement',
        desc: 'Strategic sourcing, OEM coordination, vendor evaluation, surplus equipment sourcing, inspection coordination and import logistics support.'
    },
    {
        num: '03', title: 'Construction',
        desc: 'Brownfield and greenfield construction, pipeline and flowline works, facility upgrades, hook-up, commissioning and site execution support.'
    },
    {
        num: '04', title: 'Project Management',
        desc: 'Planning, scheduling, cost control, interface management, contract administration, risk management, reporting and stakeholder coordination.'
    },
    {
        num: '05', title: 'Operations Support',
        desc: 'Asset integrity, maintenance planning, operational readiness, troubleshooting, facility audits and reliability improvement.'
    },
    {
        num: '06', title: 'Strategic Advisory',
        desc: "Due diligence, owner's engineering, asset acquisition support, technical evaluation and independent project review."
    },
];
var ServicesContent = function () {
    return (react_1["default"].createElement("section", { className: "max-w-7xl w-full mx-auto py-20 px-12" },
        react_1["default"].createElement("div", { className: "max-w-7xl mx-auto flex justify-between items-end mb-12" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: "flex items-center gap-4 mb-2" },
                    react_1["default"].createElement("div", { className: "w-6 h-px bg-[var(--foreground)]" }),
                    react_1["default"].createElement("p", { className: "text-[18px] tracking-[0.18em] uppercase text-[var(--foreground)] font-medium" }, "What we do")),
                react_1["default"].createElement("h2", { className: "font-serif text-[38px] font-normal text-[var(--foreground)] leading-tight" }, "Our Services")),
            react_1["default"].createElement("p", { className: "text-sm text-[#555] max-w-[260px] text-right leading-relaxed" }, "End-to-end solutions across the full oil and gas value chain")),
        react_1["default"].createElement("div", { className: "grid grid-cols-3 gap-px bg-[var(--foreground)]/10 border border-white/5" }, services.map(function (_a) {
            var num = _a.num, title = _a.title, desc = _a.desc;
            return (react_1["default"].createElement("div", { key: num, className: "relative group overflow-hidden p-9 transition-all duration-300", style: {
                    background: "color-mix(in srgb, var( --input-placeholder) 55%, transparent)"
                } },
                react_1["default"].createElement("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300", style: {
                        background: "color-mix(in srgb, var(--background) 70%, transparent)"
                    } }),
                react_1["default"].createElement("div", { className: "absolute top-0 left-0 right-0 h-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
                react_1["default"].createElement("div", { className: "relative z-10" },
                    react_1["default"].createElement("div", { className: "w-10 h-10 border border-[var(--foreground)]/40 flex items-center justify-center mb-6 bg-[var(--background)]/5" },
                        react_1["default"].createElement("span", { className: " text-[var(--foreground)] text-sm font-mono" }, num)),
                    react_1["default"].createElement("h3", { className: "text-[15px] font-medium text-[var(--foreground)] mb-2 tracking-wide" }, title),
                    react_1["default"].createElement("p", { className: "text-[13px] leading-relaxed text-[var(--foreground)]/65" }, desc))));
        }))));
};
exports["default"] = ServicesContent;
