import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import {
  CodeBracketIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#projects" },
    { name: "Services", href: "#services" },
  ];

  const services = [
    { icon: <CodeBracketIcon className="w-5 h-5" />, name: "Web Development" },
    {
      icon: <DevicePhoneMobileIcon className="w-5 h-5" />,
      name: "Mobile Apps",
    },
    { icon: <PaintBrushIcon className="w-5 h-5" />, name: "UI/UX Design" },
    { icon: <ServerIcon className="w-5 h-5" />, name: "Backend Solutions" },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: "hello@blacksmithstone.com",
      href: "mailto:hello@blacksmithstone.com",
    },
    { icon: <FaPhone />, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: <FaMapMarkerAlt />, text: "San Francisco, CA", href: "#" },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 223, 154, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 223, 154, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Stay <span className="text-[#00df9a]">Updated</span>
                  </h3>
                  <p className="text-gray-400">
                    Get the latest updates on web technologies and our projects
                  </p>
                </div>
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-[#00df9a] transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#00df9a] text-black font-semibold rounded-lg hover:bg-[#00c886] transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Subscribe
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
              {isSubscribed && (
                <div className="mt-4 text-[#00df9a] text-sm animate-fade-in-up">
                  ✓ Thank you for subscribing!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Company Info */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  <span className="text-[#00df9a]">BSS</span>.
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Forging digital excellence through innovative web solutions.
                  We transform ideas into powerful digital experiences.
                </p>
                {/* Social Links */}
                <div className="flex gap-3 pt-4">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:bg-[#00df9a] hover:text-black hover:border-[#00df9a] transition-all duration-300 hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#00df9a] transition-colors duration-200 text-sm flex items-center gap-2 group"
                      >
                        <span className="text-[#00df9a] opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Our Services
                </h3>
                <ul className="space-y-3">
                  {services.map((service, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-400 text-sm group cursor-pointer"
                    >
                      <span className="text-[#00df9a] group-hover:scale-110 transition-transform">
                        {service.icon}
                      </span>
                      <span className="group-hover:text-[#00df9a] transition-colors">
                        {service.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Get in Touch
                </h3>
                <ul className="space-y-3">
                  {contactInfo.map((info, idx) => (
                    <li key={idx}>
                      <a
                        href={info.href}
                        className="flex items-center gap-3 text-gray-400 text-sm hover:text-[#00df9a] transition-colors group"
                      >
                        <span className="text-[#00df9a] group-hover:scale-110 transition-transform">
                          {info.icon}
                        </span>
                        <span>{info.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear} Blacksmith Stone. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a
                  href="#privacy"
                  className="text-gray-500 hover:text-[#00df9a] transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="text-gray-700">•</span>
                <a
                  href="#terms"
                  className="text-gray-500 hover:text-[#00df9a] transition-colors"
                >
                  Terms of Service
                </a>
                <span className="text-gray-700">•</span>
                <a
                  href="#cookies"
                  className="text-gray-500 hover:text-[#00df9a] transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated gradient line at the very bottom */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#00df9a] to-transparent animate-gradient" />
    </footer>
  );
};

export default Footer;
