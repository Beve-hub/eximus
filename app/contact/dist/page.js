"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var md_1 = require("react-icons/md");
var io5_1 = require("react-icons/io5");
var Navbar_1 = require("@/component/layout/Navbar");
var Footer_1 = require("@/component/layout/Footer");
var TopLayout_1 = require("@/component/layout/TopLayout");
var Button_1 = require("@/component/ui/button/Button");
// ─── Data ─────────────────────────────────────────────────
var CONTACT_CHANNELS = [
    {
        label: "Email",
        value: "hello@verdant.co",
        href: "mailto:hello@verdant.co",
        icon: React.createElement(md_1.MdEmail, { size: 16, className: "text-emerald-600" })
    },
    {
        label: "Phone",
        value: "+1 (234) 567-890",
        href: "tel:+1234567890",
        icon: React.createElement(md_1.MdPhone, { size: 16, className: "text-emerald-600" })
    },
    {
        label: "WhatsApp",
        value: "Chat with us",
        href: "https://wa.me/1234567890",
        isExternal: true,
        icon: React.createElement(io5_1.IoLogoWhatsapp, { size: 16, className: "text-emerald-600" })
    },
];
function ContactForm() {
    var _a = react_1.useState({
        fullname: "",
        email: "",
        subject: "",
        message: ""
    }), form = _a[0], setForm = _a[1];
    var _b = react_1.useState(false), submitted = _b[0], setSubmitted = _b[1];
    var router = navigation_1.useRouter();
    var handleChange = function (e) {
        setForm(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[e.target.id] = e.target.value, _a)));
        });
    };
    var handleSubmit = function () {
        if (!form.fullname || !form.email || !form.message)
            return;
        // TODO: wire up real submission (e.g. fetch("/api/contact", ...))
        setSubmitted(true);
    };
    if (submitted) {
        return (React.createElement("div", { className: "flex flex-col items-center justify-center text-center py-12 gap-4" },
            React.createElement(io5_1.IoCheckmarkCircle, { size: 56, className: "text-emerald-500" }),
            React.createElement("h4", { className: "text-xl font-semibold text-gray-900" }, "Message sent!"),
            React.createElement("p", { className: "text-sm text-gray-500 max-w-xs" }, "Thanks for reaching out. We\u2018ll get back to you as soon as possible."),
            React.createElement("button", { onClick: function () {
                    setSubmitted(false);
                    setForm({ fullname: "", email: "", subject: "", message: "" });
                }, className: "mt-2 text-sm text-emerald-600 hover:underline" }, "Send another message")));
    }
    var inputClass = "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-100 transition";
    return (React.createElement("div", { className: "space-y-4" },
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "fullname", className: "block text-sm font-medium text-gray-700 mb-1" }, "Full Name"),
            React.createElement("input", { type: "text", id: "fullname", value: form.fullname, onChange: handleChange, className: inputClass, placeholder: "John Doe" })),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-1" }, "Email Address"),
            React.createElement("input", { type: "email", id: "email", value: form.email, onChange: handleChange, className: inputClass, placeholder: "john@example.com" })),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "subject", className: "block text-sm font-medium text-gray-700 mb-1" }, "Subject"),
            React.createElement("input", { type: "text", id: "subject", value: form.subject, onChange: handleChange, className: inputClass, placeholder: "How can we help?" })),
        React.createElement("div", null,
            React.createElement("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-1" }, "Message"),
            React.createElement("textarea", { id: "message", rows: 5, value: form.message, onChange: handleChange, className: inputClass, placeholder: "Write your message here..." })),
        React.createElement(Button_1["default"], { title: " Send Message", className: "w-full bg-[var(--background)] hover:bg-green-700 text-white", onClick: handleSubmit })));
}
// ─── Page ─────────────────────────────────────────────────
function ContactPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Navbar_1["default"], null),
        React.createElement("main", { className: "" },
            React.createElement(TopLayout_1["default"], { heroTitle: "Contact Us", subtitle: "Home", currentTitle: "Contact" }),
            React.createElement("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20" },
                React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-8" },
                    React.createElement("div", { className: "lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-8" },
                        React.createElement("h3", { className: "text-xl font-bold text-gray-900 mb-1" }, "Send us a message"),
                        React.createElement("p", { className: "text-sm text-gray-500 mb-7" }, "Have a question, complaint, or need help? Feel free to reach out."),
                        React.createElement(ContactForm, null)),
                    React.createElement("div", { className: "lg:col-span-2 flex flex-col gap-6" },
                        React.createElement("div", { className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-8" },
                            React.createElement("p", { className: "text-sm font-medium text-emerald-600 mb-5 uppercase tracking-wide" }, "Get in touch"),
                            React.createElement("ul", { className: "space-y-5" }, CONTACT_CHANNELS.map(function (ch) { return (React.createElement("li", { key: ch.label, className: "flex items-start gap-4" },
                                React.createElement("div", { className: "h-9 w-9 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0" }, ch.icon),
                                React.createElement("div", null,
                                    React.createElement("p", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5" }, ch.label),
                                    React.createElement("a", { href: ch.href, target: ch.isExternal ? "_blank" : undefined, rel: ch.isExternal ? "noreferrer" : undefined, className: "text-sm font-medium text-gray-800 hover:text-emerald-600 transition-colors" }, ch.value)))); }))),
                        React.createElement("div", { className: "bg-gray-900 rounded-2xl p-8" },
                            React.createElement("h3", { className: "text-white font-bold text-base mb-2" }, "Stay Connected"),
                            React.createElement("p", { className: "text-gray-400 text-sm mb-5" }, "Follow us for updates and news.")))))),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = ContactPage;
