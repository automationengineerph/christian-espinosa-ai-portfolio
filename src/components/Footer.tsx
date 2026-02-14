import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="hero-gradient py-12 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <p className="font-display font-bold text-hero-foreground text-lg tracking-tight mb-1">
          CE<span className="text-gradient">.</span>
        </p>
        <p className="text-hero-muted text-xs max-w-sm">
          Built for AI Automation Engineer application – Focused on delivering production-used automations with clear documentation.
        </p>
        <p className="text-hero-foreground/40 text-xs mt-2">
          © 2026 Christian Espinosa
        </p>
      </div>
      <div className="flex gap-3">
        {[
          { href: "https://www.linkedin.com/in/christian-espinosa-work/", icon: Linkedin, label: "LinkedIn" },
          { href: "https://github.com", icon: Github, label: "GitHub" },
          { href: "mailto:christian.t.espinosa@gmail.com", icon: Mail, label: "Email" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-10 h-10 rounded-lg bg-hero-foreground/10 flex items-center justify-center hover:bg-hero-foreground/20 hover:scale-105 transition-all"
          >
            <s.icon size={15} className="text-hero-foreground/70" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
