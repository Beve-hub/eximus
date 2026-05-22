'use client';
"use strict";
exports.__esModule = true;
var Button_1 = require("@/component/ui/button/Button");
var LinearContent = function () {
    return (React.createElement("div", null,
        React.createElement("div", { className: 'flex flex-col items-center justify-center text-center py-20 px-6' },
            React.createElement("h2", { className: 'text-4xl text-[var(--background)] max-w-xl font-bold tracking-tight mb-3' }, "Get a Solutions for All Industries"),
            React.createElement("p", { className: 'text-base text-gray-500 max-w-xl mb-8' }, "We provide innovative solutions for sustainable progress. Our professional team works to increase productivity and cost effectiveness on the market."),
            React.createElement(Button_1["default"], { title: "Contact Us", className: "bg-black hover:bg-green-700 text-white", onClick: function () { return alert('Clicked!'); } }))));
};
exports["default"] = LinearContent;
