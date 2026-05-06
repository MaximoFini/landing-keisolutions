import Image from "next/image"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_principal-removebg-preview%20%281%29-65uflcVgzVsTIrqnApVUwM1VXjJKeV.png"
                alt="Keii Solutions logo"
                width={32}
                height={32}
              />
              <span className="font-bold text-foreground tracking-tight">
                Keii <span className="text-neon">Solutions</span>
              </span>
            </a>
            <p className="text-xs text-muted-foreground">
              Córdoba, Argentina — Remoto global
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            {[
              { label: "Servicios", href: "#servicios" },
              { label: "Proyectos", href: "#proyectos" },
              { label: "Equipo", href: "#equipo" },
              { label: "Contacto", href: "#contacto" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-neon transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social + contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:keiisolutions2@gmail.com"
              className="text-xs text-muted-foreground hover:text-neon transition-colors font-mono"
            >
              keiisolutions2@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/company/keii-solutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Keii Solutions"
              className="w-8 h-8 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-neon hover:border-neon/50 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="w-8 h-8 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-neon hover:border-neon/50 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-muted-foreground">
            &copy; {new Date().getFullYear()} Keii Solutions. Todos los derechos reservados.
          </p>
          <p className="text-[11px] text-muted-foreground">
            Primera consulta sin cargo
            <span className="text-neon ml-1">— siempre.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
