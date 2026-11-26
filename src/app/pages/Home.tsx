import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight, AtSign, Check, Clock, HeartHandshake, MapPin, MessageCircle, Minus, Plus, ShieldCheck, Sparkles, Star } from 'lucide-react'
import { useState } from 'react'

import { alsoOffered, clinic, faq, steps, testimonials, treatments, whatsappLink } from '../../data/clinic'
import { AnchorButton, Container, Reveal, SectionTitle, buttonClass } from '../components/ui'
import { cx } from '../lib/cx'

const ease = [0.22, 1, 0.36, 1] as const

const bullets = [
  {
    icon: HeartHandshake,
    title: 'Atendimento humanizado',
    body: 'Cada pessoa no seu tempo, com acolhimento de verdade.',
  },
  {
    icon: Sparkles,
    title: 'Protocolo personalizado',
    body: 'Nada de receita pronta: o plano nasce da sua pele.',
  },
  {
    icon: ShieldCheck,
    title: 'Técnica e tecnologia',
    body: 'Esteticista facial e estudante de Farmácia.',
  },
  {
    icon: MapPin,
    title: 'No Aventureiro',
    body: 'Estacionamento no local e acesso acessível.',
  },
]

export function Home() {
  return (
    <>
      {/* Hero */}
      <section id="top" className="pt-10 sm:pt-16">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div className="pb-4">
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="text-[14px] text-muted">
                Estética facial · {clinic.city}, SC
              </motion.p>
              <h1 className="font-display mt-4 text-[56px] leading-[0.98] sm:text-[78px] lg:text-[92px]">
                {['Cada pele', 'conta uma'].map((line, i) => (
                  <span key={line} className="block overflow-hidden pb-[0.18em] -mb-[0.18em]">
                    <motion.span className="block" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease }}>
                      {i === 1 ? (
                        <>
                          conta uma <em className="italic text-accent">história</em>
                        </>
                      ) : (
                        line
                      )}
                    </motion.span>
                  </span>
                ))}
              </h1>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.42, ease }} className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
                Sou Najla Sousa, esteticista facial em Joinville. Tratamentos personalizados para acne, manchas, poros dilatados, oleosidade e
                rejuvenescimento — com técnica, tecnologia e cuidado humano.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.52, ease }} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <AnchorButton href={whatsappLink()} target="_blank" rel="noreferrer" size="lg" className="w-full sm:w-auto">
                  Agendar avaliação
                  <ArrowRight />
                </AnchorButton>
                <a href="#tratamentos" className={buttonClass('secondary', 'lg', 'w-full sm:w-auto')}>
                  Ver tratamentos
                </a>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.66 }} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13.5px] text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-flex gap-0.5 text-accent" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </span>
                  <span className="font-medium text-fg">5,0</span> no Google
                </span>
                <span className="hidden size-1 rounded-full bg-line-strong sm:block" />
                <span>Terça a sábado, com horário marcado</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease }}
              className="image-frame relative aspect-[4/3] rounded-[32px] lg:aspect-[5/4]"
            >
              <img src="/images/hero.jpg" alt="Mulher de pele luminosa em ambiente claro de estética facial" className="size-full object-cover" fetchPriority="high" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 left-4 flex items-center gap-3 rounded-[16px] bg-surface/90 py-2 pl-2 pr-4 text-[13px] shadow-soft backdrop-blur transition-colors hover:bg-surface"
              >
                <span className="image-frame size-10 rounded-[12px]">
                  <img src="/images/pele.jpg" alt="" className="size-full object-cover" />
                </span>
                <span>
                  <span className="block font-medium">Avaliação personalizada</span>
                  <span className="text-muted">{clinic.neighborhood}, {clinic.city}</span>
                </span>
                <ArrowUpRight className="size-4 text-muted" />
              </a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Promises */}
      <section className="pt-16 sm:pt-24">
        <Container>
          <ul className="grid gap-6 border-y border-line py-9 sm:grid-cols-2 lg:grid-cols-4">
            {bullets.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <li className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-[14px] bg-surface-2 text-fg">
                    <Icon className="size-4.5" />
                  </span>
                  <div>
                    <p className="text-[15px] font-medium">{title}</p>
                    <p className="mt-0.5 text-[14px] text-muted">{body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Tratamentos */}
      <section id="tratamentos" className="scroll-mt-24 pt-24 sm:pt-32">
        <Container>
          <Reveal>
            <SectionTitle
              eyebrow="Tratamentos"
              title="Protocolos para cada tipo de pele"
              action={
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 text-[14px] text-muted transition-colors hover:text-fg sm:inline-flex">
                  Tirar dúvidas
                  <ArrowRight className="size-4" />
                </a>
              }
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {treatments.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 0.07}>
                <article className="group flex h-full flex-col rounded-card border border-line bg-surface p-6 transition-colors hover:border-line-strong">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[12.5px] uppercase tracking-[0.14em] text-faint">{t.short}</p>
                      <h3 className="font-display mt-2 text-[30px] leading-none">{t.title}</h3>
                    </div>
                    <span className="mt-1 text-[12.5px] tabular-nums text-faint">0{i + 1}</span>
                  </div>
                  <p className="mt-4 text-pretty text-[14.5px] leading-relaxed text-muted">{t.body}</p>
                  <ul className="mt-5 flex flex-col gap-1.5">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[13.5px] text-fg">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Olá, Najla! Gostaria de saber mais sobre o tratamento de ${t.title.toLowerCase()}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 self-start border-b border-transparent pb-0.5 text-[13.5px] font-medium transition-colors hover:border-fg"
                  >
                    Falar sobre esse tratamento
                    <ArrowUpRight className="size-3.5 text-muted" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 flex flex-col items-start gap-3 rounded-card bg-surface-2/60 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[14px] text-muted">
              <span className="font-medium text-fg">Também no consultório:</span> {alsoOffered.join(' · ')}
            </p>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[14px] font-medium transition-colors hover:text-accent">
              Ver o que faz sentido para você
              <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </Container>
      </section>

      {/* Sobre */}
      <section id="sobre" className="scroll-mt-24 pt-24 sm:pt-32">
        <Container>
          <div className="grid items-center gap-10 rounded-[32px] bg-surface-2/60 p-5 sm:p-8 lg:grid-cols-2 lg:gap-16 lg:p-12">
            <Reveal className="image-frame aspect-[4/5] rounded-image">
              <img src="/images/consultorio.jpg" alt="Consultório de estética facial com luz natural e tons claros" className="size-full object-cover" loading="lazy" />
            </Reveal>
            <Reveal delay={0.1} className="lg:pr-8">
              <p className="text-[14px] text-muted">Sobre</p>
              <h2 className="font-display mt-3 text-balance text-[40px] leading-[1.02] sm:text-[52px]">
                Técnica, tecnologia e cuidado no mesmo lugar
              </h2>
              <p className="mt-5 text-pretty text-[16px] leading-relaxed text-muted">
                Sou Najla Sousa, esteticista facial e estudante de Farmácia. Trabalho com estética facial integrativa e tratamentos
                personalizados, unindo conhecimento técnico a uma escuta atenta do que a sua pele pede.
              </p>
              <p className="mt-4 text-pretty text-[16px] leading-relaxed text-muted">
                Meu compromisso é uma pele mais saudável e resultados naturais, em um ambiente acolhedor — do primeiro contato ao home care.
              </p>
              <ul className="mt-7 flex flex-col gap-2.5 border-t border-line pt-6">
                {['Esteticista facial e estudante de Farmácia', 'Especialista em pele masculina e feminina', 'Atendimento humanizado para adolescentes e pessoas com TEA'].map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-[14.5px]">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    {line}
                  </li>
                ))}
              </ul>
              <a href={clinic.instagram} target="_blank" rel="noreferrer" className={buttonClass('secondary', 'md', 'mt-8')}>
                <AtSign />
                Ver no Instagram
              </a>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Como funciona */}
      <section className="pt-24 sm:pt-32">
        <Container>
          <Reveal>
            <SectionTitle eyebrow="Como funciona" title="Do primeiro contato ao resultado" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="border-t border-line-strong pt-5">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-[28px] leading-none">{s.title}</h3>
                    <span className="font-display text-[22px] text-faint">0{i + 1}</span>
                  </div>
                  <p className="mt-3 text-pretty text-[14.5px] leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="scroll-mt-24 pt-24 sm:pt-32">
        <Container>
          <div className="grid gap-4 md:grid-cols-[1.1fr_1fr] lg:gap-6">
            <Reveal className="image-frame relative aspect-[4/3] rounded-image md:aspect-auto md:min-h-[420px]">
              <img src="/images/tratamento.jpg" alt="Aplicação de máscara facial durante um atendimento" className="absolute inset-0 size-full object-cover" loading="lazy" />
              <div className="absolute inset-x-4 bottom-4 rounded-[18px] bg-surface/90 p-4 backdrop-blur">
                <div className="flex items-center gap-1 text-accent" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-[14px] leading-snug">
                  <span className="font-medium">5,0 no Google</span> — avaliações de quem passa pelo consultório.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4">
              <Reveal>
                <h2 className="font-display text-balance text-[36px] leading-[1.02] sm:text-[44px]">Quem senta na cadeira não sai só com a pele melhor</h2>
              </Reveal>
              {testimonials.slice(0, 2).map((t, i) => (
                <Reveal key={t.quote} delay={0.08 + i * 0.06}>
                  <blockquote className="rounded-card border border-line bg-surface p-6">
                    <p className="text-pretty text-[15px] leading-relaxed">“{t.quote}”</p>
                    <footer className="mt-4 text-[13px] text-muted">{t.source}</footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Dúvidas */}
      <section id="duvidas" className="scroll-mt-24 pt-24 sm:pt-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <p className="text-[14px] text-muted">Dúvidas</p>
              <h2 className="font-display mt-3 text-balance text-[40px] leading-[1.02] sm:text-[48px]">Antes de agendar</h2>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
                Se a sua pergunta não estiver aqui, me chame no WhatsApp. Respondo pessoalmente.
              </p>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className={buttonClass('secondary', 'md', 'mt-6')}>
                <MessageCircle />
                Falar com a Najla
              </a>
            </Reveal>
            <Faq />
          </div>
        </Container>
      </section>

      {/* Contato */}
      <section id="contato" className="scroll-mt-24 pt-24 sm:pt-32">
        <Container>
          <div className="grid overflow-hidden rounded-[32px] border border-line bg-surface lg:grid-cols-[1.1fr_1fr]">
            <div className="p-6 sm:p-10 lg:p-12">
              <p className="text-[14px] text-muted">Contato</p>
              <h2 className="font-display mt-3 text-balance text-[40px] leading-[1.02] sm:text-[52px]">Vamos falar da sua pele?</h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                Atendimento com horário marcado, no bairro {clinic.neighborhood}, em {clinic.city}. Agende sua avaliação pelo WhatsApp.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <AnchorButton href={whatsappLink()} target="_blank" rel="noreferrer" size="lg">
                  <MessageCircle />
                  {clinic.whatsappDisplay}
                </AnchorButton>
                <a href={clinic.mapsUrl} target="_blank" rel="noreferrer" className={buttonClass('secondary', 'lg')}>
                  <MapPin />
                  Ver no mapa
                </a>
              </div>
            </div>
            <div className="border-t border-line bg-bg p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <dl className="flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-muted" />
                  <div>
                    <dt className="text-[12.5px] uppercase tracking-[0.14em] text-faint">Endereço</dt>
                    <dd className="mt-1 text-[15px] leading-relaxed">
                      {clinic.address}
                      <br />
                      {clinic.addressLine2}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-muted" />
                  <div className="w-full">
                    <dt className="text-[12.5px] uppercase tracking-[0.14em] text-faint">Horários</dt>
                    <dd className="mt-2 flex flex-col gap-1.5">
                      {clinic.hours.map((h) => (
                        <div key={h.days} className="flex items-baseline justify-between gap-4 text-[14.5px]">
                          <span className="text-muted">{h.days}</span>
                          <span className="tabular-nums">{h.time}</span>
                        </div>
                      ))}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AtSign className="mt-0.5 size-4 shrink-0 text-muted" />
                  <div>
                    <dt className="text-[12.5px] uppercase tracking-[0.14em] text-faint">Instagram</dt>
                    <dd className="mt-1 text-[15px]">
                      <a href={clinic.instagram} target="_blank" rel="noreferrer" className="underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-fg">
                        {clinic.instagramHandle}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <Reveal delay={0.08}>
      <ul className="border-t border-line">
        {faq.map((item, i) => {
          const isOpen = open === i
          return (
            <li key={item.q} className="border-b border-line">
              <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-6 py-5 text-left text-[15.5px] font-medium">
                {item.q}
                <span className={cx('grid size-8 shrink-0 place-items-center rounded-[10px] border border-line transition-colors', isOpen && 'border-fg bg-fg text-bg')}>
                  {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.32, ease }}
                className="overflow-hidden"
              >
                <p className="max-w-xl pb-5 pr-10 text-[14.5px] leading-relaxed text-muted">{item.a}</p>
              </motion.div>
            </li>
          )
        })}
      </ul>
    </Reveal>
  )
}
