"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, startTransition } from "react";
import { MdMenu, MdOutlineCancel, MdOutlineMailOutline } from "react-icons/md";
import { IoIosArrowDown, IoIosCall } from "react-icons/io";
import Image from "next/image";
import Logo1 from "../../public/assests/Logo.png";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../ui/button/Button";
import { useNavigate } from "../context/NavigationLoader";

const Navbar = () => {
  const pathname = usePathname();
  const { navigate } = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setMenuOpen(false);
      setOpenDropdown(null);
    });
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
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
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  const handleNav = (path: string) => {
    setMenuOpen(false);
    setOpenDropdown(null);
    navigate(path);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <nav className="sticky top-0 z-50 ">
      {/* ==================== TOP BAR (Layer 1) — desktop only ==================== */}
      <div
        className={`
          hidden md:block
          bg-gray-100 border-b
          transition-[max-height,opacity,padding] duration-300 ease-in-out
          overflow-hidden
          ${scrolled ? "max-h-0 opacity-0 pointer-events-none" : "max-h-16 opacity-100"}
        `}
      >
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-black">
            <p className="flex items-center gap-2 text-base">
              <span className="text-red-700">
                <IoIosCall />
              </span>
              +234 803 000 0000
            </p>
            <p className="flex items-center gap-2 text-sm">
              <span className="text-red-700">
                <MdOutlineMailOutline />
              </span>
              info@yourcompany.com
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-red-700 text-xl">
              <FaLocationDot />
            </div>
            <div>
              <p className="font-medium text-gray-900 text-sm">
                Lagos, Nigeria
              </p>
              <p className="text-xs text-gray-500">
                12 Admiralty Way, Lekki Phase 1
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== MIDDLE BAR (Layer 2) — desktop only ==================== */}
      <div
        className={`
          hidden md:block
          border-b bg-white
          transition-[max-height,opacity] duration-300 ease-in-out
          overflow-hidden
          ${scrolled ? "max-h-0 opacity-0 pointer-events-none" : "max-h-30 opacity-100"}
        `}
      >
        <div className="max-w-6xl mx-auto px-6 mb-4 flex justify-between items-center">
          <button
            onClick={() => handleNav("/")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Navigate to Home"
          >
            <Image src={Logo1} alt="Logo" className="h-auto w-50" priority />
          </button>

          <Button
            title="GET IN TOUCH"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold tracking-wide"
            onClick={() => handleNav("/contact")}
          />
        </div>
      </div>

      {/* ==================== LAYER 3 — always visible ==================== */}
      <div
        className={`
          transition-all duration-300 ease-in-out
          ${scrolled ? "bg-white shadow-lg border-b border-gray-200" : "bg-green-600"}
        `}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-16 md:h-14">
            {/* Logo — always visible on mobile; on desktop only when scrolled */}
            <button
              onClick={() => handleNav("/")}
              aria-label="Navigate to Home"
              className={`
                flex items-center
                transition-all duration-300
                md:hidden
              `}
            >
              <Image src={Logo1} alt="Logo" className="h-auto w-40" priority />
            </button>

            {/* Logo — desktop, scrolled only */}
            <button
              onClick={() => handleNav("/")}
              aria-label="Navigate to Home"
              className={`
                hidden md:flex items-center
                transition-all duration-300 ease-in-out
                overflow-hidden
                ${scrolled ? "max-w-[160px] opacity-100 mr-8" : "max-w-0 opacity-0 pointer-events-none mr-0"}
              `}
            >
              <Image
                src={Logo1}
                alt="Logo"
                className="h-auto w-36 min-w-[144px]"
                priority
              />
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8 mx-auto">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.path} className="relative group">
                    <button
                      className={`flex items-center gap-1.5 transition-colors ${scrolled ? "text-gray-700 hover:text-green-700" : "text-white/90 hover:text-white"}`}
                    >
                      <span
                        onClick={() => handleNav(link.path)}
                        className={`
                          cursor-pointer text-[17px] font-semibold tracking-wide
                          ${
                            isActive(link.path)
                              ? scrolled
                                ? "text-green-700 underline underline-offset-4 decoration-2"
                                : "text-white underline underline-offset-4 decoration-2"
                              : ""
                          }
                        `}
                      >
                        {link.name}
                      </span>
                      <IoIosArrowDown
                        className={`h-4 w-4 transition-transform duration-300 group-hover:rotate-180 mt-0.5 ${scrolled ? "text-gray-700" : "text-white/90"}`}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      className="
                      absolute left-0 mt-4 w-60
                      opacity-0 invisible pointer-events-none
                      group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
                      transition-all duration-200 ease-out
                      translate-y-1 group-hover:translate-y-0
                      bg-white shadow-2xl rounded-xl py-2
                      border border-gray-100 z-50
                    "
                    >
                      {/* Arrow pointer */}
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100 rounded-sm" />
                      {link.children.map((child) => (
                        <button
                          key={child.path}
                          onClick={() => handleNav(child.path)}
                          className={`
                            block w-full px-5 py-3 text-left text-[14px] font-medium
                            transition-colors duration-150
                            hover:bg-green-50 hover:text-green-700
                            ${isActive(child.path) ? "text-green-700 bg-green-50 font-semibold" : "text-gray-700"}
                          `}
                        >
                          {child.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    key={link.path}
                    onClick={() => handleNav(link.path)}
                    className={`
                      text-[17px] font-semibold tracking-wide transition-colors
                      ${
                        isActive(link.path)
                          ? scrolled
                            ? "text-green-700 underline underline-offset-4 decoration-2"
                            : "text-white underline underline-offset-4 decoration-2"
                          : scrolled
                            ? "text-gray-700 hover:text-green-700"
                            : "text-white/90 hover:text-white"
                      }
                    `}
                  >
                    {link.name}
                  </button>
                ),
              )}
            </div>

            <div className={`
                hidden md:flex items-center
                transition-all duration-300 ease-in-out
                overflow-hidden
                ${scrolled ? " opacity-100" : " opacity-0 pointer-events-none "}
              `}>
              <Button
                title="GET IN TOUCH"
                className=" bg-green-600 hover:bg-green-700 text-white font-semibold tracking-wide"
                onClick={() => handleNav("/contact")}
              />
            </div>

            {/* Mobile: GET IN TOUCH + Hamburger */}
            <div className="flex items-center gap-3 md:hidden">
              <Button
                title="GET IN TOUCH"
                className={`text-xs font-bold px-3 py-1.5 rounded-md transition-colors ${scrolled ? "bg-green-600 text-white hover:bg-green-700" : "bg-white text-green-700 hover:bg-green-50"}`}
                onClick={() => handleNav("/contact")}
              />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-1.5 rounded-md transition-colors ${scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/20"}`}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? (
                  <MdOutlineCancel size={26} />
                ) : (
                  <MdMenu size={26} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== MOBILE MENU ==================== */}
      <div
        className={`
          md:hidden fixed inset-x-0 top-[64px] bottom-0
          bg-white z-40 overflow-y-auto
          transition-all duration-300 ease-in-out
          ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}
        `}
      >
        <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.path}>
              <button
                onClick={() =>
                  link.children
                    ? toggleDropdown(link.name)
                    : handleNav(link.path)
                }
                className={`
                  w-full flex justify-between items-center px-2 py-4
                  text-[17px] font-semibold border-b border-gray-100
                  transition-colors
                  ${isActive(link.path) ? "text-green-700" : "text-gray-800 hover:text-green-700"}
                `}
              >
                {link.name}
                {link.children && (
                  <IoIosArrowDown
                    className={`transition-transform duration-300 ${openDropdown === link.name ? "rotate-180 text-green-600" : ""}`}
                  />
                )}
              </button>

              {link.children && (
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${openDropdown === link.name ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="ml-4 my-2 flex flex-col border-l-2 border-green-500 pl-4 gap-1">
                    {link.children.map((child) => (
                      <button
                        key={child.path}
                        onClick={() => handleNav(child.path)}
                        className={`
                          text-left py-2.5 text-[15px] transition-colors
                          ${
                            isActive(child.path)
                              ? "text-green-700 font-semibold"
                              : "text-gray-600 hover:text-green-700"
                          }
                        `}
                      >
                        {child.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Contact info in mobile menu */}
          <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-3">
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-red-600">
                <IoIosCall />
              </span>
              +234 803 000 0000
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-red-600">
                <MdOutlineMailOutline />
              </span>
              info@yourcompany.com
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-red-600">
                <FaLocationDot />
              </span>
              12 Admiralty Way, Lekki Phase 1
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
