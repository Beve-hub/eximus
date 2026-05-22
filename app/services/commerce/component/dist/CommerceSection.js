"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var gasServices = [
    {
        icon: react_1["default"].createElement(fa_1.FaIndustry, { className: "w-8 h-8" }),
        title: "Gas Monetization",
        desc: "Concept development, feasibility studies, facility definition, and EPCM support for gas commercialization projects."
    },
    {
        icon: react_1["default"].createElement(fa_1.FaLeaf, { className: "w-8 h-8" }),
        title: "Flare Reduction",
        desc: "Engineering and execution support for flare capture, processing, compression, and utilization."
    },
    {
        icon: react_1["default"].createElement(fa_1.FaGasPump, { className: "w-8 h-8" }),
        title: "CNG & LPG",
        desc: "Modular CNG facilities, LPG storage & loading systems, and complete gas-to-market infrastructure."
    },
    {
        icon: react_1["default"].createElement(fa_1.FaBolt, { className: "w-8 h-8" }),
        title: "Gas-to-Power",
        desc: "End-to-end integration for gas supply, treatment, compression, power generation, and metering."
    },
    {
        icon: react_1["default"].createElement(fa_1.FaCogs, { className: "w-8 h-8" }),
        title: "Modular Processing",
        desc: "Sourcing, engineering integration, and redeployment of modular gas processing facilities."
    },
    {
        icon: react_1["default"].createElement(fa_1.FaChartLine, { className: "w-8 h-8" }),
        title: "Operational Efficiency",
        desc: "Debottlenecking, reliability improvement, and optimization to maximize output and minimize losses."
    },
];
var CommerceSection = function () {
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement("div", { className: "max-w-7xl mx-auto px-6 pt-16 pb-24" },
            react_1["default"].createElement("div", { className: "flex justify-between items-center gap-3 mb-5" },
                react_1["default"].createElement("div", { className: "mb-14 max-w-3xl" },
                    react_1["default"].createElement("div", { className: "flex items-center gap-3 mb-5" },
                        react_1["default"].createElement("div", { className: "h-px w-8 bg-red-700" }),
                        react_1["default"].createElement("p", { className: "text-xs font-semibold uppercase tracking-[0.35em] text-red-700" }, "Systems & Solutions")),
                    react_1["default"].createElement("h2", { className: "text-3xl md:text-4xl font-black uppercase leading-none tracking-tight text-gray-900 mb-5" },
                        "GAS COMMERCIALIZATION",
                        react_1["default"].createElement("span", { className: "block text-emerald-500 mt-3" }, "AND ENERGY TRANSITION")),
                    react_1["default"].createElement("p", { className: "text-sm text-gray-500 leading-relaxed max-w-xl" }, "We unlock value from natural gas by turning stranded and underutilized resources into commercially viable energy solutions."))),
            react_1["default"].createElement("div", { className: "max-w-3xl mx-auto text-center mb-20" },
                react_1["default"].createElement("p", { className: "text-2xl md:text-3xl leading-tight text-zinc-300" })),
            react_1["default"].createElement("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" }, gasServices.map(function (service, idx) { return (react_1["default"].createElement("div", { key: idx, className: "group bg-zinc-900 border border-zinc-800 hover:border-emerald-500/60 transition-all duration-300 rounded-3xl p-8 hover:-translate-y-1" },
                react_1["default"].createElement("div", { className: "w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform" }, service.icon),
                react_1["default"].createElement("h3", { className: "text-2xl font-semibold mb-4 text-white" }, service.title),
                react_1["default"].createElement("p", { className: "text-zinc-400 leading-relaxed" }, service.desc))); })))));
};
exports["default"] = CommerceSection;
