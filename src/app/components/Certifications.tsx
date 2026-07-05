import { motion } from "motion/react";
import { Award, ExternalLink, Check } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "Azure Agentic AI Nanodegree",
      issuer: "Udacity",
      date: "Course Author",
      type: "author",
      description: "Authored comprehensive course on building agentic AI systems using Azure OpenAI",
      skills: ["Multi-Agent Systems", "Azure OpenAI", "LangGraph", "Production AI"],
      link: "https://www.udacity.com",
    },
    {
      title: "Microsoft Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "2023",
      type: "certification",
      description: "Expertise in designing and implementing AI solutions on Azure platform",
      skills: ["Azure AI Services", "Machine Learning", "Cognitive Services"],
      link: "#",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Udacity",
      date: "2020",
      type: "certification",
      description: "Advanced specialization in supervised and unsupervised learning techniques",
      skills: ["Neural Networks", "Deep Learning", "Model Optimization"],
      link: "#",
    },
    {
      title: "Deep Learning Nanodegree",
      issuer: "Udacity",
      date: "2019",
      type: "certification",
      description: "Comprehensive program covering CNNs, RNNs, GANs, and Transformers",
      skills: ["PyTorch", "TensorFlow", "Computer Vision", "NLP"],
      link: "#",
    },
    {
      title: "Azure Solutions Architect Expert",
      issuer: "Microsoft",
      date: "2022",
      type: "certification",
      description: "Expert-level certification for designing cloud solutions on Azure",
      skills: ["Cloud Architecture", "DevOps", "Infrastructure as Code"],
      link: "#",
    },
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2021",
      type: "certification",
      description: "Professional certification for AWS cloud architecture and best practices",
      skills: ["AWS Services", "Cloud Security", "Cost Optimization"],
      link: "#",
    },
  ];

  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: "var(--portfolio-surface)" }}>
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
            Certifications & Achievements
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ backgroundColor: "var(--portfolio-secondary)" }}
          />
          <p
            className="mt-6 text-lg max-w-3xl mx-auto"
            style={{ color: "var(--portfolio-text-secondary)" }}
          >
            Continuous learning and professional development in AI and cloud technologies
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{
                backgroundColor: "var(--portfolio-bg)",
                border: "1px solid",
                borderColor: cert.type === "author" ? "var(--portfolio-secondary)" : "transparent",
              }}
            >
              {/* Special Badge for Course Author */}
              {cert.type === "author" && (
                <div
                  className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #0A2F6C, #2D9CDB)",
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  Course Author
                </div>
              )}

              {/* Icon */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor:
                      cert.type === "author"
                        ? "var(--portfolio-secondary)"
                        : "var(--portfolio-primary)",
                    opacity: 0.1,
                  }}
                >
                  <Award
                    size={24}
                    style={{
                      color:
                        cert.type === "author"
                          ? "var(--portfolio-secondary)"
                          : "var(--portfolio-primary)",
                      opacity: 1,
                    }}
                  />
                </div>
                <span
                  className="text-sm px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "var(--portfolio-surface)",
                    color: "var(--portfolio-text-secondary)",
                  }}
                >
                  {cert.date}
                </span>
              </div>

              {/* Title & Issuer */}
              <h3
                className="text-xl mb-2"
                style={{
                  color: "var(--portfolio-primary)",
                  fontWeight: 700,
                }}
              >
                {cert.title}
              </h3>
              <p
                className="mb-3"
                style={{
                  color: "var(--portfolio-secondary)",
                  fontWeight: 600,
                }}
              >
                {cert.issuer}
              </p>

              {/* Description */}
              <p className="mb-4 text-sm" style={{ color: "var(--portfolio-text-secondary)" }}>
                {cert.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs px-2 py-1 rounded-full flex items-center gap-1"
                    style={{
                      backgroundColor: "var(--portfolio-surface)",
                      color: "var(--portfolio-text-secondary)",
                    }}
                  >
                    <Check size={12} style={{ color: "var(--portfolio-accent-success)" }} />
                    {skill}
                  </span>
                ))}
              </div>

              {/* View Link */}
              {cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm transition-colors group-hover:gap-3"
                  style={{ color: "var(--portfolio-secondary)" }}
                >
                  View Credential
                  <ExternalLink size={14} className="transition-transform" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
