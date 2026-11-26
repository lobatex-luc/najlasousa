import { ArrowRight, AtSign, MapPin, MessageCircle } from 'lucide-react'

import { clinic, treatments, whatsappLink } from '../../data/clinic'
import { Logo } from './Nav'
import { Container } from './ui'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="max-w-md">
            <h2 className="font-display text-[36px] leading-[1.05]">Cada pele conta uma história. Qual é a sua?</h2>
            <p className="mt-3 text-[15px] text-muted">Me chame no WhatsApp e vamos conversar sobre o que a sua pele precisa, sem compromisso.</p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-control bg-fg px-6 text-[15px] font-medium text-bg transition-colors hover:bg-[#33302b]"
            >
              <MessageCircle className="size-4" />
              Agendar avaliação
              <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <p className="text-[13px] font-medium">Tratamentos</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {treatments.slice(0, 4).map((t) => (
                  <li key={t.title}>
                    <a href="#tratamentos" className="text-[14px] text-muted transition-colors hover:text-fg">
                      {t.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[13px] font-medium">Clínica</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {[
                  ['Sobre a Najla', '#sobre'],
                  ['Depoimentos', '#depoimentos'],
                  ['Dúvidas', '#duvidas'],
                  ['Localização', '#contato'],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-[14px] text-muted transition-colors hover:text-fg">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[13px] font-medium">Contato</p>
              <ul className="mt-4 flex flex-col gap-2.5 text-[14px] text-muted">
                <li>
                  <a href={`tel:+${clinic.whatsapp}`} className="transition-colors hover:text-fg">
                    {clinic.whatsappDisplay}
                  </a>
                </li>
                <li>
                  <a href={clinic.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
                    <AtSign className="size-3.5" />
                    {clinic.instagramHandle}
                  </a>
                </li>
                <li>
                  <a href={clinic.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-start gap-1.5 transition-colors hover:text-fg">
                    <MapPin className="mt-0.5 size-3.5 shrink-0" />
                    <span>
                      {clinic.address}
                      <br />
                      {clinic.neighborhood}, {clinic.city}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-faint">
            © {new Date().getFullYear()} {clinic.fullName}. Estética facial em {clinic.city}, SC.
          </p>
          <Logo className="text-muted" />
        </div>
      </Container>
    </footer>
  )
}
