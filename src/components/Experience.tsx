import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => (
  <section id="experience" className="section-padding bg-section-alt">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Experience
        </h2>
        <div className="w-12 h-1 bg-accent rounded mb-10" />

        <div className="glass-card rounded-xl p-8 max-w-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              <Briefcase size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">
                Entry-Level Aspiring Engineer
              </h3>
              <p className="text-accent text-sm font-medium mb-3">
                Self-Taught · Open to Opportunities
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Entry-level aspiring engineer with self-taught experience in AI tools.
                Open to project-based roles in EST timezone, flexible schedule up to
                full-time.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Brainstorming", pct: "20%" },
                  { label: "Documentation", pct: "40%" },
                  { label: "Building Automations", pct: "40%" },
                ].map((i) => (
                  <div key={i.label} className="text-center">
                    <p className="font-display font-bold text-foreground text-lg">{i.pct}</p>
                    <p className="text-muted-foreground text-xs">{i.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
