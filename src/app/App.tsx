import { useState, useEffect } from "react";
import {
  Moon, Sun, Menu, X, ExternalLink, Github, Linkedin,
  Mail, ChevronDown, Download, Phone, MapPin,
} from "lucide-react";

// ── Theme ──────────────────────────────────────────────────────────────────
function useDark() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return [dark, () => setDark((d) => !d)] as const;
}

// ── Data ───────────────────────────────────────────────────────────────────
const NAV = ["About", "Experience", "Projects", "Skills", "Contact"];

const EXPERIENCE = [
  {
    role: "Senior AI Engineer",
    company: "CNTXT.AI",
    industry: "Tech · Remote",
    period: "Dec 2025 – Present",
    current: true,
    highlights: [
      "TESTAI Platform: Architected and deployed a production platform for testing Speech AI Agents with automated scenario generation, evaluation pipelines, and real-time PII redaction.",
      "Accounting OS AI: Led development of a multi-service pipeline for email classification, invoice extraction, and line-item classification using GCP (Vertex AI, BigQuery, Pub/Sub) with FastAPI backend.",
      "Designed high-throughput, low-latency inference pipelines optimized for production workloads with strict SLAs.",
    ],
  },
  {
    role: "Applied Scientist",
    company: "Microsoft",
    industry: "Tech · Onsite",
    period: "May 2024 – Nov 2025",
    current: false,
    highlights: [
      "Led LLM-powered semantic automation systems in the Edge Shopping team, streamlining product tracking workflows and improving accuracy across data pipelines.",
      "Served as the analytics point of contact for Copilot Shopping Agent and Edge Shopping, driving insight generation and data-driven optimization.",
      "Orchestrated scalable big-data workflows by automating core processes — URL normalization, CSS-selector maintenance, and comprehensive validation — resulting in a 2× increase in daily tracked items.",
      "Enhanced user engagement by boosting notification CTR and reducing DSATs through data heuristics and behavior modeling.",
      "Optimized real-time dashboards and internal tooling (Power BI, custom scripts), reducing latency and improving monitoring.",
    ],
  },
  {
    role: "Course Author",
    company: "Udacity",
    industry: "Education · Remote",
    period: "Jun 2024 – Present",
    current: true,
    highlights: [
      "Authored Course 4: Multi-Agents for the Azure Agentic AI Nanodegree, focusing on practical agentic architectures and applied reasoning.",
      "Designed hands-on labs integrating Semantic Kernel and Azure AI Services for multi-agent coordination and workflow automation.",
      "Developed examples showcasing autonomous task routing, context memory, and inter-agent collaboration.",
    ],
  },
  {
    role: "Mid-Senior Big Data Engineer",
    company: "LigaData",
    industry: "Telecommunications · Remote",
    period: "Aug 2023 – May 2024",
    current: false,
    highlights: [
      "Orchestrated Big Data workflows with Airflow, improving efficiency 35% and scalability.",
      "Implemented petabyte-scale analytics using Presto / Hive / Elastic Stack.",
      "Built and maintained 120+ automated ETL pipelines using Airflow and Spark; responsible for production monitoring, incident recovery, and maintaining 99.9% pipeline uptime.",
      "Mentored junior engineers and migrated 50+ workflows to internal tools.",
    ],
  },
  {
    role: "Data Scientist & ML Engineer",
    company: "Minapharma",
    industry: "Healthcare · Onsite",
    period: "Aug 2022 – Aug 2023",
    current: false,
    highlights: [
      "Engineered internal sales forecasting solution improving accuracy 120% with Prophet and Neural Networks.",
      "Built an ATS tool combining OCR and NLP that improved candidate matching precision by 85%.",
      "Developed phone detection model and face recognition model 2× faster than Azure, cutting costs 35%.",
    ],
  },
  {
    role: "AI Engineer",
    company: "CliniDo",
    industry: "Healthcare · Onsite",
    period: "Sep 2021 – Aug 2022",
    current: false,
    highlights: [
      "Engineered NER-driven medical symptom and Arabic sentiment analysis pipelines (88% / 97% accuracy), streamlining diagnostics and elevating patient feedback insights.",
      "Integrated Speech-API voice search, reducing query latency by 30% and enhancing user engagement in clinical workflows.",
    ],
  },
  {
    role: "AI Engineer",
    company: "Upwork",
    industry: "Freelance · Remote",
    period: "Oct 2020 – May 2022",
    current: false,
    highlights: [
      "Delivered ETL, EDA, and predictive models for 5+ clients across industries.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Daleel AI Chat Platform",
    tags: ["Generative AI", "RAG"],
    desc: "Enterprise-grade multimodal AI chat platform on AWS serving internal knowledge bases and e-commerce catalogs. Ingestion pipeline parses text, tables, and graphics via Gemma 4 Vision, indexing into vector DB and Knowledge Graph. Migrated baseline inference to vLLM with quantized local models (Gemma 4 2B, Qwen 3.5) and RabbitMQ async job scheduling.",
  },
  {
    title: "Speech-to-Speech AI Call Service",
    tags: ["Speech AI", "Real-Time"],
    desc: "End-to-end Speech-to-Speech AI call service that autonomously calls and tests AI voice agents. Built on LiveKit for real-time WebRTC, integrating OpenAI STS models with custom TTS/STT pipelines. Conducts automated conversations, evaluates responses, and provides comprehensive performance analytics for QA.",
  },
  {
    title: "Multi-Agent Banking RAG System",
    tags: ["Multi-Agent", "RAG"],
    desc: "Multi-agent RAG system with stateful memory and optimized query routing for financial services, combining vector search with structured data queries.",
  },
  {
    title: "Multi-Agent SQL Assistant",
    tags: ["Multi-Agent", "Generative AI"],
    desc: "Multi-agent system using LangChain and LangGraph to convert natural language to SQL, execute queries, and return natural language summaries. Embedding-based schema linking with ChromaDB, SQL validation, caching, and audit logging. Supports SQLite and MySQL.",
  },
  {
    title: "RAG-Based Question Generation System",
    tags: ["RAG", "Generative AI"],
    desc: "Production system generating high-quality MCQs from PDF documents. Uses Gemini Vision for multi-modal extraction, OpenAI embeddings with ChromaDB, and a multi-agent Generator + Evaluator orchestrator via LangGraph. Containerized with Docker, exposed via FastAPI.",
  },
  {
    title: "Real-Time Agentic Customer Service",
    tags: ["Multi-Agent", "Real-Time"],
    desc: "Real-time agentic workflow using LiveKit and Twilio to automate customer service, cutting handle time by half.",
  },
  {
    title: "Logistics Routing Optimization Engine",
    tags: ["ML", "Engineering"],
    desc: "Production-ready VRP solver using Google OR-Tools with capacity constraints, time windows, and multiple depots. Heuristic search via OSRM API. Deployed as FastAPI microservice with Docker. Reduced simulated delivery costs by 22%.",
  },
  {
    title: "Personalized Recommendation System",
    tags: ["RAG", "Generative AI"],
    desc: "RAG-enhanced recommendation models increasing relevance 78% and engagement 25% for a SaaS product (Python, LLMs).",
  },
  {
    title: "Medical Diagnosis Assistant",
    tags: ["ML", "NLP"],
    desc: "Disease identification system with 95% accuracy using clinical NLP and graph databases.",
  },
];

const ALL_TAGS = ["All", "Generative AI", "RAG", "Multi-Agent", "Speech AI", "Real-Time", "ML", "NLP", "Engineering"];

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  "Generative AI": { bg: "rgba(45,156,219,0.12)", text: "#1a7fc1" },
  RAG:             { bg: "rgba(39,174,96,0.12)",  text: "#1e8449" },
  "Multi-Agent":   { bg: "rgba(142,68,173,0.12)", text: "#7d3c98" },
  "Speech AI":     { bg: "rgba(231,76,60,0.12)",  text: "#c0392b" },
  "Real-Time":     { bg: "rgba(230,126,34,0.12)", text: "#ca6f1e" },
  ML:              { bg: "rgba(52,73,94,0.12)",   text: "#2c3e50" },
  NLP:             { bg: "rgba(22,160,133,0.12)", text: "#0e6655" },
  Engineering:     { bg: "rgba(41,128,185,0.12)", text: "#1a5276" },
};

const SKILL_GROUPS = [
  {
    category: "Programming",
    color: "#0A2F6C",
    items: ["Python", "SQL", "R", "NoSQL", "Scala", "C++", "Java", "C", "C#", "Git", "Pytest", "Unit Testing"],
  },
  {
    category: "Machine Learning",
    color: "#1565C0",
    items: [
      "XGBoost", "LightGBM", "Random Forest", "SVM", "k-Means", "PCA",
      "TensorFlow", "PyTorch", "Keras", "FastAI",
      "ARIMA", "Prophet", "LSTM", "Time Series",
      "Ensemble Learning", "Hyperparameter Tuning", "Sentiment Analysis",
    ],
  },
  {
    category: "Generative AI",
    color: "#2D9CDB",
    items: [
      "LLMs", "OpenAI", "Hugging Face", "Autogen", "LangChain", "LangGraph",
      "RAG", "Agentic Workflows", "BERT", "GPT", "Llama", "Gemini",
      "MCP", "LlamaIndex", "Semantic Kernel", "Pydantic", "Redis",
      "LoRA", "QLoRA", "PEFT", "RLHF", "DPO", "SFT",
      "vLLM", "ONNX", "TensorRT", "Quantization (INT4/INT8/GPTQ)",
    ],
  },
  {
    category: "Speech Technologies",
    color: "#00897B",
    items: [
      "LiveKit", "WebRTC", "OpenAI STS Models",
      "Speech-to-Speech Pipelines", "Voice AI Testing",
      "torchaudio", "librosa", "soundfile", "TTS/STT Systems", "Twilio",
    ],
  },
  {
    category: "Data Engineering",
    color: "#6A1B9A",
    items: ["Hadoop", "Apache Spark", "Airflow", "ChromaDB", "FAISS", "Big Data", "dbt", "DVC", "RabbitMQ", "Knowledge Graphs"],
  },
  {
    category: "MLOps & Experiment Tracking",
    color: "#E65100",
    items: [
      "Docker", "Kubernetes", "Flask", "FastAPI", "TensorFlow Serving",
      "CI/CD", "REST APIs", "Linux", "n8n", "Vertex AI",
      "Weights & Biases", "MLflow", "DeepSpeed", "FSDP", "AWS", "GCP",
    ],
  },
  {
    category: "Visualization",
    color: "#F39C12",
    items: ["Power BI", "Tableau", "Kibana", "Streamlit", "Matplotlib", "Seaborn", "Grafana", "Apache Superset"],
  },
  {
    category: "NLP & Computer Vision",
    color: "#C0392B",
    items: ["OCR", "Sentiment Analysis", "Text Classification", "YOLO", "SSD", "OpenCV", "Image Processing"],
  },
  {
    category: "Statistical Modeling",
    color: "#27AE60",
    items: ["Data Cleaning", "Feature Engineering", "Hypothesis Testing", "Regression", "Bayesian Inference"],
  },
];

// ── Small components ───────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold" style={{ color: "var(--portfolio-primary)" }}>{children}</h2>
      <div className="mt-3 mx-auto h-1 w-16 rounded-full" style={{ background: "var(--portfolio-secondary)" }} />
    </div>
  );
}

function Pill({ label }: { label: string }) {
  const c = TAG_COLORS[label];
  return (
    <span
      className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
      style={c ? { background: c.bg, color: c.text } : { background: "#f0f0f0", color: "#555" }}
    >
      {label}
    </span>
  );
}

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, toggleDark] = useDark();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const ids = NAV.map((n) => n.toLowerCase());
    const handler = () => {
      const scrollY = window.scrollY + 130;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollY) { setActiveSection(ids[i]); break; }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filter));

  const P  = "var(--portfolio-primary)";
  const S  = "var(--portfolio-secondary)";
  const T2 = "var(--portfolio-text-secondary)";
  const BG = "var(--portfolio-surface)";
  const navBg = dark ? "rgba(15,20,25,0.93)" : "rgba(255,255,255,0.93)";

  return (
    <div style={{ background: "var(--portfolio-bg)", color: "var(--portfolio-text-primary)", fontFamily: "Inter, sans-serif" }} className="min-h-screen">

      {/* ── NAV ── */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b" style={{ background: navBg, borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5 focus:outline-none">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: P }}>TN</div>
            <span className="font-semibold text-sm hidden sm:block" style={{ color: P }}>Tawadros Nemer</span>
          </button>

          <nav className="hidden md:flex items-center gap-0.5">
            {NAV.map((n) => (
              <button
                key={n}
                onClick={() => scrollTo(n.toLowerCase())}
                className="px-3 py-1.5 rounded-md text-sm font-medium transition-all"
                style={{
                  color: activeSection === n.toLowerCase() ? S : T2,
                  background: activeSection === n.toLowerCase() ? (dark ? "rgba(45,156,219,0.13)" : "rgba(45,156,219,0.09)") : "transparent",
                }}
              >
                {n}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={toggleDark} aria-label="Toggle theme"
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)" }}>
              {dark ? <Sun size={15} style={{ color: S }} /> : <Moon size={15} style={{ color: P }} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)" }}>
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t px-6 py-3 flex flex-col gap-0.5" style={{ background: dark ? "#0f1419" : "#fff", borderColor: "rgba(0,0,0,0.08)" }}>
            {NAV.map((n) => (
              <button key={n} onClick={() => scrollTo(n.toLowerCase())}
                className="text-left px-3 py-2 rounded-md text-sm font-medium" style={{ color: T2 }}>
                {n}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full opacity-[0.07] blur-3xl" style={{ background: S }} />
          <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full opacity-[0.07] blur-3xl" style={{ background: P }} />
        </div>

        <div className="relative max-w-2xl">
          <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-xl"
            style={{ background: `linear-gradient(135deg, ${P}, ${S})` }}>
            TN
          </div>

          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: S }}>
            AI Engineer · Python · PyTorch
          </p>

          <h1 className="text-5xl sm:text-6xl font-bold mb-5 leading-[1.1]" style={{ color: P }}>
            Tawadros<br />Nemer
          </h1>

          <p className="text-base leading-relaxed mb-8 max-w-lg mx-auto" style={{ color: T2 }}>
            AI Engineer with 5+ years building production AI systems — LLM/RAG pipelines, agentic workflows,
            and scalable ML across Azure, AWS, and GCP. Currently at{" "}
            <strong style={{ color: P }}>CNTXT.AI</strong>. Former{" "}
            <strong style={{ color: P }}>Microsoft</strong> Applied Scientist &{" "}
            <strong style={{ color: P }}>Udacity</strong> Course Author.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <button onClick={() => scrollTo("contact")}
              className="px-6 py-3 rounded-xl text-white font-semibold shadow hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${P}, ${S})` }}>
              Get in touch
            </button>
            <button onClick={() => scrollTo("projects")}
              className="px-6 py-3 rounded-xl font-semibold border transition-colors"
              style={{ color: P, borderColor: "rgba(10,47,108,0.22)" }}>
              View projects
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs" style={{ color: T2 }}>
            <span className="flex items-center gap-1.5"><MapPin size={13} /> Cairo, Egypt (open to relocate)</span>
            <span className="flex items-center gap-1.5"><Mail size={13} /> tawadrosgamal@gmail.com</span>
          </div>
        </div>

        <button onClick={() => scrollTo("about")} className="absolute bottom-10 animate-bounce" style={{ color: T2 }} aria-label="Scroll down">
          <ChevronDown size={22} />
        </button>
      </section>

      <div className="max-w-5xl mx-auto px-6">

        {/* ── ABOUT ── */}
        <section id="about" className="py-24">
          <SectionHeading>About</SectionHeading>
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-4" style={{ color: T2 }}>
              <p className="text-base leading-relaxed">
                I'm an <strong style={{ color: P }}>AI Engineer with 5+ years of experience</strong> in production AI,
                operations research, and scalable ML systems. I specialize in LLM/RAG architectures, agentic workflows,
                and full ML lifecycle delivery across cloud platforms.
              </p>
              <p className="text-base leading-relaxed">
                Most recently I led agentic workflows at <strong style={{ color: P }}>Microsoft's Edge Shopping team</strong> as
                the primary analytics contact for the Copilot Shopping Agent. Before that, I built forecasting, NLP, and computer
                vision systems across healthcare and telecoms.
              </p>
              <p className="text-base leading-relaxed">
                I authored <strong style={{ color: P }}>Course 4: Multi-Agents</strong> for the Azure Agentic AI Nanodegree at
                Udacity, and hold a <strong style={{ color: P }}>B.Sc. in Computer Science (Very Good with Honors)</strong> from
                Assiut University.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Arabic (Native)", "English (Fluent)", "German (Beginner)"].map((l) => (
                  <span key={l} className="text-xs px-3 py-1 rounded-full border font-medium"
                    style={{ borderColor: "rgba(10,47,108,0.18)", color: P, background: dark ? "rgba(10,47,108,0.1)" : "rgba(10,47,108,0.05)" }}>
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 gap-3">
              {[
                { value: "5+", label: "Years in AI" },
                { value: "7", label: "Roles held" },
                { value: "9+", label: "Projects shipped" },
                { value: "10k+", label: "Learners reached" },
              ].map((s) => (
                <div key={s.label} className="p-5 rounded-2xl border text-center"
                  style={{ background: BG, borderColor: "rgba(0,0,0,0.07)" }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: P }}>{s.value}</div>
                  <div className="text-xs leading-tight" style={{ color: T2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="py-24">
          <SectionHeading>Experience</SectionHeading>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 hidden md:block" style={{ left: "10px", width: "1px", background: "rgba(45,156,219,0.2)" }} />

            <div className="space-y-6">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="md:pl-9 relative">
                  {/* Dot */}
                  <div className="absolute hidden md:block w-5 h-5 rounded-full border-2"
                    style={{
                      left: 0, top: "24px",
                      background: exp.current ? S : (dark ? "#1A1F2E" : "#fff"),
                      borderColor: S,
                    }}
                  />

                  <div className="p-6 rounded-2xl border transition-shadow hover:shadow-md"
                    style={{ background: BG, borderColor: exp.current ? "rgba(45,156,219,0.25)" : "rgba(0,0,0,0.07)" }}>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base font-bold" style={{ color: P }}>{exp.role}</h3>
                          {exp.current && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                              style={{ background: S }}>CURRENT</span>
                          )}
                        </div>
                        <p className="text-sm font-semibold mt-0.5" style={{ color: S }}>{exp.company}</p>
                        <p className="text-xs mt-0.5" style={{ color: T2 }}>{exp.industry}</p>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full font-medium shrink-0"
                        style={{ background: "rgba(45,156,219,0.1)", color: S }}>
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: T2 }}>
                          <span className="shrink-0 mt-[3px]" style={{ color: S }}>▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="py-24">
          <SectionHeading>Projects</SectionHeading>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {ALL_TAGS.map((t) => (
              <button key={t} onClick={() => setFilter(t)}
                className="px-4 py-1.5 rounded-full text-sm font-medium border transition-all"
                style={{
                  background: filter === t ? S : "transparent",
                  color: filter === t ? "#fff" : T2,
                  borderColor: filter === t ? S : "rgba(0,0,0,0.14)",
                }}>
                {t}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <div key={`${filter}-${i}`}
                className="p-5 rounded-2xl border flex flex-col gap-3 hover:shadow-md transition-shadow"
                style={{ background: BG, borderColor: "rgba(0,0,0,0.07)" }}>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => <Pill key={t} label={t} />)}
                </div>
                <h3 className="font-bold text-sm leading-snug" style={{ color: P }}>{p.title}</h3>
                <p className="text-xs leading-relaxed flex-1" style={{ color: T2 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center py-12 text-sm" style={{ color: T2 }}>No projects match this filter.</p>
          )}
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="py-24">
          <SectionHeading>Skills</SectionHeading>
          <div className="space-y-9">
            {SKILL_GROUPS.map((g) => (
              <div key={g.category}>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: g.color }} />
                  <h3 className="text-xs font-bold tracking-widest uppercase" style={{ color: g.color }}>{g.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-lg text-sm border"
                      style={{
                        borderColor: `${g.color}28`,
                        color: dark ? "var(--portfolio-text-primary)" : g.color,
                        background: dark ? `${g.color}15` : `${g.color}0a`,
                      }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-24">
          <SectionHeading>Contact</SectionHeading>
          <div className="max-w-lg mx-auto text-center">
            <p className="mb-8 text-base leading-relaxed" style={{ color: T2 }}>
              Open to new opportunities, collaborations, speaking engagements, and interesting AI projects.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-6">
              {[
                { icon: <Mail size={17} />, label: "Email", value: "tawadrosgamal@gmail.com", href: "mailto:tawadrosgamal@gmail.com" },
                { icon: <Phone size={17} />, label: "Phone", value: "+201098759027", href: "tel:+201098759027" },
                { icon: <Linkedin size={17} />, label: "LinkedIn", value: "tawadrosnemer", href: "https://linkedin.com/in/tawadrosnemer" },
                { icon: <Github size={17} />, label: "GitHub", value: "TawadrosGamal", href: "https://github.com/TawadrosGamal" },
              ].map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 px-4 py-4 rounded-2xl border hover:shadow-md transition-shadow"
                  style={{ background: BG, borderColor: "rgba(0,0,0,0.08)", color: P }}>
                  <span style={{ color: S }}>{link.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: T2 }}>{link.label}</span>
                  <span className="text-xs font-medium text-center break-all" style={{ color: P }}>{link.value}</span>
                </a>
              ))}
            </div>

            <a href="/src/imports/Tawadros_Nemer_CV.pdf" download="Tawadros_Nemer_CV.pdf"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-white font-semibold shadow hover:opacity-90 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${P}, ${S})` }}>
              <Download size={16} /> Download CV
            </a>
          </div>
        </section>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t py-8 text-center text-xs" style={{ borderColor: "rgba(0,0,0,0.08)", color: T2 }}>
        <div className="flex flex-wrap items-center justify-center gap-1">
          <span>© {new Date().getFullYear()} Tawadros Nemer</span>
          <span>·</span>
          <span className="flex items-center gap-1"><MapPin size={11} /> Cairo, Egypt</span>
          <span>·</span>
          <span>Open to relocate</span>
        </div>
      </footer>
    </div>
  );
}
