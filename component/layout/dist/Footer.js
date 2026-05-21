"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var image_1 = require("next/image");
var data_1 = require("./data");
var Logo_white_png_1 = require("../../public/assests/Logo white.png");
var Footer = function () {
    return (React.createElement("footer", { className: "bg-[var(--background)] border-t border-amber-500/10 pt-16 pb-12" },
        React.createElement("div", { className: "mx-auto max-w-7xl px-6 sm:px-10 md:px-16" },
            React.createElement("div", { className: "grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12" },
                React.createElement("div", { className: "lg:col-span-5" },
                    React.createElement(link_1["default"], { href: "/", className: "inline-flex items-center gap-4 mb-6" },
                        React.createElement(image_1["default"], { src: Logo_white_png_1["default"], alt: "Company Logo", className: "h-25 w-auto brightness-110 drop-shadow-xl", priority: true })),
                    React.createElement("p", { className: "text-slate-400 text-[15.5px] leading-relaxed max-w-md" }, "Engineering solutions today. Energy tomorrow.")),
                React.createElement("div", { className: "lg:col-span-2" },
                    React.createElement("p", { className: "text-amber-400 uppercase text-xs tracking-[2px] font-semibold mb-6" }, "Company"),
                    React.createElement("ul", { className: "space-y-3.5 text-sm text-slate-300" }, data_1.navLinks.map(function (_a) {
                        var label = _a.label, href = _a.href;
                        return (React.createElement("li", { key: label },
                            React.createElement(link_1["default"], { href: href, className: "hover:text-white transition-colors" }, label)));
                    }))),
                React.createElement("div", { className: "lg:col-span-2" },
                    React.createElement("p", { className: "text-amber-400 uppercase text-xs tracking-[2px] font-semibold mb-6" }, "Services"),
                    React.createElement("ul", { className: "space-y-3.5 text-sm text-slate-300" },
                        React.createElement("li", null,
                            React.createElement("a", { href: "#", className: "hover:text-white transition-colors" }, "Downstream")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#", className: "hover:text-white transition-colors" }, "Energy Transition")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#", className: "hover:text-white transition-colors" }, "HSE & Sustainability")))),
                React.createElement("div", { className: "lg:col-span-3" },
                    React.createElement("p", { className: "text-amber-400 uppercase text-xs tracking-[2px] font-semibold mb-6" }, "Contact"),
                    React.createElement("div", { className: "space-y-4 text-sm text-slate-300" },
                        React.createElement("div", null,
                            React.createElement("p", { className: "text-slate-400 text-xs mb-1" }, "HEAD OFFICE"),
                            React.createElement("p", null, "Abuja, FCT, Nigeria")),
                        React.createElement("div", null,
                            React.createElement("p", { className: "text-slate-400 text-xs mb-1" }, "EMAIL"),
                            React.createElement("a", { href: "mailto:info@yourcompany.com", className: "hover:text-white transition-colors" }, "info@yourcompany.com"))))),
            React.createElement("div", { className: "mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500" },
                React.createElement("div", null,
                    "\u00A9 ",
                    new Date().getFullYear(),
                    " ",
                    React.createElement("span", { className: "text-amber-400 font-medium" }, "Your Company Ltd"),
                    ". All Rights Reserved."),
                React.createElement("div", { className: "flex items-center gap-8" },
                    React.createElement("a", { href: "#", className: "hover:text-slate-300 transition-colors" }, "Privacy Policy"),
                    React.createElement("a", { href: "#", className: "hover:text-slate-300 transition-colors" }, "Terms & Conditions"),
                    React.createElement("a", { href: "#", className: "hover:text-slate-300 transition-colors" }, "Sustainability Report"),
                    React.createElement("div", { className: "flex items-center gap-2" },
                        React.createElement("span", { className: "relative flex h-3 w-3" },
                            React.createElement("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" }),
                            React.createElement("span", { className: "relative inline-flex h-3 w-3 rounded-full bg-emerald-400" })),
                        React.createElement("span", null, "Operations Running 24/7")))))));
};
exports["default"] = Footer;
