import { FaGithub, FaLinkedin, FaMediumM, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { type IconType } from "react-icons";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
  size?: number;
};

export type NavLink = {
  label: string;
  href: string;
};



export const navLinks: NavLink[] = [
  { label: "Blog",     href: "/blog"     },
  { label: "Projects", href: "/projects" },
  { label: "Contact",  href: "/contact"  },
];

export const connectLinks: NavLink[] = [
  { label: "Gmail", href: "mailto:victorokeke23@gmail.com" },
  { label: "GitHub",             href: "https://github.com/Beve-hub"        },
  { label: "LinkedIn",           href: "https://www.linkedin.com/in/victor-okeke-66a576218/"      },
];