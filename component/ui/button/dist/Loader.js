'use client';
"use strict";
exports.__esModule = true;
var fa_1 = require("react-icons/fa");
var react_1 = require("react");
function Loader(_a) {
    var isLoading = _a.isLoading, _b = _a.size, size = _b === void 0 ? 80 : _b, _c = _a.text, text = _c === void 0 ? 'Loading...' : _c;
    var _d = react_1.useState(isLoading), visible = _d[0], setVisible = _d[1];
    var timerRef = react_1.useRef(null);
    react_1.useEffect(function () {
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        if (!isLoading) {
            timerRef.current = setTimeout(function () { return setVisible(false); }, 300);
        }
        return function () {
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
            }
        };
    }, [isLoading]);
    var show = isLoading || visible;
    if (!show)
        return null;
    return (React.createElement(React.Fragment, null,
        React.createElement("style", null, "\n        @keyframes spin-slow {\n          from { transform: rotate(0deg); }\n          to   { transform: rotate(360deg); }\n        }\n        .gear-spin {\n          animation: spin-slow 1.5s linear infinite;\n        }\n      "),
        React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-green-600/95 backdrop-blur-sm transition-opacity duration-300", role: "status", "aria-live": "polite", "aria-label": text },
            React.createElement("div", { className: "flex flex-col items-center gap-6 text-white" },
                React.createElement("div", { className: "gear-spin", style: { width: size, height: size } },
                    React.createElement(fa_1.FaCog, { size: size, className: "text-white drop-shadow-lg" })),
                text && (React.createElement("p", { className: "text-lg font-medium tracking-wider text-white/90" }, text))))));
}
exports["default"] = Loader;
