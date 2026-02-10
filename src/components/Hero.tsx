import { motion } from "framer-motion";
import { MapPin, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () =>
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }} />

      {/* Glow orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-hero-accent/10 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 text-hero-muted text-sm mb-6">
            <MapPin size={14} />
            <span>Pasig, Philippines</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-hero-foreground leading-[1.1] mb-4">
            Christian<br />
            <span className="text-gradient">Espinosa</span>
          </h1>

          <p className="text-lg md:text-xl text-hero-muted font-light mb-4 max-w-lg">
            Aspiring AI Automation Engineer&nbsp;|&nbsp;Beginner&nbsp;Eager&nbsp;to Build Efficient Tools
          </p>

          <p className="text-hero-foreground/70 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            As a beginner in AI automation, I'm passionate about transforming manual workflows into efficient, AI-powered solutions. I'm applying for roles that involve mapping processes, designing automations, and using AI-assisted coding tools to deliver functional internal tools. Let's collaborate to streamline operations!
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground px-7 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Contact Me
            </button>
            <a
              href="#"
              className="border border-hero-foreground/20 text-hero-foreground px-7 py-3 rounded-lg font-medium text-sm hover:bg-hero-foreground/5 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-hero-muted"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
