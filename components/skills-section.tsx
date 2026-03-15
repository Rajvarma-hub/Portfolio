"use client"

import {
  Code2,
  Brain,
  Database,
  Cloud,
  Terminal,
  Users,
} from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: ["Python", "C++", "Java", "SQL"],
  },
  {
    title: "AI & Data Science",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "Power BI",
    ],
  },
  {
    title: "ML & Deep Learning",
    icon: Terminal,
    color: "from-emerald-500 to-teal-500",
    skills: [
      "Neural Networks",
      "CNNs",
      "NLP",
      "LLMs",
      "RAG",
      "Agentic AI",
      "MCP Servers",
    ],
  },
  {
    title: "Backend & Big Data",
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: [
      "PySpark",
      "Kafka",
      "PostgreSQL",
      "MySQL",
      "FastAPI",
      "SQLAlchemy",
      "WebSockets",
      "Redis",
    ],
  },
  {
    title: "Cloud & MLOps",
    icon: Cloud,
    color: "from-sky-500 to-blue-500",
    skills: [
      "AWS IAM",
      "EC2",
      "VPC",
      "RDS",
      "S3",
      "CloudWatch",
      "Docker",
      "MLflow",
    ],
  },
  {
    title: "Software Engineering",
    icon: Users,
    color: "from-amber-500 to-orange-500",
    skills: [
      "DSA",
      "OOP",
      "Operating Systems",
      "Linux",
      "Git",
      "Problem Solving",
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, backend development, and cloud infrastructure
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Hover Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary/80 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default border border-transparent hover:border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
