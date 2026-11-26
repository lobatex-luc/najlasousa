// Conteúdo da clínica. Edite aqui textos, tratamentos e contato.

export const clinic = {
  name: 'Najla Sousa',
  fullName: 'Najla Sousa Estética Facial',
  city: 'Joinville',
  neighborhood: 'Aventureiro',
  address: 'R. Vice-Prefeito Ivan Rodrigues, 150',
  addressLine2: 'Aventureiro · Joinville — SC, 89225-600',
  mapsUrl: 'https://maps.app.goo.gl/i1KMyiTH3CZXw9LU8',
  whatsapp: '5547999184242',
  whatsappDisplay: '(47) 99918-4242',
  instagram: 'https://www.instagram.com/najlasousaesteticafacial/',
  instagramHandle: '@najlasousaesteticafacial',
  hours: [
    { days: 'Terça a sexta', time: '9h às 20h' },
    { days: 'Sábado', time: '7h às 11h' },
    { days: 'Domingo e segunda', time: 'Fechado' },
  ],
}

export const whatsappLink = (message = 'Olá, Najla! Vim pelo site e gostaria de agendar uma avaliação.') =>
  `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`

export interface Treatment {
  title: string
  short: string
  body: string
  bullets: string[]
}

export const treatments: Treatment[] = [
  {
    title: 'Limpeza de pele',
    short: 'O ponto de partida',
    body: 'Higienização, extração cuidadosa e hidratação para desobstruir os poros e devolver o viço. O primeiro passo de quase todo protocolo.',
    bullets: ['Extração sem agredir a pele', 'Máscara calmante e hidratação final'],
  },
  {
    title: 'Acne No More',
    short: 'Acne ativa e oleosidade',
    body: 'Protocolo para acalmar a inflamação, controlar a oleosidade e reduzir novas lesões, com acompanhamento próximo entre as sessões.',
    bullets: ['Controle da acne ativa', 'Orientação de home care'],
  },
  {
    title: 'Marcas e manchas',
    short: 'Tom mais uniforme',
    body: 'Clareamento gradual de marcas de acne e manchas, com ativos escolhidos para o seu tipo de pele — sem pressa e sem agressão.',
    bullets: ['Marcas deixadas pela acne', 'Manchas e melasma'],
  },
  {
    title: 'Poros e textura',
    short: 'Pele refinada',
    body: 'Equilíbrio da produção de sebo e refinamento da textura, para uma pele que parece mais lisa ao toque e à luz do dia.',
    bullets: ['Poros dilatados', 'Oleosidade na zona T'],
  },
  {
    title: 'Rejuvenescimento',
    short: 'Firmeza e luminosidade',
    body: 'Estímulo de colágeno e ativos de renovação para linhas finas, flacidez inicial e aquele cansaço que aparece no rosto.',
    bullets: ['Linhas finas e flacidez inicial', 'Resultados naturais, progressivos'],
  },
  {
    title: 'Lipopress de papada',
    short: 'Contorno definido',
    body: 'Drenagem e estímulo na região submentoniana para reduzir o inchaço e desenhar o contorno da mandíbula.',
    bullets: ['Drenagem localizada', 'Contorno do rosto mais definido'],
  },
]

export const alsoOffered = ['Lip volume', 'Estética facial masculina', 'Atendimento para adolescentes', 'Atendimento para pessoas com TEA']

export const steps = [
  {
    title: 'Conversa inicial',
    body: 'Você me conta o que incomoda na sua pele, há quanto tempo e o que já tentou. Começamos pelo WhatsApp, sem compromisso.',
  },
  {
    title: 'Avaliação da pele',
    body: 'No consultório eu analiso a pele de perto e monto um protocolo com o número de sessões e o intervalo ideal para o seu caso.',
  },
  {
    title: 'Protocolo e acompanhamento',
    body: 'Cada sessão é ajustada ao que a sua pele responde. Você sai com orientações de home care para o resultado continuar em casa.',
  },
]

export const testimonials = [
  {
    quote: 'Atendimento impecável do início ao fim. Profissional extremamente competente, cuidadosa e atenciosa. Ambiente organizado e acolhedor.',
    source: 'Avaliação no Google',
  },
  {
    quote: 'Além de ser uma excelente profissional, ela já me proporcionou bons resultados na pele com os procedimentos que fiz. É um amor de pessoa.',
    source: 'Avaliação no Google',
  },
  {
    quote: 'Profissional fantástica, sempre simpática e atenciosa. Me recebeu muito bem em todas as vezes que fui.',
    source: 'Avaliação no Google',
  },
]

export const faq = [
  {
    q: 'Preciso de avaliação antes de fazer um tratamento?',
    a: 'Sim. Toda pele responde de um jeito, então a primeira visita é uma avaliação: conversamos sobre o seu histórico, analiso a pele e só então definimos o protocolo e o número de sessões.',
  },
  {
    q: 'Atende adolescentes e pessoas com TEA?',
    a: 'Atendo. O atendimento é humanizado e adaptado ao tempo e às necessidades de cada pessoa, incluindo adolescentes e pessoas com Transtorno do Espectro Autista.',
  },
  {
    q: 'Quantas sessões vou precisar?',
    a: 'Depende do quadro, do tipo de pele e do seu objetivo. Na avaliação você recebe uma estimativa clara, com o intervalo entre as sessões e o que esperar de cada etapa.',
  },
  {
    q: 'Homens também podem agendar?',
    a: 'Sim. A estética facial masculina é uma parte importante do atendimento, com protocolos pensados para pele mais espessa, barba e oleosidade.',
  },
  {
    q: 'Onde fica o consultório e tem estacionamento?',
    a: 'Estou no bairro Aventureiro, em Joinville, com estacionamento no local e acesso acessível para cadeira de rodas.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'As condições e formas de pagamento são combinadas na avaliação. Me chame no WhatsApp que eu te explico os valores do seu protocolo.',
  },
]
