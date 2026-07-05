import { motion } from "motion/react";
import { ArrowUp, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="relative py-12"
      style={{ backgroundColor: "var(--portfolio-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            className="p-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            style={{
              backgroundColor: "var(--portfolio-secondary)",
              color: "white",
            }}
          >
            <ArrowUp size={24} />
          </motion.button>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-2"
          >
            <p className="flex items-center justify-center gap-2" style={{ color: "white" }}>
              Made with <Heart size={16} fill="currentColor" /> by Tawadros Nemer
            </p>
            <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              © 2026 Tawadros Nemer. All rights reserved.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center max-w-2xl italic"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            "Building the future, one intelligent system at a time."
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
