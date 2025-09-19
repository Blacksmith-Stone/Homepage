import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaGithub />, href: "#" },
    { icon: <FaEnvelope />, href: "mailto:kamienkowala@gmail.com" },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center">
        {/* Social icons */}
        <div className="flex space-x-4 mb-4">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-white hover:bg-[#00df9a] hover:text-black transition"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © 2023 Blacksmith Stone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
