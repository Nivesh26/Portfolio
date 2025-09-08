import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import GMW from "../assets/GMW.svg"
import JealousCatch from "../assets/The_Jealous_Catch.svg"
import Figma from "../assets/Figmaa.svg"

const projects = [
  {
    title: "General Mechanical Works",
    description: "A React-based web application for booking motorbike servicing, scheduling maintenance, and purchasing bike parts online, featuring a user-friendly interface and seamless online payment integration.",
    image: GMW,
    github: "https://github.com/Nivesh26/GMW-React-Project",
  },  
  
  {
    title: "The Jealous Catch",
    description: "The Jealous Catch is a stylish watch brand showcased through a sleek HTML/CSS frontend and powered by a Java Spring Boot backend with MySQL database support.",
    image: JealousCatch,
    github: "https://github.com/Nivesh26/Advance-Java-Project",
  },

  {
    title: "Online Clothing Brand",
    description: "An online clothing brand designed in Figma with a modern and user-friendly interface.",
    image: Figma,
   
  },
  

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-500 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4 ">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
