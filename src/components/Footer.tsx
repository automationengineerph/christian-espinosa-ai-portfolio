import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="hero-gradient py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <p className="text-hero-foreground/80 text-sm">
          © 2026 Christian Espinosa
        </p>
        <p className="text-hero-muted text-xs mt-1">
          Built for AI Automation Engineer application – Focused on delivering production-used automations with clear documentation.
        </p>
      </div>
      <div className="flex gap-3">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
          className="w-9 h-9 rounded-lg bg-hero-foreground/10 flex items-center justify-center hover:bg-hero-foreground/20 transition-colors">
          <Linkedin size={14} className="text-hero-foreground/70" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
          className="w-9 h-9 rounded-lg bg-hero-foreground/10 flex items-center justify-center hover:bg-hero-foreground/20 transition-colors">
          <Github size={14} className="text-hero-foreground/70" />
        </a>
        <a href="mailto:christian.t.espinosa@gmail.com"
          className="w-9 h-9 rounded-lg bg-hero-foreground/10 flex items-center justify-center hover:bg-hero-foreground/20 transition-colors">
          <Mail size={14} className="text-hero-foreground/70" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
