"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var NavigationLoader_1 = require("@/component/context/NavigationLoader");
var geistSans = google_1.Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});
var geistMono = google_1.Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});
exports.metadata = {
    title: "Eximus",
    description: "Eximus energy is a Nigerian-focused integrated energy and EPCM company..."
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en", className: geistSans.variable + " " + geistMono.variable + " h-full antialiased" },
        React.createElement("body", { className: "min-h-full flex flex-col" },
            React.createElement(NavigationLoader_1.NavigationLoaderProvider, null, children))));
}
exports["default"] = RootLayout;
