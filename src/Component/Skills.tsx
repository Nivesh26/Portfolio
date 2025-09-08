import {
  SiReact,
  SiTailwindcss,
  SiC,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiSpringboot,
  SiJavascript,
  SiExpress,
  SiPython,
  SiFigma,
  SiAdobephotoshop,
  SiMongodb,
  SiMysql,
  SiSass,
  SiGithub,
  SiNextdotjs,

} from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "ReactJS", icon: <SiReact className="w-12 h-12 text-sky-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12 text-cyan-500" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-12 h-12 text-green-600" /> },
    { name: "C Programming", icon: <SiC className="w-12 h-12 text-blue-600" /> },
    { name: "HTML5", icon: <SiHtml5 className="w-12 h-12 text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="w-12 h-12 text-blue-500" /> },
    { name: "SCSS", icon: <SiSass className="w-12 h-12 text-pink-500" /> },
    {name:"Next.js", icon:<SiNextdotjs className="w-12 h-12 text-gray-800" />},
    { name: "Spring Boot", icon: <SiSpringboot className="w-12 h-12 text-green-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-12 h-12 text-yellow-400" /> },
    { name: "Express.js", icon: <SiExpress className="w-12 h-12 text-gray-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-12 h-12 text-green-700" /> },
    { name: "MySQL", icon: <SiMysql className="w-12 h-12 text-blue-700" /> },
    { name: "Python", icon: <SiPython className="w-12 h-12 text-yellow-500" /> },
    { name: "UI/UX", icon: <SiFigma className="w-12 h-12 text-pink-500" /> },
    { name: "Graphic Design", icon: <SiAdobephotoshop className="w-12 h-12 text-blue-400" /> },
    { name: "GitHub", icon: <SiGithub className="w-12 h-12 text-gray-800" /> },
  
    
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center p-5 bg-white rounded-xl shadow hover:scale-105 transition-transform duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {skill.icon}
              <p className="mt-3 font-medium text-gray-700">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
