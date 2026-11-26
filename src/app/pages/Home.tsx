import { ArrowUpRight, Plus } from 'lucide-react'
import { clinic, testimonials, whatsappLink } from '../../data/clinic'
import { Container } from '../components/ui'

const imagePath = (name: string) => `${import.meta.env.BASE_URL}images/${name}.jpg`
const services = [
  ['Limpeza de pele', 'Higienização, extração e hidratação na mesma sessão.'],
  ['Acne e oleosidade', 'Protocolo Acne No More e orientação para os cuidados em casa.'],
  ['Marcas e manchas', 'Avaliação de marcas de acne, manchas e diferenças no tom da pele.'],
  ['Poros e textura', 'Cuidados para quem percebe poros mais aparentes ou textura irregular.'],
  ['Rejuvenescimento', 'Avaliação de linhas finas, luminosidade e firmeza.'],
  ['Lipopress de papada', 'Atendimento voltado à região abaixo do queixo.'],
]
const questions = [
  ['Como funciona a primeira visita?', 'Conversamos sobre sua rotina, os produtos que usa e o que deseja cuidar. Depois de avaliar sua pele, explico as opções, os valores e o intervalo entre as sessões.'],
  ['Quem pode agendar?', 'Atendo adultos e adolescentes. Se precisar de alguma adaptação para a visita, pode combinar comigo pelo WhatsApp.'],
  ['Como consultar horários e valores?', 'Envie uma mensagem pelo WhatsApp com o cuidado que procura. Por lá, você pode consultar a agenda e tirar dúvidas antes da visita.'],
]
const heading = 'font-display text-[42px] leading-[1.02] sm:text-[58px]'
const button = 'inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#713f31] px-6 font-medium text-white transition-colors hover:bg-[#513024]'
export function Home() {
  return <>
    <section id="top" className="scroll-mt-20">
      <Container className="py-5 sm:py-8">
        <div className="grid overflow-hidden rounded-[28px] bg-[#eee4d7] md:grid-cols-[1fr_1.02fr]">
          <div className="flex flex-col items-start justify-center p-7 sm:p-12 lg:p-16">
            <p className="mb-6 text-xs font-medium tracking-[0.14em] uppercase text-[#704b3c]">Aventureiro · Joinville</p>
            <h1 className="font-display text-[clamp(52px,6.2vw,88px)] leading-[0.98]">Estética facial<br/><em className="text-[#81513f]">com Najla Sousa</em></h1>
            <p className="my-7 max-w-sm text-base leading-relaxed text-muted">Quer cuidar da acne, das manchas ou da textura da pele? Na avaliação, conversamos sobre o que te incomoda e definimos por onde começar.</p>
            <a href={whatsappLink()} className={button}>Agendar avaliação <ArrowUpRight size={17}/></a>
          </div>
          <img src={imagePath('hero')} alt="Retrato ilustrativo de cuidados com a pele" fetchPriority="high" className="h-[330px] w-full object-cover sm:h-[440px] md:h-full md:min-h-[490px]"/>
        </div>
      </Container>
    </section>
    <section id="tratamentos" className="scroll-mt-20">
      <Container className="py-12 sm:py-20">
        <h2 className={heading}>Tratamentos faciais</h2>
        <div className="mt-8 grid gap-9 md:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <img src={imagePath('tratamento')} alt="Aplicação de máscara facial com pincel" loading="lazy" className="h-60 w-full rounded-[22px] object-cover md:h-full md:max-h-[520px]"/>
          <div className="border-t border-line-strong">{services.map(([title, body]) =>
            <details key={title} className="group border-b border-line-strong py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-[28px]">{title}<Plus aria-hidden size={18} className="shrink-0 transition-transform group-open:rotate-45"/></summary>
              <p className="max-w-lg pb-4 leading-relaxed text-muted">{body}</p>
            </details>)}</div>
        </div>
      </Container>
    </section>
    <section id="sobre" className="scroll-mt-20 bg-[#eae6dd]">
      <Container className="grid items-center gap-8 py-12 md:grid-cols-2 md:gap-16 sm:py-16">
        <div><h2 className={heading}>Conheça a Najla</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed">Sou esteticista facial e estudante de Farmácia. No meu consultório em Joinville, gosto de entender como você cuida da pele no dia a dia para propor uma rotina que faça sentido para você.</p>
          <a href={clinic.instagram} className="mt-5 inline-flex items-center gap-2 underline underline-offset-4">Meu trabalho no Instagram <ArrowUpRight size={16}/></a></div>
        <figure><img src={imagePath('consultorio')} loading="lazy" className="aspect-[1.8] w-full rounded-[20px] object-cover" alt="Ambiente ilustrativo de atendimento facial"/><figcaption className="mt-2 text-xs text-muted">Imagem ilustrativa de consultório.</figcaption></figure>
      </Container>
    </section>
    <section id="depoimentos" className="scroll-mt-20"><Container className="py-14 text-center sm:py-20">
      <h2 className="text-sm font-medium text-muted">Quem já passou pela clínica</h2>
      <blockquote className="mx-auto my-5 max-w-3xl font-display text-[34px] italic sm:text-[46px]">“{testimonials[0].quote}”</blockquote>
      <a className="text-sm underline underline-offset-4" href={clinic.mapsUrl}>Ver avaliações no Google</a>
    </Container></section>
    <section id="duvidas" className="scroll-mt-20"><Container className="grid gap-6 border-t border-line py-12 md:grid-cols-[0.8fr_1.2fr] sm:py-16"><h2 className={heading}>Antes da visita</h2>
      <div>{questions.map(([question, answer]) => <details key={question} className="group border-b border-line-strong"><summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 font-medium">{question}<Plus aria-hidden size={16} className="shrink-0 group-open:rotate-45"/></summary><p className="pb-4 leading-relaxed text-muted">{answer}</p></details>)}</div>
    </Container></section>
    <section id="contato" className="scroll-mt-20 bg-[#49382f] text-[#faf4eb]"><Container className="grid gap-8 py-12 sm:py-16 md:grid-cols-2">
      <div><h2 className={heading}>Visite a clínica</h2><address className="my-5 not-italic">{clinic.address}<br/>{clinic.addressLine2}</address><a href={clinic.mapsUrl} className="inline-flex items-center gap-2 underline underline-offset-4">Abrir rota no mapa <ArrowUpRight size={16}/></a></div>
      <div><h3 className="font-display text-3xl">Horários de atendimento</h3><dl className="mt-4 max-w-md">{clinic.hours.map(({ days, time }) => <div key={days} className="flex justify-between gap-3 border-b border-white/25 py-2"><dt>{days}</dt><dd>{time}</dd></div>)}</dl><a href={whatsappLink()} className="mt-5 inline-flex items-center gap-2 font-medium underline underline-offset-4">WhatsApp {clinic.whatsappDisplay}<ArrowUpRight size={16}/></a></div>
    </Container></section>
  </>
}
