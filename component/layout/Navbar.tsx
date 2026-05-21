"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { MdMenu, MdOutlineCancel } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Logo1 from "../../public/assests/Logo.png";
import Button from "../ui/button/Button";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
      children: [
        { name: "What we do", path: "/services/action" },
        { name: "Core Capabilities", path: "/services/capability" },
        { name: "Gas Commercialization", path: "/services/commercialization" },
        { name: "Strategic Advantages", path: "/services/advantages" },
      ],
    },
    { name: "Solutions", path: "/solutions" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => (pathname === path ? "font-semibold" : "");

  const activeStyle = (path: string): React.CSSProperties =>
    pathname === path
      ? { color: "var(--background)" }
      : { color: "var(--input-bg)" };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[var(--label-fg)]/50"
          : "bg-[var(--color-background)]"
      }`}
      style={{ color: "var(--input-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold hover:text-blue-400 transition"
          >
            <Image src={Logo1} alt="Logo" className="h-auto w-40" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 mx-auto">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.path} className="relative group">
                  {/* Trigger */}
                  <button className="flex items-center gap-1.5 text-[15px] font-medium transition-colors">
                    <Link
                      href={link.path}
                      style={activeStyle(link.path)}
                      className={`transition ${isActive(link.path)}`}
                    >
                      {link.name}
                    </Link>
                    <IoIosArrowDown className="h-4 w-4 text-[var(--input-bg)] transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* Professional Dropdown */}
                  <div
                    className="absolute left-0 mt-3 w-56 opacity-0 invisible 
                               group-hover:opacity-100 group-hover:visible
                               transition-all duration-300 ease-out
                               translate-y-2 group-hover:translate-y-0
                               bg-white shadow-xl rounded-2xl py-2 border border-gray-100"
                  >
                    <div className="flex flex-col">
                      {link.children.map((child, index) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          className="px-6 py-[14px] text-[15px] text-gray-700 
                                     hover:bg-gray-50 hover:text-[var(--accent)]
                                     transition-all duration-200 flex items-center gap-2
                                     relative group/item"
                        >
                          <span className="transition-transform duration-200 group-hover/item:translate-x-1">
                            {child.name}
                          </span>
                          {/* Subtle accent line on hover */}
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-[var(--accent)] group-hover/item:w-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  style={activeStyle(link.path)}
                  className={`text-[15px] font-medium transition ${isActive(link.path)}`}
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button
              title="GET IN TOUCH"
              className="bg-red hover:bg-red text-white"
              onClick={() => router.push("/contact")}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="p-2 rounded-xl transition"
              style={{ color: "var(--background)" }}
            >
              {menuOpen ? (
                <MdOutlineCancel className="h-6 w-6" />
              ) : (
                <MdMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-6 flex flex-col gap-4 pb-6 border-t border-gray-200 pt-6">
            {navLinks.map((link) => (
              <div key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex justify-between items-center py-3 text-[15px] font-medium ${isActive(link.path)}`}
                >
                  {link.name}
                  <IoIosArrowForward className="h-4 w-4" />
                </Link>

                {link.children && (
                  <div className="ml-4 mt-1 flex flex-col gap-3 border-l border-gray-200 pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        onClick={() => setMenuOpen(false)}
                        className="text-sm py-2 text-gray-600 hover:text-[var(--accent)] transition"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Button
              title="GET IN TOUCH"
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => router.push("/contact")}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
