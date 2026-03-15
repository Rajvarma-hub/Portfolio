"use client"

import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "FixEasy",
    subtitle: "On-Demand Home Services Platform",
    description:
      "A comprehensive FastAPI-based backend with 3 distinct roles and 25+ REST APIs. Features event-driven architecture using Kafka processing 100+ job events per minute with real-time synchronization.",
    highlights: [
      "Custom MCP server with AI agent for natural language job management",
      "Real-time job sync via WebSockets & Redis-based OTP verification",
      "Containerized deployment on AWS (EC2, RDS, S3, IAM, VPC)",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Kafka",
      "Redis",
      "WebSockets",
      "Docker",
      "AWS",
    ],
    github: "https://github.com/Rajvarma-hub/Projects",
    date: "Jan 2026",
    featured: true,
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    title: "AI Expense Manager",
    subtitle: "Intelligent Financial Chatbot",
    description:
      "An AI-driven expense management system allowing users to log, edit, query, and analyze expenses via natural conversation. Handles 1,000+ expense records per user with sub-300ms response times.",
    highlights: [
      "Custom MCP server orchestrating LLM context, memory, and tool invocation",
      "AI agent performing 10+ financial tasks through conversation",
      "Optimized PostgreSQL queries for blazing fast performance",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "LangChain",
      "Gemini 2.5",
      "PostgreSQL",
      "OAuth2",
      "JWT",
    ],
    github: "https://github.com/Rajvarma-hub/Projects",
    date: "Nov 2025",
    featured: true,
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing production-ready applications in AI, backend systems, and cloud infrastructure
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative p-8 md:p-10">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6 border border-primary/20">
                    <Sparkles className="h-3 w-3" />
                    Featured Project
                  </div>
                )}

                <div className="grid lg:grid-cols-5 gap-8">
                  {/* Left: Main Content */}
                  <div className="lg:col-span-3 space-y-6">
                    {/* Header */}
                    <div>
                      <span className="text-sm text-primary font-medium">
                        {project.date}
                      </span>
                      <h3 className="text-3xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <ArrowUpRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Tech & Actions */}
                  <div className="lg:col-span-2 flex flex-col justify-between">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-4">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-muted-foreground border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 mt-8 pt-6 border-t border-border">
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 hover:bg-secondary"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                      <Button
                        asChild
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8"
          >
            <a
              href="https://github.com/Rajvarma-hub/Projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
