'use client';
"use strict";
exports.__esModule = true;
exports.NavigationLoaderProvider = exports.useNavigate = void 0;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var Loader_1 = require("../ui/loader/Loader");
var NavigationContext = react_1.createContext({
    navigate: function () { }
});
function useNavigate() {
    return react_1.useContext(NavigationContext);
}
exports.useNavigate = useNavigate;
function NavigationLoaderProvider(_a) {
    var children = _a.children;
    var router = navigation_1.useRouter();
    var pathname = navigation_1.usePathname();
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var pendingHref = react_1.useRef(null);
    var isFirstRender = react_1.useRef(true);
    // Hide loader when the pathname actually changes (route resolved)
    react_1.useEffect(function () {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        // Only stop loading if the resolved path matches what we navigated to
        if (pendingHref.current === pathname || pendingHref.current === null) {
            setIsLoading(false);
            pendingHref.current = null;
        }
    }, [pathname]);
    // Safety valve: never leave the loader on-screen for more than 4 seconds
    react_1.useEffect(function () {
        if (!isLoading)
            return;
        var id = setTimeout(function () {
            setIsLoading(false);
            pendingHref.current = null;
        }, 4000);
        return function () { return clearTimeout(id); };
    }, [isLoading]);
    var navigate = react_1.useCallback(function (href) {
        // Don't re-navigate to current page
        if (href === pathname)
            return;
        // Don't stack multiple navigations
        if (pendingHref.current !== null)
            return;
        pendingHref.current = href;
        setIsLoading(true);
        router.push(href);
    }, [router, pathname]);
    return (React.createElement(NavigationContext.Provider, { value: { navigate: navigate } },
        React.createElement(Loader_1["default"], { isLoading: isLoading, text: "Loading..." }),
        children));
}
exports.NavigationLoaderProvider = NavigationLoaderProvider;
