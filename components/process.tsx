"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageSquare, FileCheck, Code, Rocket } from "lucide-react"

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Consulta gratuita",
    description: "Hablamos 30 minutos sin compromiso. Entendemos tu problema, tus objetivos y si podemos ayudarte.",
    duration: "30 min",
  },
  {
    num: "02",
    icon: FileCheck,
    title: "Propuesta clara",
    description: "Recibís un documento detallado con alcance, cronograma, tecnologías y precio fijo. Sin sorpresas.",
    duration: "48 hs",
  },
  {
    num: "03",
    icon: Code,
    title: "Desarrollo ágil",
    description: "Construimos en sprints cortos con demos semanales. Siempre sabés en qué estamos trabajando.",
    duration: "2-8 semanas",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Entrega y soporte",
    description: "Lanzamos tu producto, te capacitamos y damos soporte técnico incluido durante el primer mes.",
    duration: "Garantizado",
  },
]

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col gap-5 p-6 rounded-sm bg-surface border border-border hover:border-neon/40 transition-all duration-300 group"
    >
      {/* Number badge */}
      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-sm bg-neon/10 border-2 border-neon/30 flex items-center justify-center backdrop-blur-sm">
        <span className="text-sm font-bold text-neon font-mono">{step.num}</span>
      </div>

      {/* Icon */}
      <div className="w-12 h-12 rounded-sm bg-neon/10 border border-neon/20 flex items-center justify-center group-hover:bg-neon/20 transition-colors mt-3">
        <step.icon className="w-5 h-5 text-neon" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-neon transition-colors">
          {step.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Duration */}
      <div className="pt-3 border-t border-border/40">
        <span className="text-xs font-mono text-muted-foreground tracking-wider">
          ⏱ {step.duration}
        </span>
      </div>

      {/* Arrow connector (except last) */}
      {index < steps.length - 1 && (
        <div className="hidden xl:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-px bg-border">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-r border-t border-border" />
        </div>
      )}
    </motion.div>
  )
}

export function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="proceso" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16 pb-4 sm:pb-6 border-b border-border/40"
        >
          <div>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-neon uppercase font-mono">
              Proceso
            </span>
            <h2 className="mt-2 sm:mt-3 text-3xl sm:text-5xl lg:text-6xl font-black text-foreground uppercase tracking-tight leading-none">
              Cómo<br />trabajamos
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
            Un proceso predecible, transparente y sin vueltas. Desde el primer contacto hasta el lanzamiento.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 sm:mt-12 flex justify-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-neon text-foreground font-bold text-sm tracking-wide hover:bg-neon-bright transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 hover:shadow-neon/30 w-full sm:w-auto text-center"
          >
            Empezar ahora → Primera consulta gratis
          </a>
        </motion.div>
      </div>
    </section>
  )
}
