import { motion } from "motion/react";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (placeholder)
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32"
      style={{ backgroundColor: "var(--portfolio-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{
              color: "var(--portfolio-primary)",
              fontWeight: 700,
            }}
          >
            Let's Build the Future Together
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ backgroundColor: "var(--portfolio-secondary)" }}
          />
          <p
            className="mt-6 text-lg max-w-3xl mx-auto"
            style={{ color: "var(--portfolio-text-secondary)" }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-2xl mb-6"
                style={{
                  color: "var(--portfolio-primary)",
                  fontWeight: 700,
                }}
              >
                Get in Touch
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--portfolio-text-secondary)" }}
              >
                Whether you have a question, want to collaborate, or just want to connect, feel free
                to reach out. I'll try to get back to you as soon as possible!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href="mailto:tawadrosgamal@gmail.com"
                className="flex items-start gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--portfolio-bg)" }}
                >
                  <Mail size={24} style={{ color: "var(--portfolio-secondary)" }} />
                </div>
                <div>
                  <p
                    className="mb-1"
                    style={{ color: "var(--portfolio-text-primary)", fontWeight: 600 }}
                  >
                    Email
                  </p>
                  <p
                    className="group-hover:underline"
                    style={{ color: "var(--portfolio-text-secondary)" }}
                  >
                    tawadrosgamal@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--portfolio-bg)" }}
                >
                  <MapPin size={24} style={{ color: "var(--portfolio-accent-success)" }} />
                </div>
                <div>
                  <p
                    className="mb-1"
                    style={{ color: "var(--portfolio-text-primary)", fontWeight: 600 }}
                  >
                    Location
                  </p>
                  <p style={{ color: "var(--portfolio-text-secondary)" }}>
                    Cairo, Egypt (Open to Relocate)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p
                className="mb-4"
                style={{ color: "var(--portfolio-text-primary)", fontWeight: 600 }}
              >
                Connect with me
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/tawadrosnemer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ backgroundColor: "var(--portfolio-bg)" }}
                >
                  <Linkedin size={24} style={{ color: "var(--portfolio-secondary)" }} />
                </a>
                <a
                  href="https://github.com/TawadrosGamal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ backgroundColor: "var(--portfolio-bg)" }}
                >
                  <Github size={24} style={{ color: "var(--portfolio-primary)" }} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-xl shadow-lg space-y-6"
              style={{ backgroundColor: "var(--portfolio-bg)" }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2"
                  style={{ color: "var(--portfolio-text-primary)", fontWeight: 600 }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors"
                  style={{
                    backgroundColor: "var(--portfolio-surface)",
                    borderColor: "var(--portfolio-secondary)",
                    borderOpacity: 0.2,
                    color: "var(--portfolio-text-primary)",
                  }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2"
                  style={{ color: "var(--portfolio-text-primary)", fontWeight: 600 }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors"
                  style={{
                    backgroundColor: "var(--portfolio-surface)",
                    borderColor: "var(--portfolio-secondary)",
                    borderOpacity: 0.2,
                    color: "var(--portfolio-text-primary)",
                  }}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2"
                  style={{ color: "var(--portfolio-text-primary)", fontWeight: 600 }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors resize-none"
                  style={{
                    backgroundColor: "var(--portfolio-surface)",
                    borderColor: "var(--portfolio-secondary)",
                    borderOpacity: 0.2,
                    color: "var(--portfolio-text-primary)",
                  }}
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #0A2F6C, #2D9CDB)",
                  color: "white",
                }}
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}