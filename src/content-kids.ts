// Copy da página de lançamento Ballet Kids (/ballet-infantil).
// ⚠️ Itens marcados com CONFIRMAR são sugestões: ajuste para o produto real antes de publicar.

// CONFIRMAR: cole aqui o link do checkout Hotmart do Ballet Kids.
// Enquanto estiver vazio, os botões de compra rolam até a seção de oferta.
export const KIDS_CHECKOUT_URL = "";

export const KIDS_PROMO = {
  label: "Black Friday",
  launch: "Lançamento",
  from: "R$197", // CONFIRMAR
  to: "R$97", // CONFIRMAR
  discount: "50% OFF", // CONFIRMAR
  endsAt: "2026-11-30T23:59:59-03:00",
  ticker: [
    "Ballet Kids",
    "Lançamento Black Friday",
    "Tela do bem",
    "Dança, saúde e diversão",
    "Com a Prof.ª Ana Brum",
  ],
};

export const kidsTopBar = {
  text: "Lançamento Ballet Kids por R$97",
  extra: "Preço especial só na Black Friday!",
};

export const kidsHero = {
  age: "Para crianças de 3 a 10 anos", // CONFIRMAR
  title: "Troque o desenho por",
  highlight: "uma aula de ballet.",
  text: "Aulas curtas e divertidas para os pequenos dançarem em casa com a Prof.ª\u00a0Ana\u00a0Brum.",
  cta: "Quero o Ballet Kids",
  under: "7 dias de garantia • Acesso imediato",
};

export const kidsFeatures = [
  "Aulas de 10 a 15 minutos",
  "Na sala de casa, sem equipamento",
  "Movimento que faz bem à saúde",
  "Base para o ballet presencial",
  "TV, celular ou computador",
];

export const kidsTeacher = {
  eyebrow: "Quem vai dar aula",
  title: "Oi! Eu sou a",
  highlight: "Prof.ª Ana Brum",
  paragraphs: [
    "Bailarina, professora e criadora da Brumdance. Mais de 1.000 alunas já aprendem com a nossa metodologia — e agora eu criei um cantinho especial só para os pequenos.",
    "No Ballet Kids, cada aula tem música, brincadeira e muito carinho, para a criança se movimentar, se expressar e descobrir o ballet do jeitinho certo.",
  ],
  stats: [
    { value: "+1.000", label: "alunas na Brumdance" },
    { value: "3", label: "escolas de dança online" },
  ],
  cta: "Quero que meu filho dance",
};

export const screenTime = {
  eyebrow: "Tempo de tela do bem",
  title: "A criança vai usar a tela.",
  highlight: "Que seja para dançar!",
  bad: {
    title: "Tela que só distrai",
    items: [
      "Horas parada no sofá, só assistindo",
      "Estímulos acelerados que deixam a criança agitada",
      "Conteúdo que você nem sempre sabe o que ensina",
      "Rolagem infinita, sem começo, meio e fim",
    ],
  },
  good: {
    title: "Tela que desenvolve",
    items: [
      "A criança levanta, se mexe e gasta energia",
      "Música, ritmo e concentração em cada aula",
      "Conteúdo criado por uma professora de ballet",
      "Aulas curtas, com começo, meio e fim",
    ],
  },
};

export const kidsBenefits = {
  title: "O que o ballet",
  highlight: "faz pelo seu pequeno",
  items: [
    {
      name: "Saúde e movimento",
      color: "mint",
      items: ["Coordenação motora", "Postura e equilíbrio", "Flexibilidade com segurança", "Energia gasta de um jeito saudável"],
    },
    {
      name: "Foco e disciplina",
      color: "sun",
      items: ["Seguir sequências e combinados", "Mais concentração", "Paciência para aprender passo a passo"],
    },
    {
      name: "Música e criatividade",
      color: "sky",
      items: ["Ritmo e musicalidade", "Expressão e imaginação", "Autoconfiança para se apresentar"],
    },
    {
      name: "Pronta para o ballet presencial",
      color: "candy",
      items: [
        "Primeiras posições de pés e braços",
        "Nomes dos passos em francês",
        "Como se comportar na sala de aula",
        "Chega na escola de dança mais segura",
      ],
    },
  ] as const,
};

export const howItWorks = {
  title: "Como funciona o",
  highlight: "Ballet Kids",
  steps: [
    "Aperte o play e dance junto com a professora",
    "Aulas de 10 a 15 minutos: cabem em qualquer rotina",
    "Brincadeiras, histórias e música em cada aula",
    "Do plié ao relevé, passo a passo",
    "Os pais podem dançar junto",
    "Funciona na sala, no quarto ou na varanda",
    "Assista na TV, no celular ou no computador",
  ],
  result:
    "uma criança mais ativa, mais concentrada e apaixonada pelo ballet, trocando a tela parada pela tela em movimento.",
};

// CONFIRMAR: bônus sugeridos para o lançamento.
export const kidsBonuses = {
  title: "Bônus de",
  highlight: "lançamento",
  items: [
    { tag: "Bônus #1", title: "Certificado de Pequena Bailarina", text: "Para imprimir e colocar na parede." },
    { tag: "Bônus #2", title: "Playlist Ballet Kids", text: "Músicas para dançar fora das aulas." },
    { tag: "Bônus #3", title: "Calendário de Aulas para Colorir", text: "A criança pinta cada aula feita e vê o próprio progresso." },
    { tag: "Bônus #4", title: "Guia para os Pais", text: "Como montar o cantinho da dança e escolher a primeira escola presencial." },
  ],
  note: "Bônus exclusivos do lançamento,",
  noteHighlight: "só na Black Friday",
};

export const kidsOffer = {
  title: "Tudo o que",
  highlight: "seu pequeno recebe:",
  items: [
    { label: "Ballet Kids: aulas completas com a Prof.ª Ana Brum", price: "R$ 197" },
    { label: "Trilha de preparação para o ballet presencial", price: "R$ 97" },
    { label: "Bônus #1: Certificado de Pequena Bailarina", price: "R$ 27" },
    { label: "Bônus #2: Playlist Ballet Kids", price: "R$ 27" },
    { label: "Bônus #3: Calendário de Aulas para Colorir", price: "R$ 27" },
    { label: "Bônus #4: Guia para os Pais", price: "R$ 47" },
    { label: "Acesso pela TV, celular e computador", price: "Incluso" },
  ],
  total: "R$ 422,00",
  from: "R$197",
  cash: "R$97",
  installment: "ou em até 12x no cartão",
  cta: "Quero o Ballet Kids por R$97",
  under: "Garantia 7 dias • Acesso imediato • Pagamento seguro",
  question: "Quanto vale ver seu filho trocando o sofá pela dança e pedindo para fazer aula de ballet?",
  question2: "Por menos que uma mensalidade de escola de dança, ele começa hoje, em casa.",
};

export const kidsGuarantee = {
  title: "Garantia de",
  highlight: "7 dias",
  text: "Coloque as aulas para o seu pequeno. Se ele não se divertir, devolvemos",
  textStrong: "100% do valor.",
  textEnd: "Sem perguntas.",
  note: "O risco é todo nosso. A alegria fica com vocês.",
};

export const kidsFaq = [
  { q: "Para qual idade é o Ballet Kids?", a: "Para crianças de 3 a 10 anos. As aulas são simples para os menores e desafiadoras para os maiores." },
  { q: "Meu filho nunca fez ballet. Ele consegue?", a: "Sim! As aulas começam do zero, com brincadeiras e passos bem explicados." },
  { q: "Precisa de sapatilha ou collant?", a: "Não. Roupa confortável e meia (ou pé descalço) já bastam. O cantinho da dança pode ser na sala." },
  { q: "Preciso ficar junto da criança?", a: "Para os menores, recomendamos que um adulto acompanhe. E muitas famílias acabam dançando junto!" },
  { q: "Quanto tempo de tela por dia?", a: "Uma aula de 10 a 15 minutos já faz diferença. É tela com movimento, no lugar de tela parada." },
  { q: "Meninos também podem fazer?", a: "Claro! O ballet é para todas as crianças que gostam de se movimentar." },
  { q: "Por quanto tempo terei acesso?", a: "1 ano a partir da compra." }, // CONFIRMAR
  { q: "E se não gostar?", a: "Você tem 7 dias de garantia: é só pedir e devolvemos 100% do valor." },
];

export const kidsFinalCta = {
  cta: "Quero o Ballet Kids por R$97",
  note: "Preço de lançamento, só na Black Friday!",
};
