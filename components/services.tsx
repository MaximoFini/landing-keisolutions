"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Brain, Zap, Database } from "lucide-react"

const services = [
  {
    num: "01",
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Aplicaciones modernas, escalables y de alto rendimiento. De 0 a 100.",
  },
  {
    num: "02",
    icon: Brain,
    title: "Soluciones IA",
    description:
      "Modelos de lenguaje y visión artificial integrados a tus procesos. Automatizamos lo complejo y añadimos inteligencia real a tus productos.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Automatización",
    description:
      "Flujos que eliminan trabajo repetitivo y conectan tus herramientas. Más tiempo para lo que importa.",
  },
  {
    num: "04",
    icon: Database,
    title: "Sistemas a Medida",
    description:
      "ERPs, CRMs, dashboards y plataformas internas diseñadas exactamente para tu negocio, sin soluciones genéricas.",
  },
]

export function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-6 border-b border-border/40"
        >
          <div>
            <span className="text-[10px] tracking-[0.3em] text-neon uppercase font-mono">
              Lo que hacemos
            </span>
            <h2 className="mt-3 text-4xl sm:text-6xl font-black text-foreground uppercase tracking-tight leading-none">
              Servicios
            </h2>
          </div>
        </motion.div>

        {/* Service rows */}
        <div className="flex flex-col divide-y divide-border/40">
          {services.map((service, i) => (
            <ServiceRow key={service.num} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group grid grid-cols-[auto_1fr] gap-6 lg:gap-10 py-8 items-start hover:bg-surface/50 -mx-4 px-4 transition-colors rounded-sm cursor-default"
    >
      {/* Number */}
      <span className="text-xs font-mono text-muted-foreground pt-1 w-6">
        {service.num}
      </span>

      {/* Content */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12">
        <div className="flex items-center gap-4 lg:w-56 flex-shrink-0">
          <div className="w-9 h-9 rounded-sm bg-neon/10 border border-neon/20 flex items-center justify-center group-hover:bg-neon/20 transition-colors flex-shrink-0">
            <service.icon className="w-4 h-4 text-neon" />
          </div>
          <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
          {service.description}
        </p>
      </div>


    </motion.div>
  )
}
