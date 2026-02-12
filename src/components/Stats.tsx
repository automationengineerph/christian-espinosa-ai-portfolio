import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Zap, FolderOpen, Clock, Target } from "lucide-react";

const stats = [
  { icon: Zap, value: 5, suffix: "+", label: "Projects Built" },
  { icon: FolderOpen, value: 3, suffix: "", label: "AI Platforms Used" },
  { icon: Clock, value: 50, suffix: "%", label: "Steps Automated" },
  { icon: Target, value: 100, suffix: "%", label: "Self-Taught" },
];

const AnimatedNumber = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="font-display font-bold text-3xl md:text-4xl text-hero-foreground">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="hero-gradient py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center space-y-2"
            >
              <div className="w-12 h-12 rounded-xl bg-hero-foreground/10 flex items-center justify-center mx-auto mb-3">
                <s.icon size={20} className="text-hero-accent" />
              </div>
              <AnimatedNumber value={s.value} suffix={s.suffix} inView={inView} />
              <p className="text-hero-muted text-xs md:text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
