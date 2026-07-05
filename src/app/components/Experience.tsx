import { motion } from "motion/react";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Applied Scientist",
      company: "Microsoft",
      location: "Cairo, Egypt (Onsite)",
      date: "May 2024 – Present",
      achievements: [
        "Lead LLM-powered semantic automation for Edge Shopping, streamlining product tracking and improving accuracy",
        "Serve as analytics point of contact for Copilot Shopping Agent and Edge Shopping",
        "Orchestrate scalable big-data workflows resulting in a twofold increase in daily tracked items",
        "Enhanced user engagement by boosting notification CTR and reducing DSATs through behavior modeling",
        "Ensure model explainability and documentation for compliance, using SHAP for feature importance analysis",
      ],
      technologies: ["Azure AI", "LLMs", "Power BI", "Python", "SHAP", "Big Data"],
    },
    {
      role: "Course Author",
      company: "Udacity",
      location: "Remote",
      date: "Jun 2024 – Present",
      achievements: [
        "Authored Course 4: Multi-Agents for the Azure Agentic AI Nanodegree",
        "Designed hands-on labs integrating Semantic Kernel and Azure AI Services",
        "Developed examples showcasing autonomous task routing and context memory",
        "Created practical agentic architectures and applied reasoning curriculum",
      ],
      technologies: ["Azure", "Semantic Kernel", "Multi-Agent Systems", "Agentic AI", "Python"],
    },
    {
      role: "Mid-Senior Big Data Engineer",
      company: "LigaData",
      location: "Cairo, Egypt (Remote)",
      date: "Aug 2023 – May 2024",
      achievements: [
        "Orchestrated Big Data workflows with Airflow improving efficiency 35% and scalability",
        "Implemented petabyte-scale analytics using Presto/Hive/Elastic Stack",
        "Built and maintained 120+ automated ETL pipelines using Airflow and Spark",
        "Achieved 99.9% pipeline uptime through production monitoring and incident recovery",
        "Mentored junior engineers and migrated 50+ workflows to internal tools",
      ],
      technologies: ["Airflow", "Spark", "Presto", "Hive", "Elastic Stack", "SQL", "Python"],
    },
    {
      role: "Data Scientist & ML Engineer",
      company: "Minapharma",
      location: "Cairo, Egypt (Onsite)",
      date: "Aug 2022 – Aug 2023",
      achievements: [
        "Engineered internal sales forecasting solution improving accuracy 120% with Prophet/Neural Networks",
        "Built an ATS tool combining OCR and NLP that improved candidate matching precision by 85%",
        "Developed phone detection model and face recognition model 2x faster than Azure, cutting costs 35%",
        "Implemented computer vision and NLP solutions for healthcare operations",
      ],
      technologies: ["Prophet", "PyTorch", "OCR", "NLP", "Computer Vision", "Python"],
    },
    {
      role: "AI Engineer",
      company: "CliniDo",
      location: "Cairo, Egypt (Onsite)",
      date: "Sep 2021 – Aug 2022",
      achievements: [
        "Engineered NER-driven medical symptom analysis pipelines with 88% accuracy",
        "Developed Arabic sentiment analysis achieving 97% accuracy for patient feedback insights",
        "Streamlined diagnostics through automated medical text processing",
        "Built production-ready NLP systems for healthcare applications",
      ],
      technologies: ["NLP", "NER", "Sentiment Analysis", "Python", "Arabic NLP"],
    },
    {
      role: "AI Engineer",
      company: "Upwork",
      location: "Remote",
      date: "Oct 2020 – May 2022",
      achievements: [
        "Delivered ETL/EDA/predictive models for 5+ clients across industries",
        "Built end-to-end machine learning pipelines for diverse business needs",
        "Provided data science consulting and solution architecture",
        "Implemented predictive analytics solutions increasing client ROI",
      ],
      technologies: ["Python", "Machine Learning", "ETL", "Data Analysis", "SQL"],
    },
  ];

  return (
    <section
      id="experience"
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
            Experience
          </h2>
          <div
            className="w-20 h-1 mx-auto rounded-full"
            style={{ backgroundColor: "var(--portfolio-secondary)" }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full"
            style={{ backgroundColor: "var(--portfolio-secondary)", opacity: 0.3 }}
          />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4"
                  style={{
                    backgroundColor: "var(--portfolio-surface)",
                    borderColor: "var(--portfolio-secondary)",
                  }}
                />

                {/* Card */}
                <div className={`md:col-span-1 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:col-start-2 md:pl-8"}`}>
                  <div
                    className="p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                    style={{ backgroundColor: "var(--portfolio-surface)" }}
                  >
                    {/* Header */}
                    <div className={`mb-4 ${index % 2 === 0 ? "md:items-end" : ""}`}>
                      <h3
                        className="text-2xl mb-2"
                        style={{
                          color: "var(--portfolio-primary)",
                          fontWeight: 700,
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className="text-xl mb-2"
                        style={{
                          color: "var(--portfolio-secondary)",
                          fontWeight: 600,
                        }}
                      >
                        {exp.company}
                      </p>
                      <div
                        className={`flex flex-wrap gap-3 text-sm ${index % 2 === 0 ? "md:justify-end" : ""}`}
                        style={{ color: "var(--portfolio-text-secondary)" }}
                      >
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`flex gap-2 items-start ${index % 2 === 0 ? "md:flex-row-reverse md:justify-end" : ""}`}
                        >
                          <CheckCircle2
                            size={20}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: "var(--portfolio-accent-success)" }}
                          />
                          <span style={{ color: "var(--portfolio-text-primary)" }}>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech, i) => (
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}