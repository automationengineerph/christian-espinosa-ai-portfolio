import { motion } from "framer-motion";
import { Workflow, BookOpen, BarChart3, Calendar, Mail, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Workflow,
    title: "Workflow Automation Prototype",
    desc: "Mapped a simple manual data-entry process, identified efficiencies, designed target-state with AI prompts, and built a basic tool using Claude to automate it.",
    result: "Reduced steps by 50% in testing",
    tags: ["Claude", "Process Mapping", "Automation"],
    link: "https://workflow-automation-prototype.netlify.app/",
    year: "2026",
  },
  {
    icon: BookOpen,
    title: "Documentation for AI Tool",
    desc: "Created process maps, SOPs, and technical specs for a personal automation script, iterating via AI-assisted coding in Replit.",
    result: "Complete documentation suite delivered",
    tags: ["Replit", "SOPs", "Technical Writing"],
    link: "https://documentation-for-ai-tool.netlify.app/",
    year: "2026",
  },
  {
    icon: BarChart3,
    title: "Daily Sales Report Generator",
    desc: "Automated daily sales reporting with AI-powered data analysis and formatted report generation.",
    result: "Streamlined daily reporting workflow",
    tags: ["AI", "Reporting", "Automation"],
    link: "https://daily-sales-report-generator.netlify.app/",
  },
  {
    icon: Calendar,
    title: "AI Social Scheduler",
    desc: "AI-powered social media scheduling tool that helps plan, create, and automate content posting across platforms.",
    result: "Simplified social media management",
    tags: ["AI", "Social Media", "Scheduling"],
    link: "https://ai-social-scheduler.netlify.app/",
  },
  {
    icon: Mail,
    title: "Email Response Categorizer",
    desc: "Automatically categorizes incoming emails and suggests appropriate responses using AI classification.",
    result: "Faster email triage and response",
    tags: ["AI", "Email", "Classification"],
    link: "https://email-categorizer.netlify.app/",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => (
  <section id="projects" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">Projects</h2>
        <div className="w-12 h-1 bg-accent rounded mb-3" />
        <p className="text-muted-foreground text-sm mb-10 max-w-md">
          Real tools I've built using AI-assisted development platforms.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((p) => (
          <motion.a
            key={p.title}
            variants={item}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="glass-card rounded-xl overflow-hidden group block transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/5"
          >
            <div className="hero-gradient p-6 flex items-center justify-center h-32 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500"
              />
              <p.icon size={36} className="text-hero-accent opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 relative z-10" />
              <ArrowUpRight size={16} className="absolute top-4 right-4 text-hero-accent/0 group-hover:text-hero-accent/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-display font-semibold text-foreground text-[15px] leading-snug">
                  {p.title}
                </h3>
                {p.year && (
                  <span className="text-[10px] text-accent bg-accent/10 px-1.5 py-0.5 rounded font-medium shrink-0">
                    {p.year}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-3">{p.desc}</p>
              <p className="text-accent text-xs font-medium mb-4 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                {p.result}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
