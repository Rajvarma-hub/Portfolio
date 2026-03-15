"use client"

import { GraduationCap, Briefcase, Target, Code2, Zap } from "lucide-react"

const stats = [
  { value: "150+", label: "LeetCode Problems" },
  { value: "5+", label: "Projects Built" },
  { value: "83%", label: "Academic Score" },
  { value: "3+", label: "Certifications" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Passionate About Building
            <br />
            <span className="text-primary">Intelligent Systems</span>
          </h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-500 text-center backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Introduction - Takes 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
              <div className="space-y-6 pl-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m a{" "}
                  <span className="text-foreground font-semibold">
                    Computer Science Engineering student
                  </span>{" "}
                  at Lovely Professional University with a deep passion for building
                  AI-powered applications that solve real-world problems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My expertise spans{" "}
                  <span className="text-primary font-medium">Machine Learning</span>,{" "}
                  <span className="text-primary font-medium">Deep Learning</span>,{" "}
                  <span className="text-primary font-medium">Natural Language Processing</span>, and{" "}
                  <span className="text-primary font-medium">Backend Architecture</span>.
                  I specialize in building production-ready systems with modern tech stacks.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From custom{" "}
                  <span className="text-foreground font-medium">MCP servers</span> and{" "}
                  <span className="text-foreground font-medium">AI agents</span> to{" "}
                  <span className="text-foreground font-medium">event-driven microservices</span>,
                  I love exploring the cutting edge of technology and turning complex ideas into elegant solutions.
                </p>
              </div>
            </div>

            {/* Tech Focus Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {["LLMs", "RAG Systems", "Agentic AI", "MCP Servers", "FastAPI", "AWS", "Kafka"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Info Cards - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                primary: "B.Tech in CSE",
                secondary: "Lovely Professional University | 83%",
              },
              {
                icon: Briefcase,
                title: "Experience",
                primary: "AICTE Virtual Internship",
                secondary: "AI & Data Analytics | Apr 2025",
              },
              {
                icon: Target,
                title: "Focus Areas",
                primary: "LLMs, RAG, Agentic AI",
                secondary: "Scalable Backend & Cloud Systems",
              },
              {
                icon: Code2,
                title: "Languages",
                primary: "Python, C++, Java, SQL",
                secondary: "Full-stack ML Development",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      {card.title}
                    </h3>
                    <p className="font-semibold text-foreground truncate">
                      {card.primary}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">
                      {card.secondary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
