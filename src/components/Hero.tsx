import { motion } from "framer-motion";
import { MapPin, ArrowDown, Download, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const roles = [
  "AI Automation Engineer",
  "Process Optimizer",
  "Documentation Specialist",
  "Workflow Designer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 70;

    if (!isDeleting && displayed === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed(
        isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIndex]);

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

      {/* Glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-hero-accent/10 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-[16%] w-64 h-64 rounded-full bg-hero-accent/5 blur-[100px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-2 text-hero-muted text-sm mb-6"
          >
            <MapPin size={14} />
            <span>Pasig, Philippines</span>
            <span className="w-1.5 h-1.5 rounded-full bg-hero-accent ml-2 animate-pulse" />
            <span className="text-hero-accent text-xs">Open to work</span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-hero-foreground leading-[1.1] mb-4 tracking-tight">
            Christian<br />
            <span className="text-gradient">Espinosa</span>
          </h1>

          <p className="text-lg md:text-xl text-hero-muted font-light mb-4 max-w-lg h-8">
            Aspiring{" "}
            <span className="text-hero-accent font-medium">
              {displayed}
              <span className="inline-block w-[2px] h-5 bg-hero-accent ml-0.5 animate-pulse align-middle" />
            </span>
          </p>

          <p className="text-hero-foreground/60 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            Passionate about transforming manual workflows into efficient, AI-powered solutions. Mapping processes, designing automations, and using AI-assisted coding tools to deliver functional internal tools.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-accent text-accent-foreground px-7 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-accent/20"
            >
              <MessageCircle size={15} />
              Contact Me
            </motion.button>
            <motion.a
              href="https://docs.google.com/document/d/1qpuj20xN6zVULwVlB_sZ6HIiy_oNV-9fsYlIcI2CMz8/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-hero-foreground/20 text-hero-foreground px-7 py-3 rounded-lg font-medium text-sm hover:bg-hero-foreground/5 transition-all flex items-center gap-2"
            >
              <Download size={15} />
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-hero-muted hover:text-hero-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
