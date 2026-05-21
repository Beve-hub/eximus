"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TopLayout = function (_a) {
    var heroTitle = _a.heroTitle, subtitle = _a.subtitle, currentTitle = _a.currentTitle, _b = _a.height, height = _b === void 0 ? 'h-[300px]' : _b, _c = _a.overlayOpacity, overlayOpacity = _c === void 0 ? 0.65 : _c;
    var backgroundImage = '/assests/topbg2.jpg'; // ← Change this path to your image
    return (react_1["default"].createElement("div", { className: "relative w-full " + height + " bg-cover bg-center bg-no-repeat flex items-center justify-center", style: { backgroundImage: "url(" + backgroundImage + ")" } },
        react_1["default"].createElement("div", { className: "absolute inset-0 bg-black", style: { opacity: overlayOpacity } }),
        react_1["default"].createElement("div", { className: "relative z-10 text-center px-6 max-w-4xl mx-auto" },
            react_1["default"].createElement("p", { className: "text-5xl md:text-6xl lg:text-5xl font-semibold text-white leading-tight tracking-tighter" }, heroTitle),
            react_1["default"].createElement("div", { className: "flex items-center justify-center gap-2 text-white/90 text-sm md:text-base mb-6 tracking-widest uppercase" },
                subtitle && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("span", null, subtitle),
                    react_1["default"].createElement("span", { className: "text-white/60" }, "/"))),
                react_1["default"].createElement("span", { className: "text-white font-semibold" }, currentTitle))),
        react_1["default"].createElement("div", { className: "absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent" })));
};
exports["default"] = TopLayout;
