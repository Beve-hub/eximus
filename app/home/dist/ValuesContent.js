'use client';
"use strict";
exports.__esModule = true;
var fi_1 = require("react-icons/fi");
var bs_1 = require("react-icons/bs");
var fa_1 = require("react-icons/fa");
var ValuesContent = function () {
    var values = [
        {
            icon: bs_1.BsShieldCheck,
            title: "Health, Safety and Security",
            body: "The health, safety and security of our personnel, contractors, clients and host communities are fundamental to how we work. We design and execute projects with a strong safety mindset."
        },
        {
            icon: fi_1.FiUsers,
            title: "Community Development",
            body: "We support constructive engagement with host communities and aim to create meaningful local participation through employment, training and responsible project delivery."
        },
        {
            icon: fi_1.FiFlag,
            title: "Nigerian Content Development",
            body: "We are committed to Nigerian content development, local capability building and appropriate execution of work in Nigeria while leveraging global technology and expertise."
        },
        {
            icon: fi_1.FiTrendingUp,
            title: "Sustainability",
            body: "We believe long-term business success requires a balance between commercial performance, social responsibility and environmental stewardship."
        },
        {
            icon: fi_1.FiFeather,
            title: "Environmental Stewardship",
            body: "We support energy development with practical measures that reduce waste, improve reliability, reduce emissions and protect the operating environment."
        },
    ];
    return (React.createElement("section", { className: "py-20 bg-white" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-6" },
            React.createElement("div", { className: "text-center mb-16" },
                React.createElement("div", { className: "inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4" },
                    React.createElement(fa_1.FaHandshake, { className: "text-lg" }),
                    "OUR COMMITMENT"),
                React.createElement("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4" }, "Values and Commitments"),
                React.createElement("p", { className: "max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed" },
                    "Disciplined execution with ",
                    React.createElement("span", { className: "text-green-600 font-semibold" }, "people"),
                    ",",
                    React.createElement("span", { className: "text-green-600 font-semibold" }, " environment"),
                    ", and",
                    React.createElement("span", { className: "text-green-600 font-semibold" }, " performance"),
                    " at the center.")),
            React.createElement("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" }, values.map(function (item, index) { return (React.createElement("div", { key: index, className: "group bg-white border border-gray-100 hover:border-green-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" },
                React.createElement("div", { className: "w-14 h-14 flex items-center justify-center bg-green-50 text-green-600 rounded-2xl mb-6 group-hover:bg-green-100 transition-colors" },
                    React.createElement(item.icon, { className: "text-3xl" })),
                React.createElement("h3", { className: "text-xl font-semibold text-gray-900 mb-3 leading-tight" }, item.title),
                React.createElement("p", { className: "text-gray-600 leading-relaxed" }, item.body))); })),
            React.createElement("div", { className: "mt-16 text-center" },
                React.createElement("p", { className: "text-sm uppercase tracking-widest text-gray-500 font-medium" }, "Guided by integrity \u2022 Driven by excellence")))));
};
exports["default"] = ValuesContent;
