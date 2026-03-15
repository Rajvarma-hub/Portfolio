"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/Rajvarma-hub/Projects", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/thirthala-rajkumar", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rajkumarthirthala@gmail.com", label: "Email" },
]

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border bg-card/50">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <a
              href="#"
              className="inline-block text-2xl font-bold text-foreground mb-4"
            >
              TR<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Building intelligent systems at the intersection of AI, backend development, and cloud infrastructure.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2.5 rounded-xl bg-secondary border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="mailto:rajkumarthirthala@gmail.com" className="hover:text-primary transition-colors">
                  rajkumarthirthala@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+916301597150" className="hover:text-primary transition-colors">
                  +91-6301597150
                </a>
              </li>
              <li>Phagwara, Punjab, India</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              &copy; {currentYear} Thirthala Rajkumar. Built with
              <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
            </p>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              Back to top
              <span className="p-1.5 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                <ArrowUp className="h-4 w-4 group-hover:text-primary transition-colors" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
