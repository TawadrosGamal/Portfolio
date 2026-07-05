import { motion } from "motion/react";
import { Calendar, ExternalLink, TrendingUp } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export function NewsPage() {
  const newsItems = [
    {
      title: "Joined Microsoft as Applied Scientist",
      description: "Started leading LLM-powered semantic automation for Edge Shopping, driving innovation in AI-powered product tracking and analytics.",
      date: "May 2024",
      type: "Career",
      icon: TrendingUp,
      link: "#",
    },
    {
      title: "Authored Azure Agentic AI Nanodegree Course for Udacity",
      description: "Developed Course 4: Multi-Agents, focusing on practical agentic architectures, Semantic Kernel, and Azure AI Services integration.",
      date: "June 2024",
      type: "Education",
      icon: TrendingUp,
      link: "#",
    },
    {
      title: "Launched Speech-to-Speech AI Call Service",
      description: "Released an end-to-end autonomous voice agent testing platform using LiveKit, WebRTC, and OpenAI STS models, deployed on AWS.",
      date: "February 2026",
      type: "Project",
      icon: TrendingUp,
      link: "#",
    },
    {
      title: "Published Multi-Agent Banking RAG System",
      description: "Architected and deployed a production-ready multi-agent RAG system for financial services with LangGraph, ChromaDB, and SHAP explainability.",
      date: "January 2026",
      type: "Project",
      icon: TrendingUp,
      link: "#",
    },
    {
      title: "2x Increase in Edge Shopping Daily Tracked Items",
      description: "Achieved major milestone at Microsoft by orchestrating scalable big-data workflows that doubled daily item tracking capacity.",
      date: "December 2025",
      type: "Achievement",
      icon: TrendingUp,
      link: "#",
    },
    {
      title: "Promoted to Mid-Senior Big Data Engineer at LigaData",
      description: "Led orchestration of 120+ automated ETL pipelines with Airflow and Spark, achieving 99.9% uptime and 35% efficiency improvement.",
      date: "August 2023",
      type: "Career",
      icon: TrendingUp,
      link: "#",
    },
  ];

  return (
    <PageTransition>
      <div className="pt-20 min-h-screen" style={{ backgroundColor: "var(--portfolio-surface)" }}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1
              className="text-5xl md:text-6xl mb-6"
              style={{
                color: "var(--portfolio-primary)",
                fontWeight: 700,
              }}
            >
              News & Updates
            </h1>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "var(--portfolio-text-secondary)" }}
            >
              Recent achievements, announcements, and milestones
            </p>
          </motion.div>

          {/* News Timeline */}
          <div className="space-y-6">
            {newsItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className="rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: "var(--portfolio-bg)",
                        }}
                      >
                        <Icon size={24} style={{ color: "var(--portfolio-secondary)" }} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h2
                            className="text-xl group-hover:underline"
                            style={{
                              color: "var(--portfolio-primary)",
                              fontWeight: 600,
                            }}
                          >
                            {item.title}
                          </h2>
                          <div
                            className="flex items-center gap-2 text-sm whitespace-nowrap"
                            style={{ color: "var(--portfolio-text-secondary)" }}
                          >
                            <Calendar size={16} />
                            <span>{item.date}</span>
                          </div>
                        </div>

                        <p
                          className="mb-3"
                          style={{ color: "var(--portfolio-text-secondary)" }}
                        >
                          {item.description}
                        </p>

                        <div className="flex items-center gap-3">
                          <span
                            className="px-3 py-1 rounded-full text-sm"
                            style={{
                              backgroundColor: "var(--portfolio-bg)",
                              color: "var(--portfolio-secondary)",
                              fontWeight: 600,
                            }}
                          >
                            {item.type}
                          </span>
                          <a
                            href={item.link}
                            className="flex items-center gap-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ color: "var(--portfolio-secondary)", fontWeight: 600 }}
                          >
                            <span>Learn more</span>
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}