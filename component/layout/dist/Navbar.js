'use client';
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var md_1 = require("react-icons/md");
var io_1 = require("react-icons/io");
var image_1 = require("next/image");
var Logo_png_1 = require("../../public/assests/Logo.png");
var Button_1 = require("../ui/button/Button");
var NavigationLoader_1 = require("../context/NavigationLoader");
var Navbar = function () {
    var pathname = navigation_1.usePathname();
    var navigate = NavigationLoader_1.useNavigate().navigate;
    var _a = react_1.useState(false), menuOpen = _a[0], setMenuOpen = _a[1];
    var _b = react_1.useState(false), scrolled = _b[0], setScrolled = _b[1];
    var _c = react_1.useState(null), openDropdown = _c[0], setOpenDropdown = _c[1];
    react_1.useEffect(function () {
        var handleScroll = function () { return setScrolled(window.scrollY > 10); };
        window.addEventListener('scroll', handleScroll);
        return function () { return window.removeEventListener('scroll', handleScroll); };
    }, []);
    react_1.useEffect(function () {
        var id = setTimeout(function () {
            setMenuOpen(false);
            setOpenDropdown(null);
        }, 0);
        return function () { return clearTimeout(id); };
    }, [pathname]);
    var navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        {
            name: 'Services',
            path: '/services',
            children: [
                { name: 'What we do', path: '/services/action' },
                { name: 'Core Capabilities', path: '/services/capability' },
                { name: 'Gas Commercialization', path: '/services/commerce' },
                { name: 'Strategic Advantages', path: '/services/strategy' },
            ]
        },
        { name: 'Contact', path: '/contact' },
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
    return (React.createElement("nav", { className: "sticky top-0 z-50 transition-all duration-300 " + (scrolled
            ? 'backdrop-blur-md bg-[var(--label-fg)]/50'
            : 'bg-[var(--color-background)]'), style: { color: 'var(--input-bg)' } },
        React.createElement("div", { className: "max-w-6xl mx-auto px-4" },
            React.createElement("div", { className: "flex justify-between items-center" },
                React.createElement("button", { onClick: function () { return handleNav('/'); }, "aria-label": "Navigate to home", className: "flex items-center gap-2 text-2xl font-bold hover:text-blue-400 transition" },
                    React.createElement(image_1["default"], { src: Logo_png_1["default"], alt: "Logo", className: "h-auto w-40" })),
                React.createElement("div", { className: "hidden md:flex items-center gap-8 mx-auto" }, navLinks.map(function (link) {
                    return link.children ? (React.createElement("div", { key: link.path, className: "relative group" },
                        React.createElement("button", { className: "flex items-center gap-1.5 text-[15px] font-medium transition-colors" },
                            React.createElement("span", { onClick: function () { return handleNav(link.path); }, style: {
                                    color: isActive(link.path)
                                        ? 'var(--background)'
                                        : 'var(--input-bg)'
                                }, className: "cursor-pointer transition " + (isActive(link.path) ? 'font-semibold' : '') }, link.name),
                            React.createElement(io_1.IoIosArrowDown, { className: "h-4 w-4 text-[var(--input-bg)] transition-transform duration-300 group-hover:rotate-180" })),
                        React.createElement("div", { className: "absolute left-0 mt-3 w-56 opacity-0 invisible\n                               group-hover:opacity-100 group-hover:visible\n                               transition-all duration-300 ease-out\n                               translate-y-2 group-hover:translate-y-0\n                               bg-white shadow-xl rounded-2xl py-2 border border-gray-100\n                               z-[9998]" },
                            React.createElement("div", { className: "flex flex-col" }, link.children.map(function (child) { return (React.createElement("button", { key: child.path, onClick: function () { return handleNav(child.path); }, className: "px-6 py-[14px] text-[15px] text-gray-700\n                                     hover:bg-gray-50 hover:text-[var(--accent)]\n                                     transition-all duration-200 flex items-center gap-2\n                                     relative group/item text-left" },
                                React.createElement("span", { className: "transition-transform duration-200 group-hover/item:translate-x-1" }, child.name),
                                React.createElement("div", { className: "absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-[var(--accent)] group-hover/item:w-1 transition-all" }))); }))))) : (React.createElement("button", { key: link.path, onClick: function () { return handleNav(link.path); }, style: {
                            color: isActive(link.path)
                                ? 'var(--background)'
                                : 'var(--input-bg)'
                        }, className: "text-[15px] font-medium transition " + (isActive(link.path) ? 'font-semibold' : '') }, link.name));
                })),
                React.createElement("div", { className: "hidden md:flex" },
                    React.createElement(Button_1["default"], { title: "GET IN TOUCH", className: "bg-green-600 hover:bg-green-700 text-white", onClick: function () { return handleNav('/contact'); } })),
                React.createElement("div", { className: "flex md:hidden items-center gap-3" },
                    React.createElement("button", { "aria-label": "Toggle menu", onClick: function () { return setMenuOpen(function (prev) { return !prev; }); }, className: "p-2 rounded-xl transition", style: { color: 'var(--background)' } }, menuOpen ? (React.createElement(md_1.MdOutlineCancel, { className: "h-6 w-6" })) : (React.createElement(md_1.MdMenu, { className: "h-6 w-6" }))))),
            menuOpen && (React.createElement("div", { className: "md:hidden mt-6 flex flex-col gap-4 pb-6 border-t border-gray-200 pt-6" },
                navLinks.map(function (link) { return (React.createElement("div", { key: link.path },
                    React.createElement("button", { onClick: function () {
                            return link.children
                                ? toggleDropdown(link.name)
                                : handleNav(link.path);
                        }, className: "w-full flex justify-between items-center py-3 text-[15px] font-medium " + (isActive(link.path) ? 'font-semibold' : '') },
                        link.name,
                        link.children ? (React.createElement(io_1.IoIosArrowDown, { className: "h-4 w-4 transition-transform duration-300 " + (openDropdown === link.name ? 'rotate-180' : '') })) : (React.createElement(io_1.IoIosArrowForward, { className: "h-4 w-4" }))),
                    link.children && openDropdown === link.name && (React.createElement("div", { className: "ml-4 mt-1 flex flex-col gap-3 border-l border-gray-200 pl-4" }, link.children.map(function (child) { return (React.createElement("button", { key: child.path, onClick: function () { return handleNav(child.path); }, className: "text-sm py-2 text-gray-600 hover:text-[var(--accent)] transition text-left " + (isActive(child.path) ? 'font-semibold text-[var(--accent)]' : '') }, child.name)); }))))); }),
                React.createElement(Button_1["default"], { title: "GET IN TOUCH", className: "bg-green-600 hover:bg-green-700 text-white", onClick: function () { return handleNav('/contact'); } }))))));
};
exports["default"] = Navbar;
