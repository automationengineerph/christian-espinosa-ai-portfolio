import { motion } from "framer-motion";
import { Lightbulb, FileText, Wrench, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Brainstorm",
    percent: "20%",
    description:
      "Understand the problem, map edge cases, and design the ideal automation flow before writing a single line.",
    color: "from-amber-400 to-orange-500",
    bgGlow: "bg-amber-500/10",
  },
  {
    icon: FileText,
    title: "Document",
    percent: "40%",
    description:
      "Write clear specs, step-by-step guides, and SOPs so every automation is maintainable and hand-off ready.",
    color: "from-sky-400 to-blue-500",
    bgGlow: "bg-sky-500/10",
  },
  {
    icon: Wrench,
    title: "Build",
    percent: "40%",
    description:
      "Develop production-ready automations with AI-assisted tools like Claude, Cursor, and Replit — tested and deployed.",
    color: "from-emerald-400 to-green-500",
    bgGlow: "bg-emerald-500/10",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const HowIWork = () => (
  <section className="section-padding bg-background" id="process">
    <div className="max-w-6xl mx-auto">
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-3 block">
          My Process
        </span>
        <h2 className="section-heading">
          How I <span className="text-gradient">Work</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mt-3 text-sm leading-relaxed">
          A disciplined 20 / 40 / 40 workflow that prioritises clarity and
          reliability over speed alone.
        </p>
      </motion.div>

      {/* steps */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-6 relative"
      >
        {steps.map((step, i) => (
          <motion.div key={step.title} variants={item} className="relative">
            {/* connector arrow (hidden on last card & mobile) */}
            {i < steps.length - 1 && (
              <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-muted-foreground/40">
                <ArrowRight size={20} />
              </div>
            )}

            <div className="glass-card rounded-2xl p-8 h-full flex flex-col items-center text-center group hover:scale-[1.02] transition-transform duration-300">
              {/* icon */}
              <div
                className={`w-16 h-16 rounded-xl ${step.bgGlow} flex items-center justify-center mb-5`}
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                >
                  <step.icon size={20} className="text-white" />
                </div>
              </div>

              {/* percentage ring */}
              <span
                className={`text-3xl font-display font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}
              >
                {step.percent}
              </span>

              <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-3">
                {step.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HowIWork;
