"use client"

import { Award, GraduationCap, Trophy, BookOpen, CheckCircle } from "lucide-react"

const certifications = [
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    date: "Nov 2025",
  },
  {
    title: "Deep Learning Course Training",
    issuer: "Scaler",
    date: "Sep 2025",
  },
  {
    title: "AI-Powered NLP and LLM Training",
    issuer: "AlgoTutor Academy",
    date: "Aug 2025",
  },
  {
    title: "Java Programming",
    issuer: "LPU",
    date: "May 2025",
  },
]

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    score: "83%",
    period: "Aug 2024 - Present",
    current: true,
  },
  {
    degree: "Diploma",
    field: "Computer Science and Engineering",
    institution: "Abul Kalam Institute of Tech Sciences",
    location: "Kothagudem, Telangana",
    score: "91%",
    period: "Jun 2021 - May 2024",
    current: false,
  },
  {
    degree: "High School",
    field: "",
    institution: "ZPHS (BOYS)",
    location: "Peddapalli, Telangana",
    score: "95%",
    period: "Jun 2020 - Apr 2021",
    current: false,
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience & Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey, professional experience, and certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Internship, Achievement, Certifications */}
          <div className="space-y-6">
            {/* Internship */}
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Internship Experience
                  </h3>
                  <p className="text-sm text-muted-foreground">Professional Training</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground">
                      AICTE Virtual Internship
                    </h4>
                    <p className="text-sm text-primary">
                      Artificial Intelligence & Data Analytics
                    </p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                    Apr 2025
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {[
                    "Applied ML and data analysis techniques using Python",
                    "Cleaned and visualized datasets with Pandas, NumPy, Matplotlib",
                    "Prepared data-driven reports and recommendations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Coding Achievement */}
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Coding Achievement
                  </h3>
                  <p className="text-sm text-muted-foreground">Competitive Programming</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                <div>
                  <p className="font-medium text-foreground">LeetCode Progress</p>
                  <p className="text-sm text-muted-foreground">Data Structures & Algorithms</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-primary">150+</p>
                  <p className="text-xs text-muted-foreground">Problems Solved</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Certifications
                  </h3>
                  <p className="text-sm text-muted-foreground">{certifications.length} Completed</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.title}
                    className="flex items-start justify-between gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {cert.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-primary whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Education
                </h3>
                <p className="text-sm text-muted-foreground">Academic Background</p>
              </div>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border" />

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={edu.institution} className="relative pl-8">
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center ${
                      edu.current 
                        ? 'bg-primary' 
                        : 'bg-card border-2 border-primary'
                    }`}>
                      {edu.current && (
                        <span className="absolute w-6 h-6 rounded-full bg-primary animate-ping opacity-30" />
                      )}
                      <div className={`w-2 h-2 rounded-full ${edu.current ? 'bg-primary-foreground' : 'bg-primary'}`} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-bold text-foreground">
                            {edu.degree}
                          </h4>
                          {edu.field && (
                            <p className="text-sm text-primary font-medium">{edu.field}</p>
                          )}
                        </div>
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary border border-primary/20">
                          {edu.score}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {edu.institution}
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          {edu.location}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground/60">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
