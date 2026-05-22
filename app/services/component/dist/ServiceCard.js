"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ServiceCard = function (_a) {
    var num = _a.num, title = _a.title, desc = _a.desc;
    return (react_1["default"].createElement("div", { className: "relative group overflow-hidden p-9 transition-all duration-300", style: {
            background: "color-mix(in srgb, var(--input-placeholder) 55%, transparent)"
        } },
        react_1["default"].createElement("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300", style: {
                background: "color-mix(in srgb, var(--background) 70%, transparent)"
            } }),
        react_1["default"].createElement("div", { className: "absolute top-0 left-0 right-0 h-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
        react_1["default"].createElement("div", { className: "relative z-10" },
            react_1["default"].createElement("div", { className: "w-10 h-10 border border-[var(--foreground)]/40 flex items-center justify-center mb-6 bg-[var(--background)]/5" },
                react_1["default"].createElement("span", { className: "text-[var(--foreground)] text-sm font-mono" }, num)),
            react_1["default"].createElement("h3", { className: "text-[15px] font-medium text-[var(--foreground)] mb-2 tracking-wide" }, title),
            react_1["default"].createElement("p", { className: "text-[13px] leading-relaxed text-[var(--foreground)]/65" }, desc))));
};
exports["default"] = ServiceCard;
