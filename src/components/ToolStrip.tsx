import { motion } from "framer-motion";

const tools = [
  { name: "Make.com", icon: "⚙️" },
  { name: "n8n", icon: "🔗" },
  { name: "Zapier", icon: "⚡" },
  { name: "Claude", icon: "🤖" },
  { name: "Cursor", icon: "🖥️" },
  { name: "Replit", icon: "💻" },
  { name: "ChatGPT", icon: "🧠" },
  { name: "Google Sheets", icon: "📊" },
];

// Duplicate for seamless loop
const allTools = [...tools, ...tools];

const ToolStrip = () => (
  <section className="py-14 bg-section-alt overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-8">
        Tools & Platforms I Use
      </p>

      <div className="relative w-full">
        {/* gradient masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-section-alt to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-section-alt to-transparent z-10 pointer-events-none" />

        {/* scrolling track */}
        <div className="flex animate-marquee whitespace-nowrap">
          {allTools.map((tool, i) => (
            <div
              key={`${tool.name}-${i}`}
              className="mx-6 flex items-center gap-2.5 shrink-0"
            >
              <span className="text-2xl">{tool.icon}</span>
              <span className="text-sm font-medium text-foreground/70 tracking-tight">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default ToolStrip;
