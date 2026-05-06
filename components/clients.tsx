"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// Logos de clientes (puedes reemplazar con URLs reales o usar componentes SVG)
const clients = [
  { name: "Finova Labs", logo: "FL" },
  { name: "RetailX", logo: "RX" },
  { name: "EduConnect", logo: "EC" },
  { name: "LogiTrack", logo: "LT" },
  { name: "TechCorp", logo: "TC" },
  { name: "DataPro", logo: "DP" },
]

export function Clients() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 border-y border-border/40 bg-surface/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground uppercase font-mono">
            Confían en nosotros
          </span>
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-sm border border-border/60 bg-surface/50 flex items-center justify-center hover:border-neon/40 hover:bg-surface transition-all duration-300">
                <span className="text-lg sm:text-xl font-black text-muted-foreground group-hover:text-neon transition-colors font-mono">
                  {client.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
