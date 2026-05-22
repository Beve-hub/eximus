"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var md_1 = require("react-icons/md");
var io_1 = require("react-icons/io");
var image_1 = require("next/image");
var Logo_png_1 = require("../../public/assests/Logo.png");
var fa6_1 = require("react-icons/fa6");
var Button_1 = require("../ui/button/Button");
var NavigationLoader_1 = require("../context/NavigationLoader");
var Navbar = function () {
    var pathname = navigation_1.usePathname();
    var navigate = NavigationLoader_1.useNavigate().navigate;
    var _a = react_1.useState(false), menuOpen = _a[0], setMenuOpen = _a[1];
    var _b = react_1.useState(false), scrolled = _b[0], setScrolled = _b[1];
    var _c = react_1.useState(null), openDropdown = _c[0], setOpenDropdown = _c[1];
    react_1.useEffect(function () {
        var ticking = false;
        var handleScroll = function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    setScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    react_1.useEffect(function () {
        react_1.startTransition(function () {
            setMenuOpen(false);
            setOpenDropdown(null);
        });
    }, [pathname]);
    react_1.useEffect(function () {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return function () {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);
    var navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        {
            name: "Services",
            path: "/services",
            children: [
                { name: "What we do", path: "/services/action" },
                { name: "Core Capabilities", path: "/services/capability" },
                { name: "Gas Commercialization", path: "/services/commerce" },
                { name: "Strategic Advantages", path: "/services/strategy" },
            ]
        },
        { name: "Contact", path: "/contact" },
    ];
    var isActive = function (path) { return pathname === path; };
    var handleNav = function (path) {
        setMenuOpen(false);
        setOpenDropdown(null);
        navigate(path);
    };
    var toggleDropdown = function (name) {
        setOpenDropdown(function (prev) { return (prev === name ? null : name); });
    };
    return (React.createElement("nav", { className: "sticky top-0 z-50 " },
        React.createElement("div", { className: "\n          hidden md:block\n          bg-gray-100 border-b\n          transition-[max-height,opacity,padding] duration-300 ease-in-out\n          overflow-hidden\n          " + (scrolled ? "max-h-0 opacity-0 pointer-events-none" : "max-h-16 opacity-100") + "\n        " },
            React.createElement("div", { className: "max-w-6xl mx-auto px-6 py-2.5 flex justify-between items-center text-sm" },
                React.createElement("div", { className: "flex items-center gap-6 text-black" },
                    React.createElement("p", { className: "flex items-center gap-2 text-base" },
                        React.createElement("span", { className: "text-red-700" },
                            React.createElement(io_1.IoIosCall, null)),
                        "+234 803 000 0000"),
                    React.createElement("p", { className: "flex items-center gap-2 text-sm" },
                        React.createElement("span", { className: "text-red-700" },
                            React.createElement(md_1.MdOutlineMailOutline, null)),
                        "info@yourcompany.com")),
                React.createElement("div", { className: "flex items-center gap-3" },
                    React.createElement("div", { className: "text-red-700 text-xl" },
                        React.createElement(fa6_1.FaLocationDot, null)),
                    React.createElement("div", null,
                        React.createElement("p", { className: "font-medium text-gray-900 text-sm" }, "Lagos, Nigeria"),
                        React.createElement("p", { className: "text-xs text-gray-500" }, "12 Admiralty Way, Lekki Phase 1"))))),
        React.createElement("div", { className: "\n          hidden md:block\n          border-b bg-white\n          transition-[max-height,opacity] duration-300 ease-in-out\n          overflow-hidden\n          " + (scrolled ? "max-h-0 opacity-0 pointer-events-none" : "max-h-30 opacity-100") + "\n        " },
            React.createElement("div", { className: "max-w-6xl mx-auto px-6 mb-4 flex justify-between items-center" },
                React.createElement("button", { onClick: function () { return handleNav("/"); }, className: "flex items-center gap-2 hover:opacity-80 transition-opacity", "aria-label": "Navigate to Home" },
                    React.createElement(image_1["default"], { src: Logo_png_1["default"], alt: "Logo", className: "h-auto w-50", priority: true })),
                React.createElement(Button_1["default"], { title: "GET IN TOUCH", className: "bg-green-600 hover:bg-green-700 text-white font-semibold tracking-wide", onClick: function () { return handleNav("/contact"); } }))),
        React.createElement("div", { className: "\n          transition-all duration-300 ease-in-out\n          " + (scrolled ? "bg-white shadow-lg border-b border-gray-200" : "bg-green-600") + "\n        " },
            React.createElement("div", { className: "max-w-6xl mx-auto px-4 md:px-6" },
                React.createElement("div", { className: "flex justify-between items-center h-16 md:h-14" },
                    React.createElement("button", { onClick: function () { return handleNav("/"); }, "aria-label": "Navigate to Home", className: "\n                flex items-center\n                transition-all duration-300\n                md:hidden\n              " },
                        React.createElement(image_1["default"], { src: Logo_png_1["default"], alt: "Logo", className: "h-auto w-40", priority: true })),
                    React.createElement("button", { onClick: function () { return handleNav("/"); }, "aria-label": "Navigate to Home", className: "\n                hidden md:flex items-center\n                transition-all duration-300 ease-in-out\n                overflow-hidden\n                " + (scrolled ? "max-w-[160px] opacity-100 mr-8" : "max-w-0 opacity-0 pointer-events-none mr-0") + "\n              " },
                        React.createElement(image_1["default"], { src: Logo_png_1["default"], alt: "Logo", className: "h-auto w-36 min-w-[144px]", priority: true })),
                    React.createElement("div", { className: "hidden md:flex items-center gap-8 mx-auto" }, navLinks.map(function (link) {
                        return link.children ? (React.createElement("div", { key: link.path, className: "relative group" },
                            React.createElement("button", { className: "flex items-center gap-1.5 transition-colors " + (scrolled ? "text-gray-700 hover:text-green-700" : "text-white/90 hover:text-white") },
                                React.createElement("span", { onClick: function () { return handleNav(link.path); }, className: "\n                          cursor-pointer text-[17px] font-semibold tracking-wide\n                          " + (isActive(link.path)
                                        ? scrolled
                                            ? "text-green-700 underline underline-offset-4 decoration-2"
                                            : "text-white underline underline-offset-4 decoration-2"
                                        : "") + "\n                        " }, link.name),
                                React.createElement(io_1.IoIosArrowDown, { className: "h-4 w-4 transition-transform duration-300 group-hover:rotate-180 mt-0.5 " + (scrolled ? "text-gray-700" : "text-white/90") })),
                            React.createElement("div", { className: "\n                      absolute left-0 mt-4 w-60\n                      opacity-0 invisible pointer-events-none\n                      group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto\n                      transition-all duration-200 ease-out\n                      translate-y-1 group-hover:translate-y-0\n                      bg-white shadow-2xl rounded-xl py-2\n                      border border-gray-100 z-50\n                    " },
                                React.createElement("div", { className: "absolute -top-2 left-6 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100 rounded-sm" }),
                                link.children.map(function (child) { return (React.createElement("button", { key: child.path, onClick: function () { return handleNav(child.path); }, className: "\n                            block w-full px-5 py-3 text-left text-[14px] font-medium\n                            transition-colors duration-150\n                            hover:bg-green-50 hover:text-green-700\n                            " + (isActive(child.path) ? "text-green-700 bg-green-50 font-semibold" : "text-gray-700") + "\n                          " }, child.name)); })))) : (React.createElement("button", { key: link.path, onClick: function () { return handleNav(link.path); }, className: "\n                      text-[17px] font-semibold tracking-wide transition-colors\n                      " + (isActive(link.path)
                                ? scrolled
                                    ? "text-green-700 underline underline-offset-4 decoration-2"
                                    : "text-white underline underline-offset-4 decoration-2"
                                : scrolled
                                    ? "text-gray-700 hover:text-green-700"
                                    : "text-white/90 hover:text-white") + "\n                    " }, link.name));
                    })),
                    React.createElement("div", { className: "\n                hidden md:flex items-center\n                transition-all duration-300 ease-in-out\n                overflow-hidden\n                " + (scrolled ? " opacity-100" : " opacity-0 pointer-events-none ") + "\n              " },
                        React.createElement(Button_1["default"], { title: "GET IN TOUCH", className: " bg-green-600 hover:bg-green-700 text-white font-semibold tracking-wide", onClick: function () { return handleNav("/contact"); } })),
                    React.createElement("div", { className: "flex items-center gap-3 md:hidden" },
                        React.createElement(Button_1["default"], { title: "GET IN TOUCH", className: "text-xs font-bold px-3 py-1.5 rounded-md transition-colors " + (scrolled ? "bg-green-600 text-white hover:bg-green-700" : "bg-white text-green-700 hover:bg-green-50"), onClick: function () { return handleNav("/contact"); } }),
                        React.createElement("button", { onClick: function () { return setMenuOpen(!menuOpen); }, className: "p-1.5 rounded-md transition-colors " + (scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/20"), "aria-label": menuOpen ? "Close menu" : "Open menu" }, menuOpen ? (React.createElement(md_1.MdOutlineCancel, { size: 26 })) : (React.createElement(md_1.MdMenu, { size: 26 }))))))),
        React.createElement("div", { className: "\n          md:hidden fixed inset-x-0 top-[64px] bottom-0\n          bg-white z-40 overflow-y-auto\n          transition-all duration-300 ease-in-out\n          " + (menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none") + "\n        " },
            React.createElement("div", { className: "max-w-6xl mx-auto px-5 py-6 flex flex-col gap-1" },
                navLinks.map(function (link) { return (React.createElement("div", { key: link.path },
                    React.createElement("button", { onClick: function () {
                            return link.children
                                ? toggleDropdown(link.name)
                                : handleNav(link.path);
                        }, className: "\n                  w-full flex justify-between items-center px-2 py-4\n                  text-[17px] font-semibold border-b border-gray-100\n                  transition-colors\n                  " + (isActive(link.path) ? "text-green-700" : "text-gray-800 hover:text-green-700") + "\n                " },
                        link.name,
                        link.children && (React.createElement(io_1.IoIosArrowDown, { className: "transition-transform duration-300 " + (openDropdown === link.name ? "rotate-180 text-green-600" : "") }))),
                    link.children && (React.createElement("div", { className: "\n                    overflow-hidden transition-all duration-300 ease-in-out\n                    " + (openDropdown === link.name ? "max-h-64 opacity-100" : "max-h-0 opacity-0") + "\n                  " },
                        React.createElement("div", { className: "ml-4 my-2 flex flex-col border-l-2 border-green-500 pl-4 gap-1" }, link.children.map(function (child) { return (React.createElement("button", { key: child.path, onClick: function () { return handleNav(child.path); }, className: "\n                          text-left py-2.5 text-[15px] transition-colors\n                          " + (isActive(child.path)
                                ? "text-green-700 font-semibold"
                                : "text-gray-600 hover:text-green-700") + "\n                        " }, child.name)); })))))); }),
                React.createElement("div", { className: "mt-6 pt-6 border-t border-gray-100 flex flex-col gap-3" },
                    React.createElement("p", { className: "flex items-center gap-2 text-sm text-gray-600" },
                        React.createElement("span", { className: "text-red-600" },
                            React.createElement(io_1.IoIosCall, null)),
                        "+234 803 000 0000"),
                    React.createElement("p", { className: "flex items-center gap-2 text-sm text-gray-600" },
                        React.createElement("span", { className: "text-red-600" },
                            React.createElement(md_1.MdOutlineMailOutline, null)),
                        "info@yourcompany.com"),
                    React.createElement("p", { className: "flex items-center gap-2 text-sm text-gray-600" },
                        React.createElement("span", { className: "text-red-600" },
                            React.createElement(fa6_1.FaLocationDot, null)),
                        "12 Admiralty Way, Lekki Phase 1"))))));
};
exports["default"] = Navbar;
