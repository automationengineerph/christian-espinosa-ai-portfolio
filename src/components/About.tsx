import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin } from "lucide-react";

const About = () => (
  <section id="about" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">About Me</h2>
        <div className="w-12 h-1 bg-accent rounded mb-10" />

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed text-[15px]">
            <p>
              From Pasig, Philippines, I'm new to the field but excited about AI's
              potential in automation. I understand software development workflows,
              requirements definition, and translating business problems into
              structured prompts for AI-driven code.
            </p>
            <p>
              I'm comfortable with production systems and focused on reliable,
              functional tools. My approach combines strong problem-solving instincts,
              a quick learning mindset, and genuine enthusiasm for AI-native platforms
              that let me build real solutions from day one.
            </p>
          </div>

          <div className="space-y-5">
            <div className="glass-card rounded-xl p-5 space-y-4">
              {[
                { icon: User, label: "Name", value: "Christian Espinosa" },
                { icon: Phone, label: "Phone", value: "09289258127" },
                { icon: Mail, label: "Email", value: "christian.t.espinosa@gmail.com", small: true },
                { icon: MapPin, label: "Location", value: "Pasig, Philippines" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className={`font-medium text-foreground truncate ${item.small ? 'text-xs' : 'text-sm'}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
