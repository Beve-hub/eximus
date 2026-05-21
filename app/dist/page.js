"use strict";
exports.__esModule = true;
// HomePage.tsx
var Navbar_1 = require("@/component/layout/Navbar");
var Hero_1 = require("./home/Hero");
var AboutContent_1 = require("./home/AboutContent");
var ServicesContent_1 = require("./home/ServicesContent");
var LinearContent_1 = require("./home/LinearContent");
var Footer_1 = require("@/component/layout/Footer");
var ValuesContent_1 = require("./home/ValuesContent");
function HomePage() {
    return (React.createElement("div", { className: "min-h-screen flex flex-col" },
        React.createElement(Navbar_1["default"], null),
        React.createElement("main", { className: "w-full" },
            React.createElement(Hero_1["default"], null),
            React.createElement("div", { className: "max-w-7xl w-full mx-auto" },
                React.createElement(AboutContent_1["default"], null)),
            React.createElement("div", { className: "w-full relative bg-[var(--label-fg)]", style: {
                    backgroundImage: "url('/assests/plant.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed"
                } },
                React.createElement("div", { className: "absolute inset-0", style: {
                        background: "linear-gradient(\n                to bottom,\n                color-mix(in srgb, var(--input-bg) 92%, transparent) 0%,\n                color-mix(in srgb, var(--input-border) 88%, transparent) 100%\n              )"
                    } }),
                React.createElement("div", { className: "relative z-10" },
                    React.createElement(ServicesContent_1["default"], null))),
            React.createElement("div", { className: "w-full" },
                React.createElement(ValuesContent_1["default"], null)),
            React.createElement("div", { className: "w-full bg-[var(--label-fg)]" },
                React.createElement(LinearContent_1["default"], null))),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = HomePage;
