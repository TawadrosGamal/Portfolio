import { motion } from "motion/react";
import { Award, Briefcase, TrendingUp, BookOpen } from "lucide-react";

const headshotImage = "https://images.unsplash.com/photo-1633836138276-2ccbbe215ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzI0OTMyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function About() {
  const metrics = [
    {
      icon: Briefcase,
      value: "5+",
      label: "Years Experience",
      color: "var(--portfolio-secondary)",
    },
    {
      icon: Award,
      value: "120+",
      label: "AI Pipelines",
      color: "var(--portfolio-accent-success)",
    },
    {
      icon: TrendingUp,
      value: "2x",
      label: "Performance Boost",
      color: "var(--portfolio-accent-warning)",
    },
    {
      icon: BookOpen,
      value: "Udacity",
      label: "Course Author",
      color: "var(--portfolio-primary)",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 relative"
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
            About Me
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ backgroundColor: "var(--portfolio-secondary)" }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute -inset-4 rounded-2xl blur-2xl opacity-30"
                style={{ background: "linear-gradient(135deg, #0A2F6C, #2D9CDB)" }}
              />
              <img
                src={headshotImage}
                alt="Tawadros Nemer"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--portfolio-text-primary)" }}
            >
              I'm a Data Scientist with{" "}
              <span style={{ color: "var(--portfolio-secondary)", fontWeight: 600 }}>
                5+ years of experience in production AI
              </span>
              , specializing in Generative AI and Agentic multi-agent systems that transform complex business challenges into intelligent solutions.
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--portfolio-text-secondary)" }}
            >
              Currently, I'm an{" "}
              <span style={{ color: "var(--portfolio-primary)", fontWeight: 600 }}>Applied Scientist at Microsoft</span>
              , leading LLM-powered semantic automation for Edge Shopping. I'm also authoring the{" "}
              <span style={{ color: "var(--portfolio-primary)", fontWeight: 600 }}>
                Multi-Agent course for Udacity's Azure Agentic AI Nanodegree
              </span>
              , empowering students worldwide to master cutting-edge AI technologies.
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--portfolio-text-secondary)" }}
            >
              My expertise spans the full AI lifecycle—from big data engineering and ML pipelines to deploying sophisticated multi-agent RAG systems using LangChain, LangGraph, and cloud platforms (Azure, AWS, GCP). Proven track record in building scalable solutions and driving data-driven decisions.
            </p>
          </motion.div>
        </div>

        {/* Metrics Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundColor: "var(--portfolio-surface)" }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${metric.color}15` }}
              >
                <metric.icon size={24} style={{ color: metric.color }} />
              </div>
              <div className="text-3xl mb-1" style={{ color: "var(--portfolio-primary)", fontWeight: 700 }}>
                {metric.value}
              </div>
              <div style={{ color: "var(--portfolio-text-secondary)" }}>{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}