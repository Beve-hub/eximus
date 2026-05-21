'use client';
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var Button_1 = require("@/component/ui/button/Button");
var HeroContent = function () {
    var router = navigation_1.useRouter();
    return (React.createElement("div", { className: "relative z-20 h-full flex items-center px-6 md:px-16 lg:px-30" },
        React.createElement("div", { className: "max-w-2xl text-left" },
            React.createElement("h2", { className: "text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight tracking-tight" }, "Engineering solutions today. Energy tomorrow."),
            React.createElement("p", { className: "mt-6 text-lg md:text-2xl text-white/90 max-w-lg" }, "Our goal is to consistently meet or exceed client requirements safely, responsibly and commercially."),
            React.createElement("div", { className: "mt-10" },
                React.createElement(Button_1["default"], { title: "GET IN TOUCH", className: "bg-green-600 hover:bg-green-700 text-white", onClick: function () { return router.push('/contact'); } })))));
};
exports["default"] = HeroContent;
