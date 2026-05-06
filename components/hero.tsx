"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 pb-16 pt-32 overflow-hidden">
      {/* Subtle blue glow top-left */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-neon/8 blur-[160px] pointer-events-none" />
      {/* Subtle blue glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-neon/6 blur-[120px] pointer-events-none" />

      {/* Thin horizontal rule top */}
      <div className="absolute top-24 left-6 right-6 h-px bg-border/40" />

      {/* Index labels */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="absolute top-28 left-6 flex items-center gap-4"
      >
        <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
          Córdoba, Argentina — Remoto Global
        </span>
      </motion.div>

      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="absolute top-28 right-6 flex items-center gap-4"
      >
    
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-neon" />
          <span className="text-[10px] tracking-[0.3em] text-neon uppercase font-mono">
            Software a medida
          </span>
        </motion.div>

        {/* Oversized headline */}
        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[clamp(2.4rem,10vw,9rem)] font-black leading-[0.9] tracking-tight text-foreground uppercase"
        >
          Código que
          <br />
          <span
            className="text-neon"
            style={{ textShadow: "0 0 60px oklch(0.55 0.25 264 / 0.4)" }}
          >
            resuelve
          </span>
          <br />
          problemas
          <span className="text-neon">.</span>
        </motion.h1>

        {/* Bottom row: description + CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8"
        >
          <p className="max-w-md text-base text-muted-foreground leading-relaxed">
            Desarrollamos software a medida, soluciones de inteligencia artificial
            y automatizaciones con transparencia total y calidad garantizada. Sin
            intermediarios. Sin letra chica.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-7 py-4 bg-neon text-foreground font-bold text-sm tracking-wide hover:bg-neon-bright transition-colors rounded-sm"
            >
              Primera consulta gratis <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-7 py-4 border border-border text-muted-foreground font-medium text-sm tracking-wide hover:border-neon/50 hover:text-foreground transition-colors rounded-sm"
            >
              Ver proyectos
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-14 pt-8 border-t border-border/40 flex flex-wrap gap-10"
        >
          {[
            { value: "50+", label: "Proyectos entregados" },
            { value: "100%", label: "Satisfacción del cliente" },
            { value: "3+", label: "Años de experiencia" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-3xl font-black text-neon leading-none">
                {stat.value}
              </span>
              <span className="text-[11px] text-muted-foreground tracking-wider uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
