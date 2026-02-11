import { motion } from "framer-motion";
import { Briefcase, Clock, MapPin } from "lucide-react";

const Experience = () => (
  <section id="experience" className="section-padding bg-section-alt">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">Experience</h2>
        <div className="w-12 h-1 bg-accent rounded mb-10" />

        <div className="glass-card rounded-xl p-8 max-w-2xl">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              <Briefcase size={20} className="text-accent" />
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-display font-semibold text-foreground text-lg">
                  Entry-Level Aspiring Engineer
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  <span className="text-accent text-sm font-medium">Self-Taught</span>
                  <span className="text-muted-foreground text-xs flex items-center gap-1">
                    <Clock size={12} /> Open to Opportunities
                  </span>
                  <span className="text-muted-foreground text-xs flex items-center gap-1">
                    <MapPin size={12} /> EST Timezone
                  </span>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                Entry-level aspiring engineer with self-taught experience in AI tools.
                Open to project-based roles in EST timezone, flexible schedule up to
                full-time.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-2">
                {[
                  { label: "Brainstorming", pct: "20%" },
                  { label: "Documentation", pct: "40%" },
                  { label: "Building Automations", pct: "40%" },
                ].map((i) => (
                  <div key={i.label} className="text-center">
                    <p className="font-display font-bold text-accent text-xl">{i.pct}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{i.label}</p>
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
