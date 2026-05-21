'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var ValuesContent = function () {
    var commitments = [
        {
            title: "Health, Safety and Security",
            icon: fa_1.FaShieldAlt,
            description: "Prioritizing the wellbeing and protection of our people and operations."
        },
        {
            title: "Community Development",
            icon: fa_1.FaUsers,
            description: "Building meaningful partnerships and creating lasting positive impact."
        },
        {
            title: "Sustainability",
            icon: fa_1.FaLeaf,
            description: "Integrating responsible practices for long-term viability."
        },
        {
            title: "Environmental Stewardship",
            icon: fa_1.FaGlobe,
            description: "Protecting and preserving the environment for future generations."
        },
    ];
    return (react_1["default"].createElement("section", { className: "py-20 bg-white" },
        react_1["default"].createElement("div", { className: "max-w-7xl mx-auto px-6" },
            react_1["default"].createElement("div", { className: "text-center mb-16" },
                react_1["default"].createElement("div", { className: "inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4" },
                    react_1["default"].createElement(fa_1.FaHandshake, { className: "text-lg" }),
                    "OUR COMMITMENT"),
                react_1["default"].createElement("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4" }, "Values and Commitments"),
                react_1["default"].createElement("p", { className: "max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed" },
                    "Disciplined execution with ",
                    react_1["default"].createElement("span", { className: "text-emerald-600 font-semibold" }, "people"),
                    ",",
                    react_1["default"].createElement("span", { className: "text-emerald-600 font-semibold" }, " environment"),
                    ", and",
                    react_1["default"].createElement("span", { className: "text-emerald-600 font-semibold" }, " performance"),
                    " at the center.")),
            react_1["default"].createElement("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8" }, commitments.map(function (item, index) { return (react_1["default"].createElement("div", { key: index, className: "group bg-white border border-gray-100 hover:border-emerald-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" },
                react_1["default"].createElement("div", { className: "w-14 h-14 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-2xl mb-6 group-hover:bg-emerald-100 transition-colors" },
                    react_1["default"].createElement(item.icon, { className: "text-3xl" })),
                react_1["default"].createElement("h3", { className: "text-xl font-semibold text-gray-900 mb-3 leading-tight" }, item.title),
                react_1["default"].createElement("p", { className: "text-gray-600 leading-relaxed" }, item.description))); })),
            react_1["default"].createElement("div", { className: "mt-16 text-center" },
                react_1["default"].createElement("p", { className: "text-sm uppercase tracking-widest text-gray-500 font-medium" }, "Guided by integrity \u2022 Driven by excellence")))));
};
exports["default"] = ValuesContent;
