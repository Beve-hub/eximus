"use strict";
exports.__esModule = true;
var Footer_1 = require("@/component/layout/Footer");
var Navbar_1 = require("@/component/layout/Navbar");
var react_1 = require("react");
var TopLayout_1 = require("@/component/layout/TopLayout");
var Profile_1 = require("./component/Profile");
var Company_1 = require("./component/Company");
var Value_1 = require("./component/Value");
var page = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "min-h-screen flex flex-col" },
            react_1["default"].createElement(Navbar_1["default"], null),
            react_1["default"].createElement("main", { className: "w-full " },
                react_1["default"].createElement(TopLayout_1["default"], { heroTitle: "About Us", subtitle: "Home", currentTitle: "About Us" }),
                react_1["default"].createElement("div", { className: "max-w-7xl w-full mx-auto py-4 px-4 sm:px-6 lg:px-4" },
                    react_1["default"].createElement(Profile_1["default"], null)),
                react_1["default"].createElement("div", { className: "w-full mx-auto py-4 bg-[var(--label-fg)] px-4 sm:px-6 lg:px-8" },
                    react_1["default"].createElement(Company_1["default"], null)),
                react_1["default"].createElement("div", { className: "max-w-7xl w-full mx-auto py-4 px-4 sm:px-6 lg:px-8" },
                    react_1["default"].createElement(Value_1["default"], null))),
            react_1["default"].createElement(Footer_1["default"], null))));
};
exports["default"] = page;
