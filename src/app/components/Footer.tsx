import { clinic } from '../../data/clinic'
import { Container } from './ui'
export function Footer() {
  return <footer><Container className="flex flex-wrap items-center justify-between gap-4 py-6 text-sm text-muted">
    <span>© {new Date().getFullYear()} {clinic.fullName}</span>
    <a href="#top" className="underline underline-offset-4">Voltar ao início</a>
  </Container></footer>
}
