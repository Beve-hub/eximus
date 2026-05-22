'use client';
"use strict";
exports.__esModule = true;
var data_1 = require("./component/data");
var ServiceCard_1 = require("./component/ServiceCard");
function Action() {
    return (React.createElement("section", { className: "max-w-7xl w-full mx-auto py-20 px-12" },
        React.createElement("div", { className: "max-w-7xl mx-auto flex justify-between items-end mb-12" },
            React.createElement("div", null,
                React.createElement("div", { className: "flex items-center gap-3 mb-5" },
                    React.createElement("div", { className: "h-px w-8 bg-red-700" }),
                    React.createElement("p", { className: "text-xs font-semibold uppercase tracking-[0.35em] text-red-700" }, "Our Services")),
                React.createElement("h2", { className: "text-3xl md:text-4xl font-black uppercase leading-none tracking-tight text-gray-900 mb-5" }, "What We Do"),
                React.createElement("p", { className: "text-sm text-gray-500 leading-relaxed max-w-xl" }, "Integrated EPCM and energy solutions for Nigeria\u2019s oil and gas sector."))),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-px bg-[var(--foreground)]/10 border border-white/5" }, data_1.services.map(function (service) { return (React.createElement(ServiceCard_1["default"], { key: service.num, num: service.num, title: service.title, desc: service.desc })); }))));
}
exports["default"] = Action;
