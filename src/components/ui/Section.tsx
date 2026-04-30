import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "white" | "green" | "dark";
  id?: string;
}

export function Section({ children, className, variant = "white", id }: SectionProps) {
  const bgClass = {
    white: "bg-white text-gray-900",
    green: "bg-koa-gradient shadow-glow-green text-white",
    dark: "bg-koa-dark text-white", // dark green
  }[variant];

  return (
    <section id={id} className={cn("py-24 relative", bgClass, className)}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-6 relative z-10"
      >
        {children}
      </motion.div>
      {/* Thin silver divider at bottom if needed, though usually better handled by borders */}
    </section>
  );
}
