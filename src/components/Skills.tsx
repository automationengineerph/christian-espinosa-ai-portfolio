import { motion, useInView } from "framer-motion";
import { Bot, FileText, GitBranch, Users, Code, Lightbulb } from "lucide-react";
import { useRef } from "react";

const skills = [
  { icon: Bot, title: "AI-Assisted Development", desc: "Replit, Cursor, Claude for building tools", level: 80 },
  { icon: FileText, title: "Process Mapping & Docs", desc: "SOPs, technical specs, prompt artifacts", level: 90 },
  { icon: GitBranch, title: "Workflow Analysis", desc: "Efficiency optimization & automation design", level: 75 },
  { icon: Users, title: "Collaborative Iteration", desc: "Brainstorming and joint decision-making", level: 85 },
  { icon: Code, title: "Software Dev Workflows", desc: "Basic development lifecycle understanding", level: 65 },
  { icon: Lightbulb, title: "Business → AI Prompts", desc: "Translating needs into structured prompts", level: 88 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProgressBar = ({ level, delay }: { level: number; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full h-1.5 bg-muted rounded-full overflow-hidden mt-3">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, delay: delay * 0.1 + 0.3, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-accent to-accent/60"
      />
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="section-padding bg-section-alt">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">Skills</h2>
        <div className="w-12 h-1 bg-accent rounded mb-3" />
        <p className="text-muted-foreground text-sm mb-10 max-w-md">
          Areas I'm actively learning and applying through self-study and hands-on projects.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skills.map((s, i) => (
          <motion.div
            key={s.title}
            variants={item}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass-card rounded-xl p-6 group transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <s.icon size={18} className="text-accent" />
              </div>
              <span className="text-xs font-medium text-accent/70">{s.level}%</span>
            </div>
            <h3 className="font-display font-semibold text-foreground mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            <ProgressBar level={s.level} delay={i} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
