import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <Phone className="text-blue-500 w-6 h-6" />,
    title: "Phone",
    detail: "+977 9849925390",
  },
  {
    icon: <Mail className="text-blue-500 w-6 h-6" />,
    title: "Email",
    detail: "nivesh.shrestha.94@gmail.com",
  },
  {
    icon: <MapPin className="text-blue-500 w-6 h-6" />,
    title: "Location",
    detail: "Pulchowk, Lalitpur",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow"
              >
                {info.icon}
                <div>
                  <h3 className="font-semibold text-gray-800">{info.title}</h3>
                  <p className="text-gray-600">{info.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <motion.form
            action="mailto:nivesh.shrestha.94@gmail.com"
            method="POST"
            encType="text/plain"
            className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <label className="block text-left font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-left font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-left font-medium mb-1">Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                rows={5}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
