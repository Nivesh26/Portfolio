import { motion } from "framer-motion";

const experiences = [
  {
    title: "Graphic Designer",
    company: "Thakur International",
    points: [
      "Understanding Design Principles",
      "Client Collaboration",
      "Branding and Visual Identity",
      "Critical Thinking and Problem-Solving",
      "Design Software (Photoshop, Illustrator)",
    ],
  },
  {
    title: "UI/UX Training",
    company: "NAXA",
    points: [
      "User Research and Analysis",
      "Interaction Design",
      "Visual Design Principles",
      "User Testing and Feedback Iteration",
      "Mobile & Responsive Design",
      "Prototyping & Animation",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Work Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-blue-500 mb-2">{exp.title}</h3>
              <h4 className="text-gray-600 mb-4">{exp.company}</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
