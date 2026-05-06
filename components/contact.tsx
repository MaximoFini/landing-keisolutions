"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameRef.current?.value,
          email: emailRef.current?.value,
          message: messageRef.current?.value,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Error al enviar.")
      }

      setSent(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error al enviar el mensaje.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-6 border-b border-border/40"
        >
          <div>
            <span className="text-[10px] tracking-[0.3em] text-neon uppercase font-mono">
              Hablemos
            </span>
            <h2 className="mt-3 text-4xl sm:text-6xl font-black text-foreground uppercase tracking-tight leading-none">
              Empezá<br />hoy
            </h2>
          </div>
          {/* Free consultation callout */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-sm border border-neon/40 bg-neon/5">
            <CheckCircle className="w-4 h-4 text-neon flex-shrink-0" />
            <p className="text-sm text-foreground font-medium">
              La primera consulta es <span className="text-neon font-bold">sin cargo</span>
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-10"
          >
            <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
              Queremos entender tu problema y resolverlo.
            </p>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:keiisolutions2@gmail.com"
                className="flex items-center gap-5 group"
              >
                <div className="w-10 h-10 rounded-sm bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0 group-hover:bg-neon/20 transition-colors">
                  <Mail className="w-4 h-4 text-neon" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono mb-0.5">
                    Email
                  </p>
                  <p className="text-sm font-medium text-foreground group-hover:text-neon transition-colors">
                    keisolutions2@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+543513614462"
                className="flex items-center gap-5 group"
              >
                <div className="w-10 h-10 rounded-sm bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0 group-hover:bg-neon/20 transition-colors">
                  <Phone className="w-4 h-4 text-neon" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono mb-0.5">
                    Teléfono / WhatsApp
                  </p>
                  <p className="text-sm font-medium text-foreground group-hover:text-neon transition-colors">
                    +54 351 361-4462
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-sm bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-neon" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono mb-0.5">
                    Ubicación
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Córdoba, Argentina — Remoto global
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-5 p-12 rounded-sm bg-surface border border-neon/30 text-center min-h-[400px]">
                <div className="w-14 h-14 rounded-sm bg-neon/10 border border-neon/30 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-neon" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Mensaje recibido
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Te contactamos en menos de 24 horas.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 p-8 rounded-sm bg-surface border border-border"
              >
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] tracking-[0.2em] uppercase font-mono text-muted-foreground">
                    Nombre
                  </label>
                  <input
                    id="name"
                    ref={nameRef}
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="px-4 py-3 rounded-sm bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-1 focus:ring-neon/50 focus:border-neon/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase font-mono text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    ref={emailRef}
                    type="email"
                    required
                    placeholder="tu@empresa.com"
                    className="px-4 py-3 rounded-sm bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-1 focus:ring-neon/50 focus:border-neon/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase font-mono text-muted-foreground">
                    ¿Qué necesitás?
                  </label>
                  <textarea
                    id="message"
                    ref={messageRef}
                    rows={5}
                    required
                    placeholder="Describí tu proyecto o problema..."
                    className="px-4 py-3 rounded-sm bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-1 focus:ring-neon/50 focus:border-neon/50 transition-colors resize-none"
                  />
                </div>
                {error && (
                  <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-sm">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-neon text-foreground font-bold text-sm tracking-wide hover:bg-neon-bright transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando..." : <><span>Enviar mensaje</span><Send className="w-4 h-4" /></>}
                </button>
                <p className="text-[11px] text-muted-foreground text-center">
                  Primera consulta sin cargo.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
