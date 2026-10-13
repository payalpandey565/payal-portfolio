import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Cloud,
  Code2,
  Database,
  Download,
  ArrowDownToLine,
  FileText,
  Mail,
  Menu,
  Network,
  Radio,
  ShieldCheck,
  Workflow,
  X,
  Zap,
} from "lucide-react";

function GithubIcon({ size = 20, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.14-2.97-.11-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.13a10.6 10.6 0 0 1 5.56 0c2.12-1.43 3.05-1.13 3.05-1.13.61 1.53.22 2.66.11 2.94.71.77 1.14 1.76 1.14 2.97 0 4.27-2.6 5.22-5.08 5.5.4.35.75 1.02.75 2.06V22c0 .29.2.64.76.53A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18H5V9h3v9ZM6.5 7.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.38c0-1.04-.02-2.37-1.45-2.37-1.45 0-1.67 1.13-1.67 2.29V18h-3V9h2.88v1.23h.04c.4-.71 1.38-1.46 2.84-1.46 3.04 0 3.36 2 3.36 4.6V18Z" />
    </svg>
  );
}

const projects = [
  {
    number: "01",
    name: "DataSentinel AI",
    category: "DATA ENGINEERING + AI",
    description:
      "An AI-powered data quality monitoring platform that ingests live data from REST APIs, processes it through Bronze, Silver, and Gold layers, and uses Google Gemini to investigate anomalies, identify potential root causes, and suggest corrective actions through an interactive dashboard.",
    stack: [
      "Python",
      "PySpark",
      "REST APIs",
      "Medallion Architecture",
      "Google Gemini",
      "Streamlit",
      "Plotly",
    ],
    github: "https://github.com/payalpandey565/datasentinel-ai",
    live: "https://datasentinel-ai-kudzzpeb7j8sjyrdaedzk8.streamlit.app/",
    cardStyle: "bg-[#102b30]",
  },
  {
    number: "02",
    name: "CareerCraft AI",
    category: "GENERATIVE AI",
    description:
      "An AI-powered career assistant designed to support job matching, resume tailoring, skill-gap analysis, and career guidance. Built around Google's Gemini ecosystem, it brings together AI-assisted career workflows and personalized recommendations.",
    stack: [
      "Python",
      "Google Gemini",
      "Google ADK",
      "Generative AI",
      "Career Intelligence",
    ],
    github: "https://github.com/payalpandey565/buildwithgemini-careerCraftAI",
    cardStyle: "bg-[#211a35]",
  },
  {
    number: "03",
    name: "Azure E-Commerce Pipeline",
    category: "CLOUD DATA ENGINEERING",
    description:
      "An end-to-end cloud data engineering project that orchestrates data ingestion with Azure Data Factory, stores data in Azure Data Lake Storage, and transforms it using PySpark in Azure Databricks. Implements a Bronze–Silver–Gold architecture to prepare analytics-ready data for Power BI dashboards.",
    stack: [
      "Azure Data Factory",
      "ADLS",
      "Azure Databricks",
      "PySpark",
      "Delta Lake",
      "Medallion Architecture",
      "Power BI",
    ],
    github: "https://github.com/payalpandey565/azure-e-commerce-project",
    cardStyle: "bg-[#152640]",
  },
  {
    number: "04",
    name: "Entertainment Analytics",
    category: "DATA ANALYTICS",
    description:
      "An API-driven analytics pipeline that extracts movie and cast data from TMDB, processes it using Python and Pandas, and organizes datasets into different layers. Includes data-quality checks, analytical transformations, and an interactive Streamlit dashboard for exploring movie trends and insights.",
    stack: [
      "Python",
      "Pandas",
      "TMDB API",
      "Data Quality",
      "Medallion Architecture",
      "Streamlit",
    ],
    github:
      "https://github.com/payalpandey565/entertainment-analytics-pipeline",
    cardStyle: "bg-[#192d27]",
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Programming",
    color: "text-violet-300",
    skills: [
      "SQL",
      "Python",
      "PySpark",
      "Spark SQL",
      "Complex Queries",
      "Joins",
      "Query Performance Tuning",
    ],
  },
  {
    icon: Cloud,
    title: "Azure Cloud",
    color: "text-sky-300",
    skills: [
      "Microsoft Azure",
      "Azure Data Lake Storage (ADLS Gen2)",
      "Azure Data Factory (ADF)",
      "Azure SQL Database",
      "Azure Storage Services",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    color: "text-teal-300",
    skills: [
      "Databricks",
      "ETL / ELT",
      "Data Pipelines",
      "Data Modelling",
      "Delta Lake",
      "Medallion Architecture",
      "Data Warehousing",
      "Dimensional Modelling",
      "Star Schema",
      "Snowflake Schema",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Intelligence",
    color: "text-emerald-300",
    skills: [
      "Generative AI",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "LLM Applications",
      "AI Agents",
      "Prompt Engineering",
      "AI-assisted Investigation",
    ],
  },
  {
    icon: Code2,
    title: "Tools & Visualization",
    color: "text-amber-300",
    skills: [
      "Git",
      "GitHub",
      "CI/CD Concepts",
      "Data Visualization",
      "Streamlit",
      "Dashboard Development",
    ],
  },
];

const pipelineStages = [
  { label: "DATA SOURCE", detail: "Live / external data", icon: Database },
  { label: "INGESTION", detail: "Collect & validate", icon: Workflow },
  { label: "TRANSFORM", detail: "Clean & structure", icon: Code2 },
  { label: "OBSERVABILITY", detail: "Detect anomalies", icon: ShieldCheck },
  { label: "INTELLIGENCE", detail: "Investigate signals", icon: BrainCircuit },
];

function calculateExperienceDuration(startDate, currentDate = new Date()) {
  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();

  // Adjust for the day of the month
  if (currentDate.getDate() < startDate.getDate()) {
    months--;
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  return { years, months };
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.24em] text-teal-300">
        <span className="h-px w-6 bg-teal-300" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function PipelineVisual() {
  const [activeStage, setActiveStage] = useState(null);

  const repo = "https://github.com/payalpandey565/datasentinel-ai";
  const rawRepo =
    "https://raw.githubusercontent.com/payalpandey565/datasentinel-ai/main";

  const liveDashboard =
    "https://datasentinel-ai-kudzzpeb7j8sjyrdaedzk8.streamlit.app/";

  const stageResources = [
    {
      label: "DATA SOURCE",
      detail: "Live / external data",
      icon: Database,
      description:
        "Connects to live product and cart APIs to collect raw data for downstream processing.",
      screenshot: `${rawRepo}/screenshots/06_data_explorer.png`,
      source: `${repo}/blob/main/pipeline.py`,
    },
    {
      label: "INGESTION",
      detail: "Collect and validate",
      icon: Workflow,
      description:
        "Ingests external API data and starts the data pipeline, making the incoming data available for subsequent processing.",
      screenshot: `${rawRepo}/screenshots/02_pipeline_monitor.png`,
      source: `${repo}/blob/main/pipeline.py`,
    },
    {
      label: "TRANSFORM",
      detail: "Clean and structure",
      icon: Code2,
      description:
        "Processes raw data through the medallion architecture, preparing structured datasets for analytics.",
      screenshot: `${rawRepo}/screenshots/03_business_analytics.png`,
      source: `${repo}/blob/main/silver_layer.py`,
    },
    {
      label: "OBSERVABILITY",
      detail: "Detect anomalies",
      icon: ShieldCheck,
      description:
        "Evaluates data quality and helps identify issues such as missing values, anomalies, and potential data inconsistencies.",
      screenshot: `${rawRepo}/screenshots/04_data_quality.png`,
      source: `${repo}/blob/main/data_quality.py`,
    },
    {
      label: "INTELLIGENCE",
      detail: "Investigate signals",
      icon: BrainCircuit,
      description:
        "Uses Gemini-powered investigation to help interpret data quality findings and provide context for troubleshooting.",
      screenshot: `${rawRepo}/screenshots/05_ai_investigation.png`,
      source: `${repo}/blob/main/ai_investigator.py`,
    },
  ];

  const selectedResource =
    activeStage !== null ? stageResources[activeStage] : null;

  return (
    <div className="relative w-full min-w-0">
      {/* Pipeline card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-cyan-950/20 sm:p-6">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

        {/* Header */}
        <div className="relative mb-6 flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Live project
              </span>
            </div>

            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              System Overview
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Intelligent data pipeline monitoring
            </p>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
            <ActivityIcon />
          </div>
        </div>

        {/* Pipeline stages and expandable details */}
        <div className="relative">
          <div className="space-y-3">
            {stageResources.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = activeStage === index;

              return (
                <div
                  key={stage.label}
                  className={`relative rounded-2xl border transition-colors duration-200 ${
                    isActive
                      ? "border-cyan-400/50 bg-cyan-400/[0.08]"
                      : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.045]"
                  }`}
                >
                  {/* Stage button */}
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`pipeline-stage-${index}`}
                    onClick={() => setActiveStage(isActive ? null : index)}
                    className="flex w-full items-center gap-3 p-4 text-left sm:gap-4 pipeline-stage "
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                        isActive
                          ? "border-cyan-400/30 bg-cyan-400/15 text-cyan-300"
                          : "border-white/10 bg-slate-900 text-slate-300"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold tracking-[0.14em] text-slate-200 sm:text-sm">
                        {stage.label}
                      </div>

                      <div className="mt-1 text-xs text-slate-500 sm:text-sm">
                        {stage.detail}
                      </div>
                    </div>

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isActive
                          ? "rotate-90 border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                          : "border-white/10 text-slate-500"
                      }`}
                    >
                      <ChevronRight size={17} />
                    </div>
                  </button>

                  {/* Expanded stage details */}
                  {isActive && (
                    <div
                      id={`pipeline-stage-${index}`}
                      className="border-t border-white/10 px-4 pb-5 pt-4 sm:px-5"
                    >
                      <p className="text-sm leading-6 text-slate-300">
                        {stage.description}
                      </p>

                      {/* Screenshot */}
                      <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-slate-900">
                        <img
                          src={stage.screenshot}
                          alt={`${stage.label} dashboard preview`}
                          className="block h-auto max-h-64 w-full object-cover object-top"
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      </div>

                      {/* Action buttons */}
                      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <a
                          href={liveDashboard}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                        >
                          Open Live Dashboard
                          <ArrowUpRight size={16} />
                        </a>

                        <a
                          href={stage.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-center text-sm font-medium text-white transition hover:border-cyan-400/40 hover:bg-white/[0.08]"
                        >
                          <GithubIcon />
                          Source Code
                          <ArrowUpRight size={15} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer information only — no global action buttons */}
        <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CircleDot size={14} className="text-cyan-400" />
            <span>Interactive pipeline architecture</span>
          </div>

          <span className="text-xs text-slate-500">
            {String(stageResources.length).padStart(2, "0")} stages
          </span>
        </div>
      </div>
    </div>
  );
}

/* Small decorative icon for the DataSentinel AI card */
function ActivityIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-6 w-6 text-cyan-300"
    >
      <path
        d="M3 12h4l3-8 4 16 3-8h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const aboutCards = [
  {
    label: "01 / WHAT I'VE LEARNED AT WORK",
    title: "What I've learned at work",
    description:
      "My work has helped me develop a practical understanding of data processing, troubleshooting, data quality, and the importance of reliable workflows. I've also gained exposure to cloud ecosystem while supporting data operations and validation activities.",
    details: [
      "Data processing and troubleshooting",
      "SQL development and data validation",
      "Data quality and reliable workflows",
      "Cloud ecosystem exposure",
    ],
    accent: "cyan",
  },
  {
    label: "02 / WHAT I BUILD ON MY OWN",
    title: "What I build on my own",
    description:
      "Beyond my professional responsibilities, I enjoy learning by building. Through hands-on projects, I've explored Python, PySpark, ETL pipelines, cloud data engineering, and Generative AI.",
    details: [
      "Python and PySpark projects",
      "ETL pipelines and data processing",
      "Cloud data engineering",
      "Generative AI applications",
    ],
    accent: "blue",
  },
  {
    label: "03 / HOW I WORK",
    title: "Curious, adaptable, self-driven",
    description:
      "I'm a curious, adaptable, and self-driven learner who enjoys breaking down unfamiliar problems, experimenting with new technologies, and turning concepts into working solutions. I value feedback, continuous improvement, and understanding not just how something works, but why.",
    details: [
      "Break down unfamiliar problems",
      "Experiment with new technologies",
      "Learn through hands-on practice",
      "Value feedback and improvement",
    ],
    accent: "violet",
  },
  {
    label: "04 / MY CURRENT FOCUS",
    title: "Learning with a clear direction",
    description:
      "Strengthening my data engineering expertise across SQL, Python, PySpark, and Azure while exploring practical applications of Generative AI in data platforms.",
    details: [
      "SQL and data workflows",
      "Python and PySpark",
      "Azure data engineering",
      "Generative AI in data platforms",
    ],
    accent: "teal",
  },
];

function AboutRotatingCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % aboutCards.length);
    }, 10000);

    return () => window.clearInterval(timer);
  }, []);

  const activeCard = aboutCards[activeIndex];

  const accentClasses = {
    cyan: {
      label: "text-cyan-300",
      icon: "bg-cyan-400",
      border: "border-cyan-300/20",
      background: "bg-cyan-300/[0.06]",
    },
    blue: {
      label: "text-blue-300",
      icon: "bg-blue-400",
      border: "border-blue-300/20",
      background: "bg-blue-300/[0.06]",
    },
    violet: {
      label: "text-violet-300",
      icon: "bg-violet-400",
      border: "border-violet-300/20",
      background: "bg-violet-300/[0.06]",
    },
    teal: {
      label: "text-teal-300",
      icon: "bg-teal-400",
      border: "border-teal-300/20",
      background: "bg-teal-300/[0.06]",
    },
  };

  const accent = accentClasses[activeCard.accent];

  return (
    <div className="mt-7">
      {/* Compact topic selector */}
      <div className="mb-4 flex flex-wrap gap-2" aria-label="About me topics">
        {aboutCards.map((card, index) => (
          <button
            key={card.label}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-pressed={activeIndex === index}
            className={`rounded-full border px-3 py-2 text-[10px] font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
              activeIndex === index
                ? `${accentClasses[card.accent].border} ${accentClasses[card.accent].background} ${accentClasses[card.accent].label}`
                : "border-white/[0.08] bg-white/[0.02] text-slate-500 hover:border-cyan-400/30 hover:text-cyan-200"
            }`}
          >
            {["Work", "Projects", "How I work", "Current focus"][index]}
          </button>
        ))}
      </div>

      {/* Compact description card with pipeline-style hover effect */}
      <div
        className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-3.5 shadow-xl shadow-black/10 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.035] hover:shadow-lg hover:shadow-cyan-950/20 sm:px-6 sm:py-4 ${accent.border}`}
        aria-live="polite"
        aria-atomic="true"
      >
        {/* Subtle cyan glow on hover */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/0 blur-3xl transition-colors duration-500 group-hover:bg-cyan-400/[0.10]" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="relative"
          >
            <p
              className={`text-[10px] font-semibold tracking-[0.16em] ${accent.label}`}
            >
              {activeCard.label}
            </p>

            <h3 className="mt-3 text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-50 sm:text-xl">
              {activeCard.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {activeCard.description}
            </p>

            <div className="my-4 h-px w-full bg-white/[0.07] transition-colors duration-300 group-hover:bg-cyan-300/15" />

            <ul className="grid gap-2 sm:grid-cols-2">
              {activeCard.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-2.5 text-xs leading-5 text-slate-300"
                >
                  <span
                    className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${accent.icon}`}
                  />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        {/* Navigation indicators */}
        <div className="relative mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
          <span className="text-[10px] tracking-wide text-slate-800">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(aboutCards.length).padStart(2, "0")}
          </span>

          <div className="flex items-center gap-1.5">
            {aboutCards.map((card, index) => (
              <button
                key={card.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${card.title}`}
                aria-pressed={activeIndex === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-6 bg-cyan-300"
                    : "w-1.5 bg-slate-600 hover:bg-cyan-400/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Calculate experience from the actual joining date.
  const joiningDate = new Date(2025, 5, 1);

  const [experienceDuration, setExperienceDuration] = useState(() =>
    calculateExperienceDuration(joiningDate),
  );

  // Refresh automatically so the experience duration stays current.
  useEffect(() => {
    const updateExperience = () => {
      setExperienceDuration(calculateExperienceDuration(joiningDate));
    };

    updateExperience();

    const timer = window.setInterval(updateExperience, 60 * 60 * 1000);

    return () => window.clearInterval(timer);
  }, []);

  const experienceText = [
    experienceDuration.years > 0
      ? `${experienceDuration.years} ${
          experienceDuration.years === 1 ? "year" : "years"
        }`
      : null,
    experienceDuration.months > 0
      ? `${experienceDuration.months} ${
          experienceDuration.months === 1 ? "month" : "months"
        }`
      : null,
  ]
    .filter(Boolean)
    .join(", ");

  const navigation = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];

  const contributions = [
    {
      number: "01",
      title: "SQL workflows & BigQuery",
      text: "Working with SQL workflows, operational data processing, query improvements, and validation of expected results. Building practical experience with BigQuery and SQL-based data operations.",
      tags: ["SQL", "BigQuery", "Data Validation"],
      accent: "cyan",
      icon: Database,
    },
    {
      number: "02",
      title: "Cloud data operations",
      text: "Working with GCP and BigQuery while gaining exposure to Azure Databricks and Azure Data Lake Storage environments for pipeline monitoring, execution tracking, and data movement.",
      tags: ["GCP", "BigQuery", "Azure Databricks", "ADLS"],
      accent: "blue",
      icon: Cloud,
    },
    {
      number: "03",
      title: "Data quality & troubleshooting",
      text: "Supporting data freshness validation, schema drift identification, anomaly investigation, and root-cause analysis to help maintain reliable data workflows.",
      tags: ["Data Quality", "Freshness Checks", "RCA"],
      accent: "violet",
      icon: ShieldCheck,
    },
    {
      number: "04",
      title: "Environment-specific testing",
      text: "Helping investigate unexpected downstream pipeline execution by examining environment-specific variables, pipeline dependencies, and execution behaviour across environments.",
      tags: ["QA Testing", "Dependencies", "Monitoring"],
      accent: "amber",
      icon: Workflow,
    },
  ];

  const contributionAccents = {
    cyan: {
      number: "text-cyan-200",
      icon: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
      glow: "group-hover:border-cyan-200/40",
      line: "group-hover:bg-cyan-200/70",
      tag: "group-hover:border-cyan-200/25 group-hover:bg-cyan-200/10",
    },
    blue: {
      number: "text-sky-200",
      icon: "border-sky-300/30 bg-sky-300/10 text-sky-200",
      glow: "group-hover:border-sky-200/40",
      line: "group-hover:bg-sky-200/70",
      tag: "group-hover:border-sky-200/25 group-hover:bg-sky-200/10",
    },
    violet: {
      number: "text-violet-200",
      icon: "border-violet-300/30 bg-violet-300/10 text-violet-200",
      glow: "group-hover:border-violet-200/40",
      line: "group-hover:bg-violet-200/70",
      tag: "group-hover:border-violet-200/25 group-hover:bg-violet-200/10",
    },
    amber: {
      number: "text-amber-200",
      icon: "border-amber-300/30 bg-amber-300/10 text-amber-200",
      glow: "group-hover:border-amber-200/40",
      line: "group-hover:bg-amber-200/70",
      tag: "group-hover:border-amber-200/25 group-hover:bg-amber-200/10",
    },
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#070b12] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#070b12]/90 backdrop-blur-xl">
        <nav
          className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label="Payal Pandey — Home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold tracking-tight text-cyan-300">
              PP
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wide text-white sm:text-base">
                Payal Pandey
              </span>
              <span className="mt-0.5 text-[10px] font-medium tracking-[0.16em] text-slate-400 uppercase">
                Programmer Analyst · Data Engineer
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-lg text-slate-800 transition hover:text-teal-200"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-lg border border-teal-300/30 px-4 py-2.5 text-xs font-medium text-teal-200 transition hover:bg-teal-300/10 sm:flex"
          >
            Let's connect <ArrowUpRight size={14} />
          </a>

          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-slate-300 md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/[0.07] bg-[#0b111c] px-5 py-4 md:hidden">
            {navigation.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm text-slate-300"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section
          id="home"
          className="hero-gradient relative isolate scroll-mt-24"
        >
          <div className="glow pointer-events-none absolute inset-0 -z-10" />
          <div className="grid-background pointer-events-none absolute inset-0 -z-10 opacity-50" />

          <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-12 lg:pt-28">
            <motion.div
              className="min-w-0 self-start"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-xs font-medium tracking-[0.14em] text-cyan-300 uppercase">
                  Data Engineering · Cloud · AI
                </span>
              </div>

              <h1 className="max-w-4xl text-6xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-5xl lg:text-[68px]">
                Building reliable
                <br />
                data workflows.
                <br />
                <span className="text-gradient">Engineering with purpose.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-justify text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Hello there! I’m Payal, a Data Engineer at heart and Programmer
                Analyst at Cognizant who turns messy data into something you can
                trust. I spend my days on SQL workflows, data validation, and
                production data processing. After hours, I build cloud pipelines
                with Azure Databricks, PySpark, and Medallion Architecture.
                Lately, I’ve been adding a sprinkle of AI to my pipelines with
                Gemini.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/10 transition-colors duration-200 hover:bg-cyan-300"
                >
                  Explore My Projects
                  <ArrowRight size={16} />
                </a>

                <a
                  href="https://github.com/payalpandey565"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-5 py-3.5 text-sm font-medium text-slate-200 transition hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <GithubIcon size={17} />
                  GitHub
                  <ArrowUpRight size={14} className="text-slate-500" />
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/[0.08] pt-6">
                <div>
                  <p className="text-xs font-medium text-slate-200">
                    SQL & Data Workflows
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Engineering foundations
                  </p>
                </div>

                <div className="hidden h-9 w-px bg-white/10 sm:block" />

                <div>
                  <p className="text-xs font-medium text-slate-200">
                    Azure & Databricks
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Cloud data ecosystem
                  </p>
                </div>

                <div className="hidden h-9 w-px bg-white/10 sm:block" />

                <div>
                  <p className="text-xs font-medium text-slate-200">
                    Data + AI
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Building and learning
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="pipeline-effects relative min-w-0 self-start"
            >
              <PipelineVisual />
            </motion.div>
          </div>

          <div className="border-y border-white/[0.08] bg-[#0b111c]">
            <div className="mx-auto flex max-w-7xl flex-wrap items-stretch px-5 sm:px-8 lg:px-12">
              <div className="flex items-center border-b border-white/[0.08] py-4 pr-6 sm:border-b-0 sm:border-r sm:py-5">
                <p className="whitespace-nowrap text-[10px] font-semibold tracking-[0.18em] text-slate-400">
                  BUILDING WITH
                </p>
              </div>

              {[
                "SQL",
                "PYTHON",
                "PYSPARK",
                "AZURE",
                "DATABRICKS",
                "GENERATIVE AI",
              ].map((technology) => (
                <div
                  key={technology}
                  className="group flex flex-1 items-center justify-center border-white/[0.08] px-3 py-4 transition-colors duration-300 hover:bg-white/[0.035] sm:border-r sm:py-5 last:border-r-0"
                >
                  <span className="whitespace-nowrap text-[10px] font-medium tracking-[0.12em] text-slate-400 transition-colors duration-300 group-hover:text-cyan-300 sm:text-[11px]">
                    {technology}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ABOUT SECTION */}
        <section
          id="about"
          className="relative isolate scroll-mt-24 overflow-hidden border-y border-white/[0.06] bg-[#0b111c] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[120px]" />
            <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[130px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b111c]/20 to-[#080d16]/60" />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div className="min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-cyan-300">
                  01 / ABOUT ME
                </p>

                <h2 className="max-w-2xl text-xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Driven by data.
                  <span className="mt-2 block text-slate-400">
                    Defined by curiosity.
                  </span>
                  <span className="mt-2 block text-cyan-300">
                    Crafting intelligent data solutions.
                  </span>
                </h2>
              </motion.div>

              <AboutRotatingCards />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-400/[0.12] via-blue-500/[0.06] to-violet-500/[0.12] blur-2xl"
              />

              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#101a29] p-2 shadow-2xl shadow-black/30 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.035] hover:shadow-lg hover:shadow-cyan-950/20">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br from-[#15283c] via-[#111c2e] to-[#19152f]">
                  <img
                    src="/payal-profile.png"
                    alt="Payal Pandey"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d16]/90 via-transparent to-transparent"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      Payal Pandey
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* SKILLS SECTION */}
        <section
          id="skills"
          className="scroll-mt-24 border-y border-white/[0.06] bg-[#0b1c24] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="02 / CAPABILITIES"
              title="The engineering toolkit."
              description="Technologies and concepts across my professional experience and personal projects. Hands-on depth varies by tool."
            />

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;

                return (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={`group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#111827] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-yellow-300/50 hover:bg-yellow-300/[0.035] hover:shadow-[0_0_28px_rgba(253,224,71,0.10)] sm:p-7 ${
                      index < 3
                        ? "lg:col-span-2"
                        : index === 3
                          ? "lg:col-start-2 lg:col-span-2"
                          : "lg:col-start-4 lg:col-span-2"
                    }`}
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300/0 to-transparent transition-all duration-300 group-hover:via-yellow-300/80"
                    />

                    <div
                      className={`mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.035] transition-all duration-300 group-hover:border-yellow-300/30 group-hover:bg-yellow-300/10 group-hover:text-yellow-200 ${group.color}`}
                    >
                      <Icon size={21} />
                    </div>

                    <h3 className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-yellow-100">
                      {group.title}
                    </h3>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[11px] leading-4 text-slate-400 transition-all duration-200 group-hover:border-yellow-200/15 group-hover:bg-yellow-100/[0.045] group-hover:text-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div
                      aria-hidden="true"
                      className="mt-6 h-px w-8 bg-slate-700 transition-all duration-300 group-hover:w-16 group-hover:bg-yellow-300/70"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="relative isolate scroll-mt-24 overflow-hidden border-y border-white/[0.06] bg-gradient-to-br from-[#101b2d] via-[#0b1220] to-[#111827] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.055] blur-[140px]" />
            <div className="absolute -right-40 top-[25%] h-[500px] w-[500px] rounded-full bg-yellow-400/[0.035] blur-[150px]" />
            <div className="absolute bottom-[-180px] left-[25%] h-[400px] w-[600px] rounded-full bg-blue-600/[0.06] blur-[150px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080d16]/20 to-[#080d16]/50" />
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <SectionHeading
                eyebrow="03 / SELECTED WORK"
                title="From pipelines to intelligence."
                description="Projects exploring data engineering, analytics, and practical AI applications."
              />

              <a
                href="https://github.com/payalpandey565"
                target="_blank"
                rel="noreferrer"
                className="mb-12 inline-flex items-center gap-2 text-xs text-slate-300 transition-colors hover:text-yellow-200"
              >
                All repositories <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] ${project.cardStyle} p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-yellow-300/50 hover:shadow-[0_0_30px_rgba(253,224,71,0.14)] sm:p-8`}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300/0 to-transparent transition-all duration-300 group-hover:via-yellow-300/80"
                  />

                  <div className="relative flex items-start justify-between gap-3">
                    <span className="text-xs tracking-[0.15em] text-slate-500 transition-colors group-hover:text-yellow-200/80">
                      / PROJECT_{project.number}
                    </span>

                    <span className="rounded-full border border-white/[0.09] bg-white/[0.025] px-3 py-1.5 text-[9px] font-medium tracking-[0.12em] text-slate-400 transition-all duration-300 group-hover:border-yellow-300/30 group-hover:bg-yellow-300/[0.07] group-hover:text-yellow-200">
                      {project.category}
                    </span>
                  </div>

                  <div className="relative mt-7 flex flex-1 flex-col">
                    <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-100 sm:text-2xl">
                      {project.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-white/[0.08] bg-[#080d16]/60 px-2.5 py-1.5 text-[10px] text-slate-400 transition-all duration-200 group-hover:border-yellow-200/20 group-hover:bg-yellow-100/[0.045] group-hover:text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.08] pt-5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium text-slate-200 transition-colors hover:text-yellow-200"
                      >
                        <GithubIcon size={15} />
                        Explore repository
                        <ArrowUpRight size={14} />
                      </a>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-yellow-300/25 bg-yellow-300/[0.06] px-3 py-2 text-xs font-medium text-yellow-200 transition-all duration-300 hover:border-yellow-300/50 hover:bg-yellow-300/10 hover:shadow-[0_0_18px_rgba(253,224,71,0.15)]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
                          Live Demo
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-6 h-px w-10 bg-yellow-300/0 transition-all duration-300 group-hover:w-24 group-hover:bg-yellow-300/70 sm:left-8"
                  />
                </motion.article>
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-slate-500">
              Explore the linked repositories for implementation details,
              architecture, and project documentation. DataSentinel AI also
              includes a live demo.
            </p>
          </div>
        </section>
        {/* EXPERIENCE SECTION — UPDATED */}
        <section
          id="experience"
          className="relative isolate scroll-mt-24 overflow-hidden border-y border-white/[0.08] bg-gradient-to-br from-[#162b3d] via-[#182d3b] to-[#292741] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          {/* Animated ambient background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <motion.div
              animate={{
                x: [0, 35, 0],
                y: [0, 25, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-32 -top-32 h-[450px] w-[450px] rounded-full bg-cyan-400/[0.12] blur-[110px]"
            />

            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, -20, 0],
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-violet-400/[0.12] blur-[130px]"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.015] via-transparent to-[#090e18]/25" />

            {/* Subtle grid texture */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
                backgroundSize: "52px 52px",
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="04 / EXPERIENCE"
              title="Professional foundations."
            />

            <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
              {/* Professional experience card */}
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.16] bg-gradient-to-br from-white/[0.12] via-white/[0.07] to-cyan-300/[0.035] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:shadow-cyan-950/20 sm:p-8"
              >
                {/* Card glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/[0.08] blur-[70px] transition-all duration-500 group-hover:bg-cyan-300/[0.16]"
                />

                <div className="relative flex items-start justify-between gap-4">
                  {/* Cognizant logo with text fallback */}
                  <div className="flex min-h-14 min-w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.95] px-3 py-2 shadow-lg shadow-black/10">
                    <img
                      src="/cognizant-logo.png"
                      alt="Cognizant logo"
                      className="h-auto w-28 object-contain"
                    />

                    <span
                      className="hidden text-sm font-bold tracking-tight text-[#0033a0]"
                      aria-label="Cognizant"
                    >
                      cognizant
                    </span>
                  </div>

                  <span className="rounded-full border border-cyan-100/20 bg-cyan-100/[0.08] px-3 py-1.5 text-[9px] font-semibold tracking-[0.12em] text-cyan-100 sm:text-[10px]">
                    PROFESSIONAL EXPERIENCE
                  </span>
                </div>

                <div className="relative mt-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Cognizant
                  </h3>

                  <p className="mt-2 text-sm font-medium text-cyan-200">
                    Programmer Analyst
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Supporting SQL workflows, data validation, cloud data
                    operations, and production monitoring while building
                    practical experience with enterprise data systems.
                  </p>
                </div>

                {/* Joining date and experience duration */}
                <div className="relative mt-7 rounded-2xl border border-white/[0.12] bg-black/[0.12] p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-200/25 bg-cyan-200/10 text-cyan-100">
                      <CheckCircle2 size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold tracking-[0.16em] text-slate-400">
                        EXPERIENCE TO DATE
                      </p>

                      <p
                        className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl"
                        aria-live="polite"
                      >
                        {experienceText}
                      </p>

                      <p className="mt-2 text-xs text-slate-400">
                        Since June 2025
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technology labels */}
                <div className="relative mt-6">
                  <p className="mb-3 text-[10px] font-semibold tracking-[0.16em] text-slate-400">
                    PROFESSIONAL FOCUS
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["SQL", "BigQuery", "GCP", "Azure", "Data Quality"].map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/[0.13] bg-white/[0.045] px-3 py-2 text-[11px] text-slate-200 transition-colors duration-200 hover:border-cyan-200/35 hover:bg-cyan-200/[0.08]"
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="relative mt-7 flex items-center gap-2 border-t border-white/[0.12] pt-5 text-xs text-slate-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                  Data Engineering & Operations
                </div>
              </motion.div>

              {/* Areas of contribution */}
              <div>
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl lg:text-3xl">
                      Areas of contribution
                    </h3>
                  </div>

                  <span className="text-[10px] text-slate-400">
                    04 FOCUS AREAS
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {contributions.map((item, index) => {
                    const Icon = item.icon;
                    const accent = contributionAccents[item.accent];

                    return (
                      <motion.article
                        key={item.number}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.08,
                        }}
                        className={`group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.055] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.09] ${accent.glow}`}
                      >
                        {/* Hover highlight */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent transition-all duration-300 group-hover:via-white/40"
                        />

                        <div className="flex items-start justify-between gap-3">
                          <span
                            className={`text-xs font-semibold tracking-[0.16em] ${accent.number}`}
                          >
                            {item.number}
                          </span>

                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors duration-300 ${accent.icon}`}
                          >
                            <Icon size={19} />
                          </div>
                        </div>

                        <h4 className="mt-5 text-sm font-semibold leading-6 text-white transition-colors duration-300 group-hover:text-cyan-50">
                          {item.title}
                        </h4>

                        <p className="mt-3 text-xs leading-6 text-slate-300">
                          {item.text}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`rounded-md border border-white/[0.10] bg-white/[0.035] px-2 py-1 text-[9px] text-slate-300 transition-colors duration-300 ${accent.tag}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div
                          aria-hidden="true"
                          className={`mt-5 h-px w-8 bg-white/20 transition-all duration-300 group-hover:w-16 ${accent.line}`}
                        />
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CERTIFICATIONS SECTION */}
        <section
          id="certifications"
          className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 lg:py-28"
        >
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="05 / CREDENTIALS"
              title="Learning, applied."
              description="Cloud, data engineering, and AI learning backed by certifications and hands-on participation."
            />

            <div className="mt-10 space-y-5">
              {[
                {
                  number: "01",
                  name: "Build with Gemini",
                  issuer: "Google",
                  detail:
                    "Participated in the Build with Gemini event and earned a skill badge through hands-on AI exploration.",
                  type: "AI · Generative AI",
                  link: "https://www.linkedin.com/posts/payal-pandey-839a64253_buildwithgemini-googlegemini-cognizant-activity-7508161842398101504-Cjbz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6gba0BRWIPesINn5h0OMG_QahXUNbTYzE",
                  accent:
                    "from-violet-400/20 via-fuchsia-400/10 to-transparent",
                  badge: "AI & Innovation",
                },
                {
                  number: "02",
                  name: "Databricks Data Engineer Associate",
                  issuer: "Databricks",
                  detail:
                    "Validated knowledge of data engineering concepts, lakehouse architecture, data processing, and workflows.",
                  type: "Data Engineering · Lakehouse",
                  link: "https://www.linkedin.com/posts/payal-pandey-839a64253_databricks-databrickscertified-dataengineer-activity-7440997697794510848-IEUB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6gba0BRWIPesINn5h0OMG_QahXUNbTYzE",
                  accent: "from-orange-400/20 via-amber-400/10 to-transparent",
                  badge: "Professional Certification",
                },
                {
                  number: "03",
                  name: "Microsoft Azure Data Fundamentals",
                  issuer: "Microsoft",
                  detail:
                    "DP-900 certification covering core data concepts, relational and non-relational data, and analytics workloads.",
                  type: "Azure · Data Fundamentals",
                  link: "https://www.linkedin.com/posts/payal-pandey-839a64253_azure-dp-900-certificate-activity-7415737463224152064-ODc5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6gba0BRWIPesINn5h0OMG_QahXUNbTYzE",
                  accent: "from-sky-400/20 via-cyan-400/10 to-transparent",
                  badge: "Microsoft Certification",
                },
              ].map((credential, index) => (
                <motion.div
                  key={credential.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300/30 hover:shadow-[0_12px_40px_rgba(45,212,191,0.08)]"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${credential.accent} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:p-7">
                    <div className="flex shrink-0 items-center gap-4 sm:w-24 sm:flex-col sm:items-start sm:gap-3">
                      <span className="font-mono text-xs tracking-[0.2em] text-slate-500">
                        {credential.number}
                      </span>

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 transition-transform duration-300 group-hover:scale-105">
                        {index === 0 ? (
                          // Google logo
                          <img
                            src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                            alt="Google logo"
                            className="h-6 w-6 object-contain"
                          />
                        ) : index === 1 ? (
                          // Databricks logo
                          <img
                            src="https://cdn.simpleicons.org/databricks/FF3621"
                            alt="Databricks logo"
                            className="h-6 w-6 object-contain"
                          />
                        ) : (
                          /* Microsoft logo */ <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6"
                            role="img"
                            aria-label="Microsoft logo"
                          >
                            {" "}
                            <rect
                              x="1"
                              y="1"
                              width="10"
                              height="10"
                              fill="#F25022"
                            />{" "}
                            <rect
                              x="13"
                              y="1"
                              width="10"
                              height="10"
                              fill="#7FBA00"
                            />{" "}
                            <rect
                              x="1"
                              y="13"
                              width="10"
                              height="10"
                              fill="#00A4EF"
                            />{" "}
                            <rect
                              x="13"
                              y="13"
                              width="10"
                              height="10"
                              fill="#FFB900"
                            />{" "}
                          </svg>
                        )}
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                          {credential.badge}
                        </span>
                      </div>

                      <h3 className="text-base font-semibold leading-relaxed text-slate-100 sm:text-lg">
                        {credential.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-teal-200">
                        {credential.issuer}
                      </p>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                        {credential.detail}
                      </p>

                      <p className="mt-3 text-xs text-slate-500">
                        {credential.type}
                      </p>
                    </div>

                    <div className="shrink-0 sm:self-center">
                      <a
                        href={credential.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${credential.name} LinkedIn post`}
                        className="inline-flex items-center gap-2 rounded-lg border border-teal-300/20 bg-teal-300/[0.06] px-4 py-2.5 text-sm font-medium text-teal-200 transition-all duration-300 hover:border-teal-300/50 hover:bg-teal-300/[0.12]"
                      >
                        View
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* CONTACT SECTION */}

        <section
          id="contact"
          className="scroll-mt-24 px-5 pb-24 pt-12 sm:px-8 lg:px-12 lg:pb-32"
        >
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/[0.09] bg-[#080d19]">
            {/* Atmospheric background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 -top-40 h-96 w-96 rounded-full bg-violet-500/[0.12] blur-[100px]" />
              <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-500/[0.10] blur-[100px]" />

              {/* Subtle grid */}
              <div className="grid-background absolute inset-0 opacity-[0.12]" />

              {/* Orbital rings */}
              <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] sm:h-[480px] sm:w-[480px]" />
              <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/[0.05] sm:h-[620px] sm:w-[620px]" />

              {/* Accent lights */}
              <div className="absolute left-[18%] top-[28%] h-2 w-2 rounded-full bg-cyan-300/70 shadow-[0_0_20px_rgba(103,232,249,0.6)]" />
              <div className="absolute right-[20%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-violet-300/70 shadow-[0_0_18px_rgba(196,181,253,0.6)]" />
            </div>

            <div className="relative grid items-center gap-12 px-6 py-14 sm:px-12 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-20 lg:py-24">
              {/* Main content */}
              <div>
                <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-4 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-xs font-medium tracking-wide text-emerald-200">
                    Open to Data Engineering Opportunities
                  </span>
                </div>

                <p className="mb-5 text-xs font-semibold tracking-[0.24em] text-cyan-300">
                  06 / LET'S CONNECT
                </p>

                <h2 className="max-w-2xl text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Have data to solve?
                  <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-teal-200 to-violet-300 bg-clip-text text-transparent">
                    Let's talk.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
                  I'm interested in building reliable data pipelines, improving
                  data quality, working with cloud platforms, and exploring
                  AI-powered data solutions. If you're hiring or building
                  something interesting, I'd love to connect.
                </p>

                {/* Contact and resume actions */}
                <div className="mt-9 flex flex-wrap gap-3">
                  {/* Email */}
                  <a
                    href="mailto:payalpandey56p@gmail.com"
                    className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-300 to-teal-600 px-6 py-3.5 text-sm font-semibold text-[#071018] shadow-[0_0_30px_rgba(45,212,191,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(45,212,191,0.25)]"
                  >
                    <Mail size={17} />
                    Email me
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/payal-pandey-839a64253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.06]"
                  >
                    <LinkedinIcon size={17} />
                    Connect on LinkedIn
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>

                  {/* Download Resume */}
                  <a
                    href="/Payal_Pandey_Resume.pdf"
                    download="Payal_Pandey_Resume.pdf"
                    className="group inline-flex items-center gap-2.5 rounded-xl border border-violet-300/25 bg-violet-300/[0.07] px-6 py-3.5 text-sm font-semibold text-violet-100 transition duration-300 hover:-translate-y-0.5 hover:border-violet-300/50 hover:bg-violet-300/[0.12]"
                  >
                    <Download size={17} />
                    Download Resume
                  </a>
                </div>
              </div>

              {/* Contact information card */}
              <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-400/[0.08] via-transparent to-violet-400/[0.08] blur-2xl" />

                <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-slate-950/70 p-6 backdrop-blur-xl sm:p-7">
                  {/* Card heading */}
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                    <div>
                      <p className="text-xs text-slate-500">CONTACT CARD</p>
                      <p className="mt-1 text-sm font-medium text-slate-200">
                        Payal Pandey
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-200">
                      <Mail size={18} />
                    </div>
                  </div>

                  {/* Contact details */}
                  <div className="space-y-5 py-6">
                    {/* Email */}
                    <a
                      href="mailto:payalpandey56p@gmail.com"
                      className="group flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-slate-400 transition group-hover:text-cyan-200">
                        <Mail size={16} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-slate-500">Email</p>
                        <p className="mt-1 break-all text-sm text-slate-200 transition group-hover:text-cyan-200">
                          payalpandey56p@gmail.com
                        </p>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/payal-pandey-839a64253/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-slate-400 transition group-hover:text-cyan-200">
                        <LinkedinIcon size={16} />
                      </div>

                      <div>
                        <p className="text-xs text-slate-500">
                          Professional network
                        </p>
                        <p className="mt-1 text-sm text-slate-200 transition group-hover:text-cyan-200">
                          LinkedIn Profile
                        </p>
                      </div>
                    </a>

                    {/* Resume */}
                    <a
                      href="/Payal_Pandey_Resume.pdf"
                      download="Payal_Pandey_Resume.pdf"
                      className="group flex items-center gap-3"
                    >
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-300/[0.07] text-violet-200 transition group-hover:bg-violet-300/[0.12]">
                        <FileText size={16} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-slate-500">Resume</p>
                        <p className="mt-1 text-sm text-slate-200 transition group-hover:text-violet-200">
                          View my professional profile
                        </p>
                      </div>

                      <Download
                        size={16}
                        className="shrink-0 text-slate-500 transition group-hover:text-violet-200"
                      />
                    </a>
                  </div>

                  {/* Focus areas */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                    <p className="text-xs leading-6 text-slate-400">
                      Interested in data engineering, cloud data platforms, data
                      quality, and AI-driven solutions.
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between gap-3 text-[10px] tracking-wider text-slate-600">
                    <span>HYDERABAD, INDIA</span>
                    <span className="text-right">
                      AVAILABLE FOR CONNECTIONS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.07] px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <a href="#home" className="text-xs font-medium text-slate-300">
            PAYAL PANDEY <span className="text-teal-300">/</span> DATA + AI
          </a>

          <p className="text-center text-[11px] text-slate-600">
            Designed to make my skills visible.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/payalpandey565"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-500 transition hover:text-teal-200"
            >
              <GithubIcon size={17} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="text-slate-500 transition hover:text-teal-200"
            >
              <ArrowDownRight size={17} className="-rotate-135" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
