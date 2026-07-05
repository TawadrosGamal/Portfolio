import { motion } from "motion/react";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const projectImages = {
  speech: "https://images.unsplash.com/photo-1678845536613-5cf0ec5245cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9uJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NzI0OTMyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  banking: "https://images.unsplash.com/photo-1762279388957-c6ed514d3353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzI0OTMyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  customer: "https://images.unsplash.com/photo-1767716134877-82b74809e431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHJvYm90JTIwYXNzaXN0YW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI0MzE3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  chatbot: "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwaW50ZXJmYWNlJTIwbW9kZXJuJTIwZGVzaWdufGVufDF8fHx8MTc3MjQ5MzIzMXww&ixlib=rb-4.1.0&q=80&w=1080",
};

export function Projects() {
  const projects = [
    {
      title: "Speech-to-Speech AI Call Service",
      description:
        "Engineered an end-to-end Speech-to-Speech AI call service that autonomously calls and tests AI voice agents. Implemented using LiveKit for real-time WebRTC communication, integrated OpenAI STS models with custom TTS/STT pipelines. Deployed on AWS with Docker.",
      technologies: ["LiveKit", "WebRTC", "OpenAI", "TTS/STT", "Docker", "AWS"],
      image: projectImages.speech,
      github: "https://github.com/TawadrosGamal",
      demo: "#",
      featured: true,
    },
    {
      title: "Multi-Agent Banking RAG System",
      description:
        "Architected a multi-agent RAG system with stateful memory and optimized query routing for financial services. Used LangGraph, ChromaDB, and OpenAI embeddings; containerized with Docker and exposed via FastAPI. Emphasized model governance and explainability using SHAP.",
      technologies: ["LangGraph", "RAG", "ChromaDB", "OpenAI", "Docker", "FastAPI", "SHAP"],
      image: projectImages.banking,
      github: "https://github.com/TawadrosGamal",
      demo: "#",
      featured: true,
    },
    {
      title: "Real-Time Agentic Customer Service",
      description:
        "Built a real-time agentic workflow using LiveKit and Twilio to automate customer service, cutting handle time by half. Implemented autonomous agent routing with context awareness and real-time voice processing.",
      technologies: ["LiveKit", "Twilio", "Agentic AI", "WebRTC", "Python"],
      image: projectImages.customer,
      github: "https://github.com/TawadrosGamal",
      demo: "#",
      featured: true,
    },
    {
      title: "Multi-Agent SQL Assistant with LLMs",
      description:
        "Developed a multi-agent system using LangChain and LangGraph to convert natural language questions into SQL queries, execute them, and return natural language summaries. Implemented embedding-based schema linking with ChromaDB, SQL validation, caching, and audit logging.",
      technologies: ["LangChain", "LangGraph", "ChromaDB", "SQL", "NLP", "FastAPI"],
      image: projectImages.chatbot,
      github: "https://github.com/TawadrosGamal",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ backgroundColor: "var(--portfolio-secondary)" }}
          />
          <p
            className="mt-6 text-lg max-w-3xl mx-auto"
            style={{ color: "var(--portfolio-text-secondary)" }}
          >
            Showcasing production-ready AI systems that solve real-world problems at scale
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{ backgroundColor: "var(--portfolio-surface)" }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div
                  className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full flex items-center gap-1 text-sm"
                  style={{
                    background: "linear-gradient(135deg, #0A2F6C, #2D9CDB)",
                    color: "white",
                  }}
                >
                  <Sparkles size={14} />
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(10, 47, 108, 0.8), rgba(45, 156, 219, 0.8))",
                  }}
                />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full transition-transform hover:scale-110"
                    style={{ backgroundColor: "var(--portfolio-surface)" }}
                  >
                    <Github size={24} style={{ color: "var(--portfolio-primary)" }} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full transition-transform hover:scale-110"
                    style={{ backgroundColor: "var(--portfolio-surface)" }}
                  >
                    <ExternalLink size={24} style={{ color: "var(--portfolio-secondary)" }} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3
                  className="text-2xl mb-3"
                  style={{
                    color: "var(--portfolio-primary)",
                    fontWeight: 700,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: "var(--portfolio-text-secondary)" }}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: "var(--portfolio-bg)",
                        color: "var(--portfolio-secondary)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/TawadrosGamal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{
              border: "2px solid var(--portfolio-primary)",
              color: "var(--portfolio-primary)",
            }}
          >
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}