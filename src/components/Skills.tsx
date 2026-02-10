import { motion } from "framer-motion";
import { Bot, FileText, GitBranch, Users, Code, Lightbulb } from "lucide-react";

const skills = [
  { icon: Bot, title: "AI-Assisted Development", desc: "Replit, Cursor, Claude for building tools" },
  { icon: FileText, title: "Process Mapping & Docs", desc: "SOPs, technical specs, prompt artifacts" },
  { icon: GitBranch, title: "Workflow Analysis", desc: "Efficiency optimization & automation design" },
  { icon: Users, title: "Collaborative Iteration", desc: "Brainstorming and joint decision-making" },
  { icon: Code, title: "Software Dev Workflows", desc: "Basic development lifecycle understanding" },
  { icon: Lightbulb, title: "Business → AI Prompts", desc: "Translating needs into structured prompts" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Skills
        </h2>
        <div className="w-12 h-1 bg-accent rounded mb-3" />
        <p className="text-muted-foreground text-sm mb-10 max-w-md">
          As a beginner, these are areas I'm actively learning and applying through self-study.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skills.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="glass-card rounded-xl p-6 hover:shadow-md transition-shadow group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <s.icon size={18} className="text-accent" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
