import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    { icon: <SiGithub />, href: "https://github.com/Nivesh26" },
    { icon: <SiLinkedin />, href: "https://www.linkedin.com/in/nivesh-shrestha-6318b8282/" },
    { icon: <SiInstagram />, href: "https://instagram.com/who_is_niv" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition text-2xl"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-gray-400">&copy; 2025 Nivesh Shrestha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
