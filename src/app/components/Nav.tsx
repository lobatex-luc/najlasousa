import { AnimatePresence, motion } from 'motion/react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { clinic, whatsappLink } from '../../data/clinic'
import { cx } from '../lib/cx'

const links = [
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
]

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cx('inline-flex items-center gap-2', className)} aria-label={clinic.fullName}>
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden>
        <path d="M12 3c0 5 3.5 8 9 9-5.5 1-9 4-9 9 0-5-3.5-8-9-9 5.5-1 9-4 9-9Z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[24px] leading-none">{clinic.name}</span>
        <span className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted">Estética facial</span>
      </span>
    </a>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={cx('sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-300', scrolled ? 'border-b border-line bg-bg/85 backdrop-blur-xl' : 'bg-bg')}>
        <div className="mx-auto grid h-16 max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8">
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="inline-flex h-9 items-center rounded-[11px] px-3 text-[14px] text-muted transition-colors hover:bg-surface-2 hover:text-fg">
                {l.label}
              </a>
            ))}
          </nav>
          <button type="button" aria-label="Abrir menu" onClick={() => setOpen(true)} className="grid size-10 place-items-center rounded-control lg:hidden">
            <Menu className="size-5" />
          </button>

          <Logo />

          <div className="flex items-center justify-end gap-1">
            <a href={clinic.instagram} target="_blank" rel="noreferrer" className="hidden h-9 items-center rounded-[11px] px-3 text-[14px] text-muted transition-colors hover:bg-surface-2 hover:text-fg sm:inline-flex">
              Instagram
            </a>
            <a href={whatsappLink()} aria-label="Agendar pelo WhatsApp" target="_blank" rel="noreferrer" className="inline-flex h-10 items-center gap-2 rounded-control bg-fg px-4 text-[14px] font-medium text-bg transition-colors hover:bg-[#33302b]">
              <MessageCircle className="size-4" />
              <span className="hidden sm:inline">Agendar</span>
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 bg-fg/30 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <motion.nav
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -24, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-2 left-2 flex w-[300px] flex-col rounded-dialog bg-bg p-5 shadow-drawer"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button type="button" aria-label="Fechar" onClick={() => setOpen(false)} className="grid size-10 place-items-center rounded-control hover:bg-surface-2">
                  <X className="size-5" />
                </button>
              </div>
              <ul className="mt-8 flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={() => setOpen(false)} className="flex h-12 items-center rounded-control px-3 font-display text-[28px] hover:bg-surface-2">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-2 border-t border-line pt-5">
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-control bg-fg text-[15px] font-medium text-bg">
                  <MessageCircle className="size-4" />
                  Agendar avaliação
                </a>
                <a href={clinic.instagram} target="_blank" rel="noreferrer" className="flex h-11 items-center justify-center rounded-control text-[14px] text-muted">
                  {clinic.instagramHandle}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
