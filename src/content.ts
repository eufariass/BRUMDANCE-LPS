// Toda a copy da página fica aqui — edite este arquivo para mudar textos, preços e links.

// ⚠️ BLACK FRIDAY: troque pelo link da oferta de R$147 criada na Hotmart.
// (o código "off=1cybajhg" abaixo é o da oferta antiga de R$397)
export const CHECKOUT_URL =
  "https://pay.hotmart.com/B102786927K?off=1cybajhg&checkoutMode=10";

export const PROMO = {
  label: "Black Friday",
  from: "R$397",
  to: "R$147",
  discount: "63% OFF",
  // Fim da contagem regressiva (horário de Brasília). Depois disso o contador some.
  endsAt: "2026-11-30T23:59:59-03:00",
  ticker: ["Black Friday", "63% OFF", "3 escolas por R$147", "Ballet • Jazz • Contemporâneo", "Bônus exclusivos"],
};

export const YOUTUBE_ID = "SK7Z7CLzB98";

export const topBar = {
  a: "BLACK FRIDAY Brumdance",
  b: "3 escolas de R$397 por R$147",
  c: "Menor preço que já fizemos!",
};

export const hero = {
  title: "Ballet + Jazz + Contemporâneo:",
  highlight: "3 escolas pelo preço\u00a0de\u00a01.",
  text: "20 min por dia. Progresso real em\u00a04\u00a0semanas.",
  chip: "2 anos de acesso • Certificado • Aulas Bônus",
  cta: "Garantir por R$147",
  under: "7 dias de garantia • Compra segura",
};

export const features = [
  "Ballet, Jazz e Contemporâneo",
  "Aulas curtas e detalhadas",
  "2 anos de acesso + certificado",
  "Celular, computador e TV",
  "Trilha de Ministração",
];

export const video = {
  title: "A jornada que destravou minha técnica e minha ministração,",
  highlight: "e vai destravar a sua.",
  text: "Em poucos minutos, a Prof.ª Ana Brum explica por que tantas alunas travam (falta de base, medo de errar, rotina corrida) e como a metodologia Brumdance resolve isso com aulas curtas, trilhas por nível e uma metodologia clara.",
  cta: "Quero aproveitar a Black Friday",
};

export const forWhom = {
  eyebrow: "Para quem é",
  title: "Descubra se a",
  highlight: "Brumdance é para você",
  yes: [
    "Iniciantes (ou quem está retornando) que desejam base sólida sem sair de casa.",
    "Ministras e líderes de dança que querem excelência técnica e segurança para ministrar.",
    "Bailarinas e professoras que querem aperfeiçoar seus conhecimentos em cada modalidade e entender novas formas de ensinar com segurança.",
  ],
  no: [
    "Quem não pretende treinar ao menos 20 min/dia ou uma hora e meia por semana",
    "Quem busca somente certificação sem estudo prático.",
  ],
};

const FORMATO = "aulas curtas (10–25 min), trilhas por nível.";

export const schools = [
  {
    name: "Ballet",
    image: "/images/ballet.webp",
    items: [
      "Barra e Centro: plié, tendu, relevé, rond de jambe, adágio e allegro",
      "Linhas e Postura: braços, mãos, eixos, equilíbrio",
      "Preparação Física e Mobilidade: alongamentos seguros e prevenção de lesões",
      "Coreografia e Musicalidade: combinação progressiva aplicada",
    ],
    format: FORMATO,
  },
  {
    name: "Jazz",
    image: "/images/jazz.webp",
    items: [
      "Fundamentos e Isolamentos (linha, precisão, musicalidade)",
      "Passos-chave: step touch, step ball change, cross touch, giros e saltos",
      "Combos e Criação: frases coreográficas semanais + interpretação",
    ],
    format: FORMATO,
  },
  {
    name: "Dança Contemporânea",
    image: "/images/danca-contemporanea.webp",
    items: [
      "Técnicas de Chão: quedas controladas, rolamentos, peso/contrapeso",
      "Espirais e Reversões: fluidez, respiração e consciência corporal",
      "Improvisação Guiada e Composição (intenção e emoção)",
    ],
    format: FORMATO,
  },
];

export const ministry = {
  title: "Desmistificando a",
  highlight: "Ministração Espontânea",
  items: [
    "Postura no altar: intenção, presença e comunicação não verbal",
    "Entradas e saídas, leitura do ambiente",
    "Expressão facial e olhar (congruência técnica + espiritualidade)",
    "Dinâmicas de movimento e exercícios práticos de espontâneo",
    "Dança no ministério e aplicação consciente",
    "Uso de adereços: fita, lenço, fan-véu, asaflex (segurança e significado)",
    "Significado das cores na ministração",
  ],
  result:
    "técnica com propósito e ministração com excelência e respeito ao ambiente.",
};

export const bonuses = {
  title: "Bônus Exclusivos",
  highlight: "do Pacote Completo!",
  items: [
    {
      tag: "Bônus #1",
      title: "Plano de Treino Anual (Jazz/Ballet/Contemporâneo)",
      text: "Calendário pronto + checklist de evolução.",
    },
    {
      tag: "Bônus #2",
      title: "Gravação de Aula Ao Vivo Especial",
      text: "(Jazz e dança contemporânea)",
    },
    {
      tag: "Bônus #3",
      title: "Playlists/Trilhas Musicais",
      text: "Para praticar combos em casa.",
    },
    {
      tag: "Bônus #4",
      title: "Consultoria Individual",
      text: "Somente para as 5 primeiras.",
    },
  ],
  note: "Bônus disponíveis",
  noteHighlight: "somente durante a Black Friday",
};

export const testimonials = {
  title: "O que",
  highlight: "nossas alunas dizem:",
  images: [
    "/images/Depoimento-4.webp",
    "/images/Depoimento-1.webp",
    "/images/Depoimento-2.webp",
    "/images/Depoimento-3.webp",
  ],
  counter: "+1.000",
  counterLabel: "Alunas treinando com a Brumdance.",
};

export const offer = {
  title: "Tudo o que você",
  highlight: "recebe hoje:",
  items: [
    { label: "Escola Ballet com Brumdance", price: "R$ 397" },
    { label: "Escola Jazz com Brumdance", price: "R$ 397" },
    { label: "Escola Dança Contemporânea com Brumdance", price: "R$ 397" },
    { label: "Trilha Ministerial (comum às 3)", price: "R$ 197" },
    { label: "Bônus #1: Plano de Treino anual", price: "R$ 67" },
    { label: "Bônus #2: Gravação Aula ao Vivo de Jazz e Dança Contemporânea", price: "R$ 197" },
    { label: "Bônus #3: Playlists/Trilhas", price: "R$ 27" },
    { label: "Bônus #4: Consultoria Individual — somente 5 primeiras", price: "R$ 150" },
    { label: "Acesso por 2 anos + Certificado", price: "Único no mercado" },
  ],
  total: "R$ 2.029,00",
  // Parcelado: confira o valor exato da parcela no checkout da Hotmart.
  installment: "ou em até 12x no cartão",
  cash: "R$147",
  from: "R$397",
  cta: "Quero as 3 escolas por R$147",
  under: "Garantia 7 dias • Acesso imediato • Pagamento seguro",
  question:
    "Se tudo isso te ajudasse a ganhar postura e confiança nas próximas 4 semanas, valeria R$ 147?",
  question2: "E se te poupasse meses de dúvidas treinando sozinha, valeria?",
};

export const guarantee = {
  title: "Garantia incondicional",
  highlight: "de 7 dias",
  text: "Experimente as aulas. Se não sentir evolução/clareza, devolvemos",
  textStrong: "100% do investimento.",
  textEnd: "Sem perguntas.",
  note: "A garantia é para quem testou o método — confiamos tanto que assumimos o risco por você.",
};

export const faq = [
  { q: "Sou iniciante. Vou conseguir?", a: "Sim. As trilhas começam do zero e evoluem por etapa com aulas curtas." },
  { q: "Preciso de muito espaço/equipamentos?", a: "Não. Há adaptações para sala/quarto e uma lista simples de acessórios opcionais." },
  { q: "Quanto tempo por dia devo estudar?", a: "Recomendamos 20 min/dia ou 3x por semana." },
  { q: "Por quanto tempo terei acesso?", a: "2 anos a partir da compra." },
  { q: "Recebo certificado?", a: "Sim, certificado de conclusão ao finalizar as trilhas." },
  { q: "Consigo assistir no celular/TV/computador?", a: "Sim. A plataforma funciona no navegador e permite espelhar para TV." },
  { q: "E se eu não gostar?", a: "Ativamos a garantia de 7 dias — basta solicitar dentro do prazo." },
];

export const finalCta = {
  cta: "3 escolas por R$147",
  note: "Preço de Black Friday — nunca mais vai acontecer!",
};
