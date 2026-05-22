"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var md_1 = require("react-icons/md");
var advantages = [
    {
        number: "01",
        title: "Nigerian Operating Experience",
        body: "Strong understanding of Nigerian operating environments, logistics realities, regulatory systems and stakeholder expectations.",
        color: "red",
        Icon: md_1.MdLocationOn
    },
    {
        number: "02",
        title: "International Technical Network",
        body: "Strategic alliances with engineering, fabrication, inspection and OEM organizations across Canada, the USA, Europe and Nigeria.",
        color: "green",
        Icon: md_1.MdPublic
    },
    {
        number: "03",
        title: "Practical EPCM Execution",
        body: "Balanced focus on engineering excellence, constructability, operability and commercial viability.",
        color: "red",
        Icon: md_1.MdEngineering
    },
    {
        number: "04",
        title: "Flexible Delivery Model",
        body: "Capability to support stand-alone scopes, owner's engineering, procurement-only support or integrated EPCM execution.",
        color: "green",
        Icon: md_1.MdTune
    },
    {
        number: "05",
        title: "Asset Acquisition Expertise",
        body: "Experience supporting technical due diligence, asset acquisition evaluations, modular facility sourcing and relocation projects.",
        color: "red",
        Icon: md_1.MdBusinessCenter
    },
    {
        number: "06",
        title: "Responsible Growth",
        body: "A future-facing energy company built to support profitable, safe and environmentally responsible project development.",
        color: "green",
        Icon: md_1.MdEco
    },
];
// Unsplash office/professional images
var officeImages = [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
];
function StrategyComponent() {
    var sectionRef = react_1.useRef(null);
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    var _b = react_1.useState(Array(advantages.length).fill(false)), visibleRows = _b[0], setVisibleRows = _b[1];
    var rowRefs = react_1.useRef([]);
    react_1.useEffect(function () {
        var el = sectionRef.current;
        if (!el)
            return;
        var obs = new IntersectionObserver(function (_a) {
            var e = _a[0];
            if (e.isIntersecting) {
                setVisible(true);
                obs.disconnect();
            }
        }, { threshold: 0.1 });
        obs.observe(el);
        return function () { return obs.disconnect(); };
    }, []);
    react_1.useEffect(function () {
        var observers = [];
        rowRefs.current.forEach(function (el, i) {
            if (!el)
                return;
            var obs = new IntersectionObserver(function (_a) {
                var entry = _a[0];
                if (entry.isIntersecting) {
                    setTimeout(function () { return setVisibleRows(function (prev) { var n = __spreadArrays(prev); n[i] = true; return n; }); }, i * 110);
                    obs.disconnect();
                }
            }, { threshold: 0.08 });
            obs.observe(el);
            observers.push(obs);
        });
        return function () { return observers.forEach(function (o) { return o.disconnect(); }); };
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { ref: sectionRef, className: "bg-white py-24 px-6 md:px-12", style: { fontFamily: "'Source Sans 3', sans-serif" } },
            React.createElement("div", { className: "max-w-6xl mx-auto" },
                React.createElement("div", { className: "mb-14 transition-all duration-700 " + (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5") },
                    React.createElement("div", { className: "flex items-center gap-3 mb-4" },
                        React.createElement("span", { className: "w-8 h-0.5 bg-red-700" }),
                        React.createElement("span", { className: "text-red-700 text-[11px] font-semibold tracking-[0.3em] uppercase" }, "Why Choose Us")),
                    React.createElement("div", { className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b-2 border-gray-900" },
                        React.createElement("h2", { className: "text-gray-900 text-5xl md:text-6xl font-medium leading-[1.05]" },
                            "Strategic ",
                            React.createElement("span", { className: "font-medium text-green-700" }, "Advantages")),
                        React.createElement("p", { className: "text-gray-500 text-sm leading-relaxed max-w-xs border-l-2 border-red-700 pl-4 font-light" },
                            "Focused capability. Global reach.",
                            React.createElement("br", null),
                            React.createElement("span", { className: "text-gray-700 font-medium" }, "Nigerian execution discipline.")))),
                React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start" },
                    React.createElement("div", null, advantages.map(function (item, i) {
                        return (React.createElement("div", { key: item.number, ref: function (el) { rowRefs.current[i] = el; }, className: "flex gap-6 py-7 border-b border-gray-100 last:border-0 transition-all duration-600 ease-out\n                      " + (visibleRows[i] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6") },
                            React.createElement("div", { className: "flex flex-col items-center pt-1 shrink-0" },
                                React.createElement("span", { className: "text-[11px] font-mono tracking-[0.2em] text-[var(--input-bg)] font-bold " }, item.number),
                                React.createElement("div", { className: "w-px flex-1 mt-3 bg-[var(--input-bg)] opacity-20" })),
                            React.createElement("div", { className: "border-l-2 border-green-700 pl-5 flex-1" },
                                React.createElement("div", { className: "flex items-center gap-2 mb-2" },
                                    React.createElement(item.Icon, { className: "text-xl text-red-700" }),
                                    React.createElement("h3", { className: "text-gray-900 text-xl font-semibold leading-snug" }, item.title)),
                                React.createElement("p", { className: "text-gray-500 text-sm leading-relaxed font-light" }, item.body))));
                    })),
                    React.createElement("div", { className: "relative transition-all duration-1000 delay-300 " + (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8") },
                        React.createElement("div", { className: "relative w-full h-[340px] overflow-hidden" },
                            React.createElement("img", { src: officeImages[0], alt: "Team in office", className: "w-full h-full object-cover" }),
                            React.createElement("div", { className: "img-overlay" }),
                            React.createElement("div", { className: "absolute bottom-4 left-4 right-4" },
                                React.createElement("p", { className: "text-white text-xs tracking-widest uppercase font-medium opacity-80" }, "Engineering Excellence"))),
                        React.createElement("div", { className: "grid grid-cols-2 gap-2 mt-2" },
                            React.createElement("div", { className: "relative h-[180px] overflow-hidden" },
                                React.createElement("img", { src: officeImages[1], alt: "Team collaboration", className: "w-full h-full object-cover" }),
                                React.createElement("div", { className: "img-overlay" })),
                            React.createElement("div", { className: "relative h-[180px] overflow-hidden" },
                                React.createElement("img", { src: officeImages[2], alt: "Professional at work", className: "w-full h-full object-cover" }),
                                React.createElement("div", { className: "img-overlay" }),
                                React.createElement("div", { className: "absolute top-3 left-3 bg-red-700 text-white text-[10px] font-semibold tracking-widest uppercase px-2 py-1" }, "Since 2010")))))))));
}
exports["default"] = StrategyComponent;
