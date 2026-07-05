import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router";

const heroImage = "https://images.unsplash.com/photo-1695198970319-a67a44476ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV0d29yayUyMGFic3RyYWN0JTIwYmx1ZXxlbnwxfHx8fDE3NzI0OTMyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      style={{ backgroundColor: "var(--portfolio-bg)" }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(var(--portfolio-secondary) 1px, transparent 1px),
                            linear-gradient(90deg, var(--portfolio-secondary) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg"
              style={{ color: "var(--portfolio-secondary)" }}
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl tracking-tight"
              style={{
                color: "var(--portfolio-primary)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Tawadros Nemer
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl tracking-tight"
              style={{
                color: "var(--portfolio-text-primary)",
                fontWeight: 600,
              }}
            >
              Data Scientist | Generative & Agentic AI
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "var(--portfolio-text-secondary)" }}
            >
              Applied Scientist at Microsoft leading LLM-powered automation. Course Author for Udacity's Azure Agentic AI Nanodegree. 5+ years building production AI systems with proven expertise in multi-agent architectures, RAG, and scalable ML solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/projects">
                <button
                  className="group px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #0A2F6C, #2D9CDB)",
                    color: "white",
                  }}
                >
                  View My Work
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </Link>

              <Link to="/contact">
                <button
                  className="px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center gap-2"
                  style={{
                    border: "2px solid var(--portfolio-primary)",
                    color: "var(--portfolio-primary)",
                    backgroundColor: "transparent",
                  }}
                >
                  Contact Me
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="AI Network Visualization"
                className="w-full h-auto"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(10, 47, 108, 0.3), rgba(45, 156, 219, 0.3))",
                }}
              />
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full blur-3xl"
              style={{
                background: "var(--portfolio-secondary)",
                opacity: 0.3,
              }}
            />

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full blur-3xl"
              style={{
                background: "var(--portfolio-primary)",
                opacity: 0.2,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}