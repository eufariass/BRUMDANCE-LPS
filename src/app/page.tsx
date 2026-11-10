import Image from "next/image";
import type { ReactNode } from "react";
import {
  Activity,
  Award,
  CalendarDays,
  ChevronDown,
  Church,
  CircleCheck,
  CircleX,
  DoorOpen,
  Eye,
  Gift,
  Layers,
  ListChecks,
  Lock,
  MessagesSquare,
  MonitorSmartphone,
  Music,
  Palette,
  PersonStanding,
  Ribbon,
  ShieldCheck,
  Sparkles,
  Target,
  Video,
  Zap,
} from "lucide-react";
import { CheckoutLink } from "@/components/checkout-link";
import { YouTubeLite } from "@/components/youtube-lite";
import { Countdown } from "@/components/countdown";
import { Marquee } from "@/components/marquee";
import {
  PROMO,
  YOUTUBE_ID,
  bonuses,
  faq,
  features,
  finalCta,
  forWhom,
  guarantee,
  hero,
  ministry,
  offer,
  schools,
  testimonials,
  topBar,
  video,
} from "@/content";

/* ---------- Peças reutilizáveis da identidade Black Friday ---------- */

const btn =
  "btn-shine cta-pulse inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orchid via-orchid-light to-pink px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac active:translate-y-0";

const card = "rounded-3xl bg-white/[0.04] ring-1 ring-white/10 transition hover:ring-pink/40";

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** Selo "BLACK FRIDAY" usado no topo de cada seção. */
function BfTag({ children = PROMO.label }: { children?: ReactNode }) {
  return (
    <p className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-black px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-white shadow-[0_0_24px_-4px] shadow-pink/60 ring-1 ring-pink/60">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink" aria-hidden />
      {children}
    </p>
  );
}

/** Brilhos desfocados de fundo. */
function Glows({ variant = "a" }: { variant?: "a" | "b" }) {
  return variant === "a" ? (
    <>
      <div className="bf-glow pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-pink/20 blur-[120px]" aria-hidden />
      <div className="bf-glow pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orchid-light/20 blur-[120px] [animation-delay:-3s]" aria-hidden />
    </>
  ) : (
    <>
      <div className="bf-glow pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-orchid/25 blur-[130px]" aria-hidden />
      <div className="bf-glow pointer-events-none absolute -bottom-20 left-1/4 h-72 w-72 rounded-full bg-pink/15 blur-[110px] [animation-delay:-4s]" aria-hidden />
    </>
  );
}

/** Duas faixas cruzadas correndo. */
function CrossBands() {
  return (
    <div className="relative z-10 h-24 overflow-hidden sm:h-28" aria-hidden>
      <Marquee
        items={PROMO.ticker}
        reverse
        className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 -rotate-2 bg-gradient-to-r from-pink to-orchid-light text-black"
      />
      <Marquee
        items={PROMO.ticker}
        className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-2 bg-black text-white shadow-2xl ring-1 ring-pink/40"
      />
    </div>
  );
}

function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`reveal text-center text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl ${className}`}>
      {children}
    </h2>
  );
}

const featureIcons = [Layers, ListChecks, Award, MonitorSmartphone, Sparkles];
const ministryIcons = [PersonStanding, DoorOpen, Eye, Activity, Church, Ribbon, Palette];
const bonusIcons = [CalendarDays, Video, Music, MessagesSquare];

export default function Home() {
  return (
    <>
      {/* Barra superior */}
      <div className="sticky top-0 z-50 flex items-center justify-center gap-2 border-b border-pink/20 bg-black px-4 py-2.5 text-center text-xs text-white/85 sm:text-sm">
        <span className="rounded bg-pink px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-white sm:text-xs">
          {PROMO.label}
        </span>
        <strong className="font-semibold text-white">{topBar.b}</strong>
        <span className="hidden text-lilac sm:inline">• {topBar.c}</span>
      </div>

      <main className="bg-black text-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#3e1a7a] bg-[url(/images/hero-bg-mobile.webp)] bg-[length:100%_auto] bg-top bg-no-repeat md:bg-[#3b1d7c] md:bg-[url(/images/hero-bg.webp)] md:bg-cover md:bg-center">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent md:bg-gradient-to-r md:from-black/85 md:via-black/45" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" aria-hidden />
          <div className="bf-dots pointer-events-none absolute inset-0" aria-hidden />
          <div className="bf-glow pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-pink/30 blur-[110px]" aria-hidden />
          <div className="bf-glow pointer-events-none absolute -bottom-24 right-0 h-[28rem] w-[28rem] rounded-full bg-orchid-light/30 blur-[120px] [animation-delay:-3s]" aria-hidden />

          <Container className="pb-10 pt-[52vw] md:pb-16 md:pt-16">
            <div className="max-w-xl text-center md:text-left">
              <Image
                src="/images/logo.webp"
                alt="BD Comunidade — Brumdance"
                width={873}
                height={760}
                priority
                className="mx-auto mb-6 h-auto w-24 md:mx-0 md:w-28"
              />
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[0_0_30px_-4px] shadow-pink/60 ring-1 ring-pink/60">
                <span className="h-2 w-2 animate-pulse rounded-full bg-pink" aria-hidden />
                {PROMO.label} • {PROMO.discount}
              </p>
              <h1 className="text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                {hero.title}
                <br />
                <span className="text-gradient">{hero.highlight}</span>
              </h1>
              <p className="mt-4 text-lg text-white/80 sm:text-xl">{hero.text}</p>
              <div className="mt-6">
                <p className="inline-flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 rounded-2xl bg-black/70 px-6 py-3 ring-1 ring-pink/50 backdrop-blur">
                  <span className="text-sm text-white/60">
                    De <s className="text-[#ff4e4e]">{PROMO.from}</s> por
                  </span>
                  <span className="text-gradient text-4xl font-black">{PROMO.to}</span>
                  <span className="text-sm text-white/60">à vista</span>
                </p>
              </div>
              <div className="mt-7">
                <a href="#oferta" className={`${btn} px-10 py-5 text-base`}>
                  <Zap className="h-5 w-5" aria-hidden />
                  {hero.cta}
                </a>
              </div>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-white/70 md:justify-start">
                <Lock className="h-3.5 w-3.5" aria-hidden />
                {hero.under}
              </p>
              <Countdown endsAt={PROMO.endsAt} />
            </div>
          </Container>

          <CrossBands />

          <Container className="pb-12 pt-4">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {features.map((f, i) => {
                const Icon = featureIcons[i];
                return (
                  <li key={f} className={`reveal flex items-center gap-3 p-4 text-sm font-medium text-white/90 ${card} rounded-2xl`}>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-orchid to-pink">
                      <Icon className="h-5 w-5 text-white" aria-hidden />
                    </span>
                    {f}
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>

        {/* VÍDEO */}
        <section className="relative overflow-hidden bg-[url(/images/section2-bg-mobile.webp)] bg-cover bg-top py-16 md:bg-[url(/images/section2-bg.webp)] md:bg-center md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/75 to-black" aria-hidden />
          <Glows variant="b" />
          <Container className="max-w-4xl text-center">
            <BfTag>Assista antes de garantir</BfTag>
            <h2 className="reveal text-3xl font-semibold leading-tight tracking-tight sm:text-[2.6rem]">
              {video.title} <span className="text-gradient">{video.highlight}</span>
            </h2>
            <p className="reveal mx-auto mt-5 max-w-3xl text-base text-white/75 sm:text-lg">{video.text}</p>
            <div className="reveal relative mt-10">
              <div className="pointer-events-none absolute -inset-1 rounded-[1.1rem] bg-gradient-to-r from-pink via-orchid-light to-orchid opacity-60 blur-md" aria-hidden />
              <div className="relative">
                <YouTubeLite id={YOUTUBE_ID} title="Prof.ª Ana Brum — Metodologia Brumdance" />
              </div>
            </div>
            <a href="#oferta" className={`${btn} mt-10`}>
              <Zap className="h-5 w-5" aria-hidden />
              {video.cta}
            </a>
          </Container>
        </section>

        {/* PARA QUEM É */}
        <section className="relative overflow-hidden bg-[#07040c] py-16 md:py-24">
          <div className="bf-dots pointer-events-none absolute inset-0 opacity-60" aria-hidden />
          <Glows />
          <Container>
            <p className="text-center text-xs font-bold uppercase tracking-[0.4em] text-pink">{forWhom.eyebrow}</p>
            <SectionTitle className="mt-4">
              {forWhom.title}
              <br />
              <span className="text-gradient">{forWhom.highlight}</span>
            </SectionTitle>
            <div className="mt-12 grid gap-5 md:grid-cols-[1.7fr_1fr]">
              <div className="reveal rounded-3xl bg-gradient-to-br from-[#123222] to-[#08140e] p-7 shadow-xl ring-1 ring-[#5be38f]/25 md:p-9">
                <h3 className="text-2xl font-semibold">Para quem é:</h3>
                <ul className="mt-6 space-y-4">
                  {forWhom.yes.map((t) => (
                    <li key={t} className="flex gap-3 text-white/85">
                      <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#5be38f]" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reveal rounded-3xl bg-gradient-to-br from-[#3a0912] to-[#14040a] p-7 shadow-xl ring-1 ring-[#ff4e4e]/25 md:p-9">
                <h3 className="text-2xl font-semibold">Para quem não é:</h3>
                <ul className="mt-6 space-y-4">
                  {forWhom.no.map((t) => (
                    <li key={t} className="flex gap-3 text-white/85">
                      <CircleX className="mt-0.5 h-5 w-5 shrink-0 text-[#ff4e4e]" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* 3 ESCOLAS */}
        <section className="relative overflow-hidden bg-black py-16 md:py-24">
          <Glows variant="b" />
          <Container>
            <BfTag>3 escolas por {PROMO.to}</BfTag>
            <SectionTitle>
              Por dentro das <span className="text-gradient">3 Escolas</span>
            </SectionTitle>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {schools.map((s) => (
                <article key={s.name} className={`reveal flex flex-col overflow-hidden ${card}`}>
                  <div className="relative">
                    <Image src={s.image} alt={`Escola de ${s.name} com Brumdance`} width={600} height={338} className="h-auto w-full" />
                    <span className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-pink ring-1 ring-pink/50">
                      Incluída
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold">
                      <span className="text-gradient">{s.name}</span> com Brumdance
                    </h3>
                    <p className="mt-3 text-sm font-medium text-white/60">Você vai aprender:</p>
                    <ul className="mt-3 space-y-2.5 text-sm text-white/80">
                      {s.items.map((it) => (
                        <li key={it} className="flex gap-2">
                          <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-orchid-light" aria-hidden />
                          {it}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-auto pt-5 text-sm text-white/60">
                      <strong className="text-white">Formato:</strong> {s.format}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* MINISTRAÇÃO */}
        <section className="relative overflow-hidden bg-[#07040c] py-16 md:py-24">
          <div className="bf-dots pointer-events-none absolute inset-0 opacity-60" aria-hidden />
          <Glows />
          <Container>
            <SectionTitle>
              {ministry.title} <span className="text-gradient">{ministry.highlight}</span>
            </SectionTitle>
            <ul className="mt-12 flex flex-wrap justify-center gap-4">
              {ministry.items.map((it, i) => {
                const Icon = ministryIcons[i];
                return (
                  <li
                    key={it}
                    className={`reveal flex w-full items-center gap-4 rounded-2xl p-5 text-sm text-white/85 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)] ${card}`}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-orchid to-pink text-white shadow-lg shadow-pink/20">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    {it}
                  </li>
                );
              })}
            </ul>
            <p className="reveal mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl bg-gradient-to-r from-orchid/25 to-pink/20 p-6 ring-1 ring-pink/30 sm:items-center">
              <Target className="h-6 w-6 shrink-0 text-pink" aria-hidden />
              <span>
                <strong>Resultado esperado:</strong> {ministry.result}
              </span>
            </p>
          </Container>
        </section>

        <CrossBands />

        {/* BÔNUS */}
        <section className="relative overflow-hidden bg-black py-16 md:py-24">
          <Glows variant="b" />
          <Container>
            <BfTag>
              <Gift className="h-3.5 w-3.5" aria-hidden /> Só na {PROMO.label}
            </BfTag>
            <SectionTitle>
              {bonuses.title} <span className="text-gradient">{bonuses.highlight}</span>
            </SectionTitle>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {bonuses.items.map((b, i) => {
                const Icon = bonusIcons[i];
                return (
                  <article key={b.tag} className={`reveal relative p-6 ${card}`}>
                    <span className="inline-block rounded-full bg-gradient-to-r from-orchid to-pink px-3 py-1 text-xs font-black uppercase tracking-wide">
                      {b.tag}
                    </span>
                    <Icon className="absolute right-6 top-6 h-7 w-7 text-pink/80" aria-hidden />
                    <h3 className="mt-5 text-lg font-semibold leading-snug">{b.title}</h3>
                    <p className="mt-2 text-sm text-white/65">{b.text}</p>
                  </article>
                );
              })}
            </div>
            <p className="mt-10 text-center text-lg text-white/80">
              {bonuses.note} <strong className="text-pink">{bonuses.noteHighlight}</strong>
            </p>
          </Container>
        </section>

        {/* DEPOIMENTOS */}
        <section className="relative overflow-hidden bg-[#07040c] py-16 md:py-24">
          <Glows />
          <Container>
            <SectionTitle>
              {testimonials.title} <span className="text-gradient">{testimonials.highlight}</span>
            </SectionTitle>
          </Container>
          <div className="relative z-10 mx-auto mt-12 max-w-6xl">
            <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 md:grid md:grid-cols-4 md:overflow-visible">
              {testimonials.images.map((src, i) => (
                <li key={src} className="w-[78%] shrink-0 snap-center sm:w-[45%] md:w-auto">
                  <Image
                    src={src}
                    alt={`Depoimento de aluna ${i + 1}`}
                    width={650}
                    height={813}
                    sizes="(min-width: 768px) 25vw, 80vw"
                    className="h-auto w-full rounded-2xl shadow-2xl shadow-pink/10 ring-1 ring-white/10"
                  />
                </li>
              ))}
            </ul>
          </div>
          <p className="relative z-10 mt-10 text-center">
            <span className="text-gradient block text-6xl font-black">{testimonials.counter}</span>
            <span className="mt-1 block text-white/65">{testimonials.counterLabel}</span>
          </p>
        </section>

        {/* OFERTA */}
        <section id="oferta" className="relative overflow-hidden bg-black py-16 md:py-24">
          <div className="bf-dots pointer-events-none absolute inset-0 opacity-60" aria-hidden />
          <Glows variant="b" />
          <Container className="max-w-3xl">
            <BfTag>Oferta {PROMO.label} • {PROMO.discount}</BfTag>
            <SectionTitle>
              {offer.title} <span className="text-gradient">{offer.highlight}</span>
            </SectionTitle>
            <div className={`reveal mt-10 p-6 sm:p-8 ${card}`}>
              <ul className="divide-y divide-white/10">
                {offer.items.map((it) => (
                  <li key={it.label} className="flex items-start justify-between gap-4 py-3 text-sm sm:text-base">
                    <span className="flex gap-2.5">
                      <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-orchid-light" aria-hidden />
                      {it.label}
                    </span>
                    <span className="shrink-0 font-semibold text-white/55">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-10 rounded-3xl bg-gradient-to-b from-[#1a0b2b] to-black p-8 text-center ring-1 ring-pink/40 shadow-[0_0_60px_-10px] shadow-pink/40">
              <p className="text-lg text-white/70">
                Valor somado: <s className="text-[#ff4e4e]">{offer.total}</s>
              </p>
              <p className="mt-2 text-lg text-white/70">
                De <s className="text-[#ff4e4e]">{offer.from}</s> por apenas:
              </p>
              <p className="text-gradient mt-2 text-7xl font-black tracking-tight sm:text-8xl">{offer.cash}</p>
              <p className="mt-1 text-lg text-white/70">à vista • {offer.installment}</p>
              <CheckoutLink className={`${btn} mt-8 px-12 py-5 text-base`}>
                <Zap className="h-5 w-5" aria-hidden />
                {offer.cta}
              </CheckoutLink>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-white/60">
                <ShieldCheck className="h-4 w-4" aria-hidden />
                {offer.under}
              </p>
              <Countdown endsAt={PROMO.endsAt} center />
            </div>

            <p className="mt-10 rounded-2xl bg-white/[0.04] p-6 text-center ring-1 ring-white/10">
              {offer.question}
              <br />
              <strong className="text-pink">{offer.question2}</strong>
            </p>
          </Container>
        </section>

        {/* GARANTIA */}
        <section className="relative overflow-hidden bg-[#07040c] py-16 md:py-20">
          <Glows />
          <Container className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <div className="relative mx-auto">
              <div className="bf-glow pointer-events-none absolute inset-6 rounded-full bg-pink/40 blur-3xl" aria-hidden />
              <Image
                src="/images/selo-garantia.webp"
                alt="Selo de garantia de 7 dias"
                width={700}
                height={700}
                className="reveal relative h-auto w-56 md:w-72"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                {guarantee.title}
                <br />
                <span className="text-gradient">{guarantee.highlight}</span>
              </h2>
              <p className="mt-5 text-lg text-white/80">
                {guarantee.text} <strong className="text-white">{guarantee.textStrong}</strong> {guarantee.textEnd}
              </p>
              <p className="mt-4 text-lilac">{guarantee.note}</p>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="relative overflow-hidden bg-black py-16 md:py-24">
          <Glows variant="b" />
          <Container className="max-w-3xl">
            <SectionTitle>
              Perguntas <span className="text-gradient">Frequentes</span>
            </SectionTitle>
            <div className="mt-10 space-y-3">
              {faq.map((f, i) => (
                <details key={f.q} open={i === 0} className={`group rounded-2xl ${card} open:ring-pink/40`}>
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-medium">
                    {f.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-pink transition group-open:rotate-180" aria-hidden />
                  </summary>
                  <p className="px-5 pb-5 text-white/65">{f.a}</p>
                </details>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-center gap-4 text-center">
              <CheckoutLink className={`${btn} px-12 py-5 text-base`}>
                <Zap className="h-5 w-5" aria-hidden />
                {finalCta.cta}
              </CheckoutLink>
              <span className="font-semibold text-pink">{finalCta.note}</span>
            </div>
          </Container>
        </section>

        <CrossBands />
      </main>

      <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-white/50">
        2026 Brumdance © Todos os direitos reservados.
      </footer>
    </>
  );
}
