import { motion } from "framer-motion";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  tone = "teal",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "teal" | "ink" | "green";
}) {
  const bg =
    tone === "ink"
      ? "bg-purple text-white"
      : tone === "green"
        ? "bg-green-100"
        : "bg-teal-50";
  const titleColor = tone === "ink" ? "text-white" : "text-ink";

  return (
    <section className={`relative overflow-hidden ${bg}`}>
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/30 blur-3xl" />
      <div className="container-x relative py-16 text-center md:py-20">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`eyebrow justify-center ${tone === "ink" ? "text-teal-200" : ""}`}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className={`mt-4 display-lg ${titleColor}`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className={`mx-auto mt-5 max-w-2xl text-lg ${tone === "ink" ? "text-white/80" : "text-body"}`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
