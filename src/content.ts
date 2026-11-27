// Toda a copy da página fica aqui — edite este arquivo para mudar textos, preços e links.

export const PRODUCT = {
  name: "Trilogia Essencial da Dança",
  subtitle: "Ballet, Jazz e Contemporânea com BrumDance",
  edition: "Nova edição",
};

// ⚠️ BLACK FRIDAY: troque pelo link da oferta de R$247 criada na Hotmart.
// (o código "off=1cybajhg" abaixo é o da oferta antiga de R$397)
export const CHECKOUT_URL =
  "https://pay.hotmart.com/B102786927K?off=1cybajhg&checkoutMode=10";

export const PROMO = {
  label: "Black Friday",
  from: "R$1.191",
  to: "R$247",
  discount: "79% OFF",
  // Fim da contagem regressiva (horário de Brasília). Depois disso o contador some.
  endsAt: "2026-11-30T23:59:59-03:00",
  ticker: ["Black Friday", "79% OFF", "Trilogia Essencial por R$247", "Ballet • Jazz • Contemporânea", "Nova edição"],
};

export const YOUTUBE_ID = "SK7Z7CLzB98";

export const topBar = {
  b: "Trilogia Essencial de R$1.191 por R$247",
  c: "Nova edição • Só na Black Friday!",
};

export const hero = {
  title: "Trilogia Essencial da Dança",
  highlight: "Ballet, Jazz e Contemporânea",
  text: "30 aulas para te levar do zero ao essencial na técnica + 6 aulas bônus.",
  cta: "Garantir por R$247",
  under: "7 dias de garantia • Compra segura",
};

export const features = [
  "30 aulas + 6 aulas bônus",
  "10 aulas de cada modalidade",
  "Do zero ao essencial na técnica",
  "Planos de estudo de 3 a 10 meses",
  "2 anos de acesso + certificado",
];

export const video = {
  title: "A jornada que destravou minha técnica e minha ministração,",
  highlight: "e vai destravar a sua.",
  text: "Em poucos minutos, a Prof.ª Ana Brum explica por que tantas alunas travam (falta de base, medo de errar, rotina corrida) e como a metodologia Brumdance resolve isso com aulas claras, uma técnica por vez e um plano de estudo que cabe na sua rotina.",
  cta: "Quero aproveitar a Black Friday",
};

export const forWhom = {
  eyebrow: "Para quem é",
  title: "Descubra se a",
  highlight: "Trilogia é para você",
  yes: [
    "Iniciantes (ou quem está retornando) que desejam base sólida sem sair de casa.",
    "Ministras e líderes de dança que querem excelência técnica e segurança para ministrar.",
    "Bailarinas e professoras que querem aperfeiçoar seus conhecimentos em cada modalidade e entender novas formas de ensinar com segurança.",
  ],
  no: [
    "Quem não pretende reservar ao menos uma aula por semana para treinar.",
    "Quem busca somente certificação sem estudo prático.",
  ],
};

export const schoolsIntro = {
  tag: "30 aulas + 6 bônus",
  title: "Por dentro da",
  highlight: "Trilogia Essencial",
};

export const schools = [
  {
    name: "Ballet Essencial",
    image: "/images/ballet.webp",
    lessons: "10 aulas + 2 aulas bônus",
    topics: [
      "Postura",
      "Mãos e dedos",
      "Posições de braços e pés",
      "Plié",
      "Tendu",
      "Elevé",
      "Relevé",
      "Jeté",
      "Rond de jambe",
      "Relevé lent",
      "Fondu",
      "Dégagé",
      "Transferências",
      "Chassé",
      "Retiré",
      "Coupé",
      "Passé com pequenos e grandes braços",
      "Glissade",
      "Pequenos saltos",
      "Grand battement",
      "Développé",
      "Valsa (pas balancé)",
      "Chaîné",
      "Alongamento e fortalecimento",
      "Coreografia",
    ],
  },
  {
    name: "Jazz Essencial",
    image: "/images/jazz.webp",
    lessons: "10 aulas + 2 aulas bônus",
    topics: [
      "Postura",
      "Braços",
      "Posições paralelas",
      "Tendu",
      "Elevé",
      "Relevé",
      "Catavento",
      "Twist",
      "Isolamentos de tronco",
      "Kicks",
      "Mergulhos",
      "Pivot turn",
      "Ball change",
      "Step ball change",
      "Retiré e preparação de pirueta",
      "Higher kicks",
      "Star jump",
      "Hitch kick",
      "Arc jump",
      "Straight jump",
      "Hitch hike",
      "Slide",
      "Compass turn",
      "Chaîné",
      "Alongamento e fortalecimento",
      "Coreografia",
    ],
  },
  {
    name: "Contemporânea Essencial",
    image: "/images/danca-contemporanea.webp",
    lessons: "10 aulas + 2 aulas bônus",
    topics: [
      "Chão",
      "Abdômen",
      "Familiaridade com o chão",
      "Cloches (legs swing)",
      "Apoio ativo",
      "Concha",
      "Equilíbrio e desequilíbrio",
      "Rolamento",
      "Pêndulos",
      "Espirais (spirals)",
      "Torções (oppositions)",
      "Slides",
      "Cambalhotas (back roll)",
      "Saltos (jumps)",
      "Tombé (leg drop)",
      "Ts (front, side e back T)",
    ],
  },
];

export const studyPlans = {
  tag: "Planos de estudo",
  title: "Escolha o seu",
  highlight: "ritmo de estudo",
  intro: "Cada pessoa tem uma rotina. Por isso, a Trilogia vem com 4 caminhos prontos: é só escolher o seu e seguir.",
  profiles: [
    {
      kind: "light",
      title: "Pouca disciplina? Sem problema.",
      subtitle: "Para quem tende a procrastinar e precisa de um plano simples.",
      options: [
        {
          name: "As 3 modalidades toda semana",
          text: "Faça uma aula de cada modalidade por semana (3 aulas por semana).",
          duration: "3 meses",
        },
        {
          name: "Uma modalidade por vez",
          text: "Faça uma aula por semana de uma só modalidade antes de começar a próxima. Ex.: todas as aulas de ballet primeiro.",
          duration: "8 meses",
        },
      ],
    },
    {
      kind: "full",
      title: "Quer evoluir de forma PLENA?",
      subtitle: "Para quem é focada e quer dominar a proposta técnica de cada aula.",
      options: [
        {
          name: "As 3 modalidades toda semana",
          text: "Faça a aula 1 de cada modalidade toda semana durante um mês. No mês seguinte, faça o mesmo com a aula 2, e assim por diante.",
          duration: "10 meses",
        },
        {
          name: "Uma modalidade por vez",
          text: "Escolha por qual começar e faça a aula 1 toda semana durante um mês; no mês seguinte, a aula 2. Termine a modalidade em 10 meses e siga para a próxima.",
          duration: "2 anos e meio",
        },
      ],
    },
  ],
  note: "A repetição te leva ao entendimento pleno da proposta técnica de cada aula.",
};

export const bonuses = {
  title: "6 aulas bônus",
  highlight: "na nova edição",
  items: [
    { tag: "+2 aulas", title: "Bônus de Ballet", text: "Duas aulas extras para aprofundar o Ballet Essencial." },
    { tag: "+2 aulas", title: "Bônus de Jazz", text: "Duas aulas extras para aprofundar o Jazz Essencial." },
    { tag: "+2 aulas", title: "Bônus de Contemporânea", text: "Duas aulas extras para aprofundar a Contemporânea Essencial." },
  ],
  note: "Inclusas na",
  noteHighlight: "Trilogia Essencial • Nova edição",
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
    { label: "Ballet Essencial: 10 aulas + 2 aulas bônus", price: "R$ 397" },
    { label: "Jazz Essencial: 10 aulas + 2 aulas bônus", price: "R$ 397" },
    { label: "Contemporânea Essencial: 10 aulas + 2 aulas bônus", price: "R$ 397" },
    { label: "4 planos de estudo prontos (de 3 meses a 2 anos e meio)", price: "Incluso" },
    { label: "Acesso por 2 anos + Certificado", price: "Incluso" },
  ],
  total: "R$ 1.191,00",
  // Parcelado: confira o valor exato da parcela no checkout da Hotmart.
  installment: "ou em até 12x no cartão",
  cash: "R$247",
  cta: "Quero a Trilogia por R$247",
  under: "Garantia 7 dias • Acesso imediato • Pagamento seguro",
  question:
    "Se tudo isso te ajudasse a ganhar postura e confiança nas próximas 4 semanas, valeria R$ 247?",
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
  { q: "Sou iniciante. Vou conseguir?", a: "Sim. As 30 aulas te levam do zero ao essencial na técnica, uma etapa por vez." },
  { q: "Quantas aulas são?", a: "30 aulas (10 de Ballet, 10 de Jazz e 10 de Contemporânea) + 6 aulas bônus, 2 de cada modalidade." },
  { q: "Em quanto tempo eu termino?", a: "Depende do ritmo que você escolher: de 3 meses (uma aula de cada modalidade por semana) a 10 meses no plano pleno com as 3 modalidades juntas." },
  { q: "Preciso de muito espaço/equipamentos?", a: "Não. Há adaptações para sala/quarto e uma lista simples de acessórios opcionais." },
  { q: "Por quanto tempo terei acesso?", a: "2 anos a partir da compra." },
  { q: "Recebo certificado?", a: "Sim, certificado de conclusão ao finalizar as trilhas." },
  { q: "Consigo assistir no celular/TV/computador?", a: "Sim. A plataforma funciona no navegador e permite espelhar para TV." },
  { q: "E se eu não gostar?", a: "Ativamos a garantia de 7 dias — basta solicitar dentro do prazo." },
];

export const finalCta = {
  cta: "Trilogia Essencial por R$247",
  note: "Preço de Black Friday — nunca mais vai acontecer!",
};
