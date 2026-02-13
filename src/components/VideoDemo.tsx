import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoDemo = () => (
  <section id="demo" className="section-padding bg-section-alt">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">Video Demo</h2>
        <div className="w-12 h-1 bg-accent rounded mb-3" />
        <p className="text-muted-foreground text-sm mb-10 max-w-md flex items-center gap-2">
          <Play size={14} className="text-accent" />
          Watch a walkthrough of my work and process.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-xl overflow-hidden"
      >
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/X2VI-MrMB28"
            title="Video Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default VideoDemo;
