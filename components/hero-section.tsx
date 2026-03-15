"use client"

import { useEffect, useState } from "react"
import { ArrowDown, FileText, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const roles = ["AI Engineer", "Backend Developer", "ML Specialist", "Cloud Architect"]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column - Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            {/* Name with Gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Thirthala
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
                Rajkumar
              </span>
            </h1>

            {/* Animated Role */}
            <div className="h-10 md:h-12 mb-6 overflow-hidden">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary transition-all duration-500 transform">
                {roles[currentRole]}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Crafting intelligent systems at the intersection of{" "}
              <span className="text-foreground font-medium">Machine Learning</span>,{" "}
              <span className="text-foreground font-medium">Scalable Architecture</span>, and{" "}
              <span className="text-foreground font-medium">Cloud Infrastructure</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 mb-10">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base group relative overflow-hidden"
              >
                <a href="#projects">
                  <span className="relative z-10 flex items-center">
                    <Sparkles className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Explore Projects
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary/80 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base backdrop-blur-sm group"
              >
                <a
                  href="/assets/Thirthala_Rajkumar_Resume.pdf"
                  download="Thirthala_Rajkumar_Resume.pdf"
                >
                  <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary/80 px-6 md:px-8 py-5 md:py-6 text-sm md:text-base backdrop-blur-sm"
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Contact
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {[
                { icon: Github, href: "https://github.com/Rajvarma-hub/Projects", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/thirthala-rajkumar", label: "LinkedIn" },
                { icon: Mail, href: "mailto:rajkumarthirthala@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300 backdrop-blur-sm group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Portrait Image */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div 
              className={`relative group transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Gradient Ring Background - Rotated */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary via-primary/50 to-primary/20 rounded-full opacity-70 blur-md rotate-3 group-hover:rotate-0 group-hover:opacity-100 group-hover:blur-lg transition-all duration-700 ease-out" />
              
              {/* Secondary Glow Ring */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-primary/30 via-transparent to-primary/20 rounded-full opacity-50 -rotate-3 group-hover:rotate-0 group-hover:opacity-80 blur-xl transition-all duration-700 ease-out" />
              
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-6 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700" />
              
              {/* Image Container with Dynamic Rotation */}
              <div 
                className="relative w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden bg-card transition-all duration-700 ease-out rotate-3 group-hover:rotate-0 group-hover:scale-105"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-primary via-primary/40 to-primary/10">
                  <div className="w-full h-full rounded-full bg-card" />
                </div>
                
                {/* Inner Image Wrapper */}
                <div className="absolute inset-[3px] rounded-full overflow-hidden">
                  {/* Loading Skeleton */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-secondary animate-pulse" />
                  )}
                  
                  {/* Portrait Image with Zoom */}
                  <Image
                    src="/images/portrait.png"
                    alt="Thirthala Rajkumar - AI Engineer & Backend Developer"
                    fill
                    priority
                    className={`object-cover object-top transition-all duration-700 ease-out ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    } scale-110 group-hover:scale-125`}
                    onLoad={() => setImageLoaded(true)}
                    sizes="(max-width: 640px) 260px, (max-width: 768px) 280px, (max-width: 1024px) 300px, 320px"
                  />
                  
                  {/* Subtle Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Hover Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Decorative Elements - Repositioned for rotation */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-primary to-primary/70 rounded-full animate-pulse shadow-lg shadow-primary/50 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 -right-3 w-3 h-3 bg-primary/40 rounded-full animate-pulse delay-300 shadow-md" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary/60 rounded-full animate-pulse delay-500 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-6 -left-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse delay-700" />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-card/90 border border-primary/30 rounded-full shadow-xl backdrop-blur-md group-hover:border-primary/50 group-hover:shadow-primary/20 transition-all duration-500">
                <span className="text-xs font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">B.Tech CSE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
