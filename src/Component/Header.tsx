import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Contact", href: "contact" },
  ];

  const socialLinks = [
    { icon: <SiGithub />, href: "https://github.com/Nivesh26" },
    { icon: <SiLinkedin />, href: "https://www.linkedin.com/in/nivesh-shrestha-6318b8282/" },
    { icon: <SiInstagram />, href: "https://instagram.com/who_is_niv " },
  ];

  return (
    <header className="fixed w-full top-0 bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo that scrolls to Home */}
        <h1 className="text-2xl font-bold text-gray-800 cursor-pointer">
          <Link
            to="home"
            smooth={true}
            duration={600}
            offset={-70}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            Nivesh<span className="text-blue-500"></span>
          </Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              smooth={true}
              duration={600}
              offset={-70}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-8 flex flex-col items-center space-y-6 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            to={link.href}
            smooth={true}
            duration={600}
            offset={-70}
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium cursor-pointer hover:text-blue-500 transition"
          >
            {link.name}
          </Link>
        ))}

        <div className="flex space-x-6 mt-4">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-500 transition text-2xl"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
