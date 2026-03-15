"use client"

import { Github, Star, GitFork, ExternalLink, Code2, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"

const topRepos = [
  {
    name: "FixEasy-Backend",
    description: "FastAPI-based home services platform with Kafka, Redis, and AWS deployment",
    language: "Python",
    languageColor: "bg-blue-500",
    stars: 0,
    forks: 0,
  },
  {
    name: "AI-Expense-Chatbot",
    description: "AI-powered expense management system with LangChain and custom MCP server",
    language: "Python",
    languageColor: "bg-blue-500",
    stars: 0,
    forks: 0,
  },
  {
    name: "Projects",
    description: "Collection of AI, ML, and Backend projects showcasing various technologies",
    language: "Python",
    languageColor: "bg-blue-500",
    stars: 0,
    forks: 0,
  },
]

const githubStats = [
  { label: "Repositories", value: "5+", icon: Code2 },
  { label: "Total Commits", value: "150+", icon: GitBranch },
  { label: "Languages", value: "4+", icon: Github },
]

export function GitHubSection() {
  return (
    <section id="github" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Open Source
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            GitHub Activity
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my open source contributions and projects
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
              {/* Avatar */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-4">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-secondary border-2 border-primary/30 flex items-center justify-center">
                    <Github className="h-14 w-14 text-primary" />
                  </div>
                  <span className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-emerald-500 border-4 border-card" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  Rajvarma-hub
                </h3>
                <p className="text-sm text-muted-foreground">
                  @Rajvarma-hub
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {githubStats.map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl bg-secondary/50">
                    <stat.icon className="h-4 w-4 mx-auto mb-2 text-primary" />
                    <p className="text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href="https://github.com/Rajvarma-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Profile
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Repos & Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contribution Graph */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-primary" />
                Contribution Activity
              </h4>
              <div className="w-full overflow-hidden rounded-xl bg-secondary/30 p-4">
                <img
                  src="https://ghchart.rshah.org/38bdf8/Rajvarma-hub"
                  alt="GitHub Contribution Graph"
                  className="w-full opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Top Repositories */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                Top Repositories
              </h4>
              <div className="space-y-3">
                {topRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={`https://github.com/Rajvarma-hub/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 rounded-xl bg-secondary/30 border border-transparent hover:border-primary/30 hover:bg-secondary/50 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Code2 className="h-4 w-4 text-primary" />
                          <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                            {repo.name}
                          </h5>
                          <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {repo.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <span className={`w-3 h-3 rounded-full ${repo.languageColor}`} />
                        {repo.language}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <GitFork className="h-3 w-3" />
                        {repo.forks}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
