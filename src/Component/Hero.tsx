import { motion } from "framer-motion";
import { Link } from "react-scroll"; 

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800">
          Nivesh Shrestha
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
          UI/UX & Frontend Developer
        </h2>

        <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed">
          Building Beautiful Interfaces and Functional Experiences with React.
        </p>

        <div className="flex justify-center gap-4">
          
          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-70}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition transform hover:scale-105 cursor-pointer"
          >
            Get In Touch
          </Link>
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;
