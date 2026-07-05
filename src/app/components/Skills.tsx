import { motion } from "motion/react";
import { Brain, Database, Wrench, Code, Cloud, TrendingUp } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      category: "Generative AI & LLMs",
      icon: Brain,
      color: "var(--portfolio-secondary)",
      skills: [
        { name: "LangChain & LangGraph", level: 95 },
        { name: "Azure OpenAI", level: 92 },
        { name: "RAG Architectures", level: 90 },
        { name: "Prompt Engineering", level: 93 },
        { name: "Multi-Agent Systems", level: 88 },
      ],
    },
    {
      category: "Machine Learning",
      icon: TrendingUp,
      color: "var(--portfolio-accent-success)",
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Scikit-learn", level: 92 },
        { name: "Computer Vision", level: 87 },
        { name: "NLP", level: 90 },
      ],
    },
    {
      category: "Data Engineering",
      icon: Database,
      color: "var(--portfolio-primary)",
      skills: [
        { name: "SQL (PostgreSQL, MySQL)", level: 93 },
        { name: "Apache Spark", level: 88 },
        { name: "Apache Airflow", level: 90 },
        { name: "ETL Pipelines", level: 91 },
        { name: "Data Warehousing", level: 85 },
      ],
    },
    {
      category: "MLOps & Cloud",
      icon: Cloud,
      color: "var(--portfolio-accent-warning)",
      skills: [
        { name: "Docker & Kubernetes", level: 87 },
        { name: "Azure Services", level: 90 },
        { name: "AWS (EC2, S3, Lambda)", level: 85 },
        { name: "CI/CD Pipelines", level: 88 },
        { name: "Model Monitoring", level: 86 },
      ],
    },
    {
      category: "Development Tools",
      icon: Wrench,
      color: "var(--portfolio-secondary)",
      skills: [
        { name: "Git & GitHub", level: 94 },
        { name: "FastAPI", level: 90 },
        { name: "Flask", level: 88 },
        { name: "REST APIs", level: 92 },
        { name: "WebSockets", level: 85 },
      ],
    },
    {
      category: "Programming Languages",
      icon: Code,
      color: "var(--portfolio-primary)",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 93 },
        { name: "JavaScript/TypeScript", level: 80 },
        { name: "Bash/Shell", level: 82 },
        { name: "C++", level: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-32"
      style={{ backgroundColor: "var(--portfolio-bg)" }}
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
            Skills & Expertise
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ backgroundColor: "var(--portfolio-secondary)" }}
          />
          <p
            className="mt-6 text-lg max-w-3xl mx-auto"
            style={{ color: "var(--portfolio-text-secondary)" }}
          >
            A comprehensive toolkit for building end-to-end AI solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="p-6 rounded-xl shadow-lg"
              style={{ backgroundColor: "var(--portfolio-surface)" }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon size={24} style={{ color: category.color }} />
                </div>
                <h3
                  className="text-xl"
                  style={{
                    color: "var(--portfolio-primary)",
                    fontWeight: 700,
                  }}
                >
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className="text-sm"
                        style={{ color: "var(--portfolio-text-primary)" }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: category.color, fontWeight: 600 }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: "var(--portfolio-bg)" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications/Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          {/* Education */}
          <div
            className="p-6 rounded-xl shadow-lg"
            style={{ backgroundColor: "var(--portfolio-surface)" }}
          >
            <h3
              className="text-2xl mb-4"
              style={{
                color: "var(--portfolio-primary)",
                fontWeight: 700,
              }}
            >
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <p
                  className="text-lg"
                  style={{ color: "var(--portfolio-text-primary)", fontWeight: 600 }}
                >
                  B.Sc. Computer Science
                </p>
                <p style={{ color: "var(--portfolio-text-secondary)" }}>
                  Assiut University
                </p>
              </div>
              <div>
                <p
                  className="text-lg"
                  style={{ color: "var(--portfolio-text-primary)", fontWeight: 600 }}
                >
                  Udacity Nanodegree
                </p>
                <p style={{ color: "var(--portfolio-text-secondary)" }}>
                  Machine Learning & Deep Learning
                </p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div
            className="p-6 rounded-xl shadow-lg"
            style={{ backgroundColor: "var(--portfolio-surface)" }}
          >
            <h3
              className="text-2xl mb-4"
              style={{
                color: "var(--portfolio-primary)",
                fontWeight: 700,
              }}
            >
              Languages
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span style={{ color: "var(--portfolio-text-primary)" }}>Arabic</span>
                <span
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: "var(--portfolio-bg)",
                    color: "var(--portfolio-secondary)",
                  }}
                >
                  Native
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ color: "var(--portfolio-text-primary)" }}>English</span>
                <span
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: "var(--portfolio-bg)",
                    color: "var(--portfolio-secondary)",
                  }}
                >
                  Fluent
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ color: "var(--portfolio-text-primary)" }}>German</span>
                <span
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: "var(--portfolio-bg)",
                    color: "var(--portfolio-text-secondary)",
                  }}
                >
                  Beginner
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
