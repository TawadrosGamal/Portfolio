import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export function BlogPage() {
  const blogPosts = [
    {
      title: "Building Multi-Agent RAG Systems: A Practical Guide",
      excerpt: "Exploring advanced techniques for creating stateful, production-ready multi-agent RAG systems with LangGraph and ChromaDB.",
      date: "March 5, 2026",
      readTime: "8 min read",
      category: "Generative AI",
      image: "https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTkxODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "LLM-Powered Semantic Automation at Microsoft Scale",
      excerpt: "How we built and deployed LLM-powered automation for Edge Shopping, improving accuracy and scaling to handle millions of items.",
      date: "February 20, 2026",
      readTime: "12 min read",
      category: "Production AI",
      image: "https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTkxODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "From Theory to Production: Deploying Agentic Workflows",
      excerpt: "Lessons learned from building real-time agentic customer service workflows with LiveKit and Twilio.",
      date: "February 10, 2026",
      readTime: "10 min read",
      category: "Agentic AI",
      image: "https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTkxODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Teaching Azure AI: Insights from Authoring Udacity's Multi-Agent Course",
      excerpt: "Key concepts and practical examples from Course 4 of the Azure Agentic AI Nanodegree.",
      date: "January 28, 2026",
      readTime: "6 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTkxODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Model Explainability in Financial Services: A SHAP Approach",
      excerpt: "Implementing model governance and explainability for multi-agent banking RAG systems.",
      date: "January 15, 2026",
      readTime: "9 min read",
      category: "MLOps",
      image: "https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTkxODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Speech-to-Speech AI: Building Autonomous Voice Agent Testing",
      excerpt: "End-to-end architecture for creating a Speech-to-Speech AI call service using LiveKit and OpenAI.",
      date: "December 22, 2025",
      readTime: "11 min read",
      category: "Voice AI",
      image: "https://images.unsplash.com/photo-1516263497941-cfa23ccbf9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyOTkxODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <PageTransition>
      <div className="pt-20 min-h-screen" style={{ backgroundColor: "var(--portfolio-bg)" }}>
        <div className="max-w-7xl mx-auto">
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
              Blog
            </h1>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "var(--portfolio-text-secondary)" }}
            >
              Insights on Generative AI, Multi-Agent Systems, and Production ML from real-world experience
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{ backgroundColor: "white" }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: "var(--portfolio-secondary)",
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2
                    className="text-xl mb-3 group-hover:underline"
                    style={{
                      color: "var(--portfolio-primary)",
                      fontWeight: 600,
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="mb-4 line-clamp-3"
                    style={{ color: "var(--portfolio-text-secondary)" }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div
                    className="flex items-center gap-4 text-sm mb-4"
                    style={{ color: "var(--portfolio-text-secondary)" }}
                  >
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div
                    className="flex items-center gap-2 group-hover:gap-3 transition-all"
                    style={{ color: "var(--portfolio-secondary)", fontWeight: 600 }}
                  >
                    <span>Read More</span>
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}