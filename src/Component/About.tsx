import { motion } from "framer-motion";
import { Link } from "react-scroll";
import profile from "../assets/Nivesh.jpg";

const About = () => {
  const education = [
    {
      degree: "Higher Secondary Education",
      school: "United Academy",
      year: "2020 A.D - 2022 A.D",
    },
    {
      degree: "Bachelor of Information and Communication Technology (BICT)",
      school: "Asia e University",
      year: "2022 A.D - 2026 A.D",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start md:space-x-12">
      
        <motion.div
          className="mb-8 md:mb-0 md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profile}
            alt="Nivesh Shrestha"
            className="rounded-2xl w-64 h-[500px] object-cover shadow-xl hover:scale-105 transition-transform mt-9"
          />
        </motion.div>

        <div className="md:w-2/3 text-center md:text-left">
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-4 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            I am a UI/UX Designer and 
            Frontend Developer skilled in creating
            intuitive digital experiences. I craft web prototypes, logos, and visual designs that
            truly engage users. I have also learned the MERN Stack
            (MongoDB, Express.js, ReactJS, Node.js) through Codded.
          </motion.p>

          <motion.p
            className="text-gray-700 mb-6 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My goal is to combine strong design thinking
            with development skills to create
            digital products that are visually stunning and technically robust.
          </motion.p>

          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow space-y-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-blue-500 mb-4">Education</h3>
            {education.map((edu, idx) => (
              <div key={idx} className="border-l-4 border-blue-500 pl-4 mb-3">
                <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-gray-500">{edu.year}</p>
              </div>
            ))}
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-70}
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-600 transition cursor-pointer"
            >
              Let's Connect
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
