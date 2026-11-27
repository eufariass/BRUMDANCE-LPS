import Image from "next/image";
import type { ComponentType, CSSProperties, ReactNode, SVGProps } from "react";
import {
  Award,
  BookHeart,
  Brain,
  CalendarHeart,
  ChevronDown,
  CircleCheck,
  CircleX,
  Crown,
  Footprints,
  Heart,
  HeartPulse,
  House,
  Lock,
  Music,
  Play,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Timer,
  Tv,
  Users,
  Zap,
} from "lucide-react";
import { CheckoutLink } from "@/components/checkout-link";
import { Countdown } from "@/components/countdown";
import { Marquee } from "@/components/marquee";
import {
  KIDS_CHECKOUT_URL,
  KIDS_PROMO,
  howItWorks,
  kidsBenefits,
  kidsBonuses,
  kidsFaq,
  kidsFeatures,
  kidsFinalCta,
  kidsGuarantee,
  kidsHero,
  kidsOffer,
  kidsTeacher,
  kidsTopBar,
  screenTime,
} from "@/content-kids";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/* ---------- Peças da identidade Ballet Kids (infantil + Black Friday) ---------- */

const btn =
  "btn-shine cta-pulse kids-wiggle inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-candy via-orchid-light to-orchid px-8 py-4 font-kids text-lg font-extrabold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun";

const tones = {
  candy: { text: "text-candy", bg: "bg-candy", ring: "ring-candy/40", soft: "bg-candy/10" },
  mint: { text: "text-mint", bg: "bg-mint", ring: "ring-mint/40", soft: "bg-mint/10" },
  sun: { text: "text-sun", bg: "bg-sun", ring: "ring-sun/40", soft: "bg-sun/10" },
  sky: { text: "text-sky", bg: "bg-sky", ring: "ring-sky/40", soft: "bg-sky/10" },
} as const;
type Tone = keyof typeof tones;
const toneCycle: Tone[] = ["candy", "sun", "mint", "sky"];

function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

function Title({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`reveal text-balance text-center font-kids text-4xl font-extrabold leading-[1.05] sm:text-5xl ${className}`}>
      {children}
    </h2>
  );
}

/** Selo arredondado com borda arco-íris. */
function Tag({ children }: { children: ReactNode }) {
  return (
    <p className="mx-auto mb-5 w-fit rounded-full bg-gradient-to-r from-sun via-candy to-sky p-[2px]">
      <span className="flex items-center gap-2 rounded-full bg-black px-4 py-1.5 font-kids text-sm font-bold text-white">
        <Sparkles className="h-4 w-4 text-sun" aria-hidden />
        {children}
      </span>
    </p>
  );
}

/** Céu de estrelas + bolhas de cor desfocadas. */
function Sky({ glow = true }: { glow?: boolean }) {
  return (
    <>
      <div className="kids-stars kids-twinkle pointer-events-none absolute inset-0" aria-hidden />
      {glow && (
        <>
          <div className="bf-glow pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-candy/20 blur-[110px]" aria-hidden />
          <div className="bf-glow pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-sky/15 blur-[110px] [animation-delay:-3s]" aria-hidden />
        </>
      )}
    </>
  );
}

/** Adesivo flutuante decorativo. */
function Sticker({ icon: I, className, tone, rotate = 0, delay = 0 }: { icon: Icon; className: string; tone: Tone; rotate?: number; delay?: number }) {
  return (
    <span
      className={`kids-float pointer-events-none absolute z-10 grid place-items-center rounded-2xl bg-black/60 p-2.5 ring-2 ${tones[tone].ring} ${className}`}
      style={{ "--r": `${rotate}deg`, animationDelay: `${delay}s` } as CSSProperties}
      aria-hidden
    >
      <I className={`h-6 w-6 ${tones[tone].text} fill-current`} />
    </span>
  );
}

/** Borda em "babadinho" (scallop) entre seções. */
function Scallop({ color, flip = false }: { color: string; flip?: boolean }) {
  return (
    <div
      className={`relative z-10 h-4 w-full ${flip ? "rotate-180" : ""}`}
      style={{
        background: `radial-gradient(circle at 14px 0, transparent 13px, ${color} 14px) repeat-x`,
        backgroundSize: "28px 16px",
      }}
      aria-hidden
    />
  );
}

function KidsBands() {
  return (
    <div className="relative z-10 h-24 overflow-hidden sm:h-28" aria-hidden>
      <Marquee
        items={KIDS_PROMO.ticker}
        reverse
        className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 -rotate-2 bg-sun text-black"
      />
      <Marquee
        items={KIDS_PROMO.ticker}
        className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 rotate-2 bg-gradient-to-r from-candy to-orchid-light text-black shadow-2xl"
      />
    </div>
  );
}

const featureIcons: Icon[] = [Timer, House, HeartPulse, Crown, Tv];
const benefitIcons: Icon[] = [HeartPulse, Brain, Music, Crown];
const stepIcons: Icon[] = [Play, Timer, Music, Footprints, Users, House, Tv];
const bonusIcons: Icon[] = [Award, Music, CalendarHeart, BookHeart];

const NAVY = "#0b0614";

export default function BalletKids() {
  return (
    <>
      {/* Barra superior */}
      <div className="sticky top-0 z-50 flex items-center justify-center gap-2 border-b border-candy/20 bg-black px-4 py-2.5 text-center text-xs text-white/85 sm:text-sm">
        <span className="rounded-full bg-gradient-to-r from-candy to-orchid-light px-2.5 py-0.5 font-kids text-[11px] font-extrabold uppercase tracking-wider text-white sm:text-xs">
          {KIDS_PROMO.label}
        </span>
        <strong className="font-semibold text-white">{kidsTopBar.text}</strong>
        <span className="hidden text-sun sm:inline">• {kidsTopBar.extra}</span>
      </div>

      <main className="bg-black text-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#3e1a7a] bg-[url(/images/hero-bg-mobile.webp)] bg-[length:100%_auto] bg-top bg-no-repeat lg:bg-[#3b1d7c] lg:bg-[url(/images/hero-bg.webp)] lg:bg-cover lg:bg-center">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent lg:bg-gradient-to-r lg:from-black/90 lg:via-black/50" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" aria-hidden />
          <Sky />

          <Sticker icon={Star} tone="sun" rotate={-12} className="right-[8%] top-[8%] lg:right-[44%] lg:top-[12%]" />
          <Sticker icon={Heart} tone="candy" rotate={10} delay={1.2} className="left-[6%] top-[22%] lg:left-auto lg:right-[8%] lg:top-[18%]" />
          <Sticker icon={Music} tone="sky" rotate={-6} delay={2.1} className="right-[10%] top-[38%] hidden lg:grid lg:right-[40%] lg:top-[62%]" />
          <Sticker icon={Crown} tone="mint" rotate={8} delay={0.6} className="hidden lg:grid lg:bottom-[30%] lg:right-[6%]" />

          <Container className="pb-10 pt-[52vw] sm:pt-[44vw] lg:pb-14 lg:pt-14">
            <div className="max-w-xl text-center lg:text-left">
              <Image
                src="/images/logo.webp"
                alt="BD Comunidade — Brumdance"
                width={873}
                height={760}
                priority
                className="mx-auto mb-5 h-auto w-20 lg:mx-0 lg:w-24"
              />
              <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <span className="rounded-full bg-gradient-to-r from-sun via-candy to-orchid-light px-4 py-1.5 font-kids text-sm font-extrabold uppercase tracking-wide text-black">
                  {KIDS_PROMO.launch} • {KIDS_PROMO.label}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-sm font-semibold text-mint ring-1 ring-mint/40">
                  <Smile className="h-4 w-4" aria-hidden />
                  {kidsHero.age}
                </span>
              </div>
              <h1 className="mt-5 text-balance font-kids text-[2.6rem] font-extrabold leading-[1] sm:text-6xl lg:text-7xl">
                {kidsHero.title}
                <br />
                <span className="text-candy-gradient">{kidsHero.highlight}</span>
              </h1>
              <p className="mt-4 text-lg text-white/85 sm:text-xl">{kidsHero.text}</p>
              <div className="mt-6">
                <p className="inline-flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1 rounded-3xl bg-black/70 px-6 py-3 ring-2 ring-candy/50">
                  <span className="text-sm text-white/60">
                    De <s className="text-[#ff6b6b]">{KIDS_PROMO.from}</s> por
                  </span>
                  <span className="text-candy-gradient font-kids text-5xl font-extrabold leading-none">{KIDS_PROMO.to}</span>
                  <span className="rounded-full bg-sun px-2 py-0.5 font-kids text-xs font-extrabold text-black">{KIDS_PROMO.discount}</span>
                </p>
              </div>
              <div className="mt-7">
                <a href="#oferta" className={`${btn} px-10 py-5 text-xl`}>
                  <Star className="h-5 w-5 fill-current" aria-hidden />
                  {kidsHero.cta}
                </a>
              </div>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-white/70 lg:justify-start">
                <Lock className="h-3.5 w-3.5" aria-hidden />
                {kidsHero.under}
              </p>
              <Countdown
                endsAt={KIDS_PROMO.endsAt}
                startAt="lg"
                label="O preço de lançamento termina em"
                boxClassName="rounded-2xl bg-black/70 ring-2 ring-candy/50 font-kids"
              />
            </div>
          </Container>

          <KidsBands />

          <Container className="pb-12 pt-4">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {kidsFeatures.map((f, i) => {
                const I = featureIcons[i];
                const t = tones[toneCycle[i % 4]];
                return (
                  <li key={f} className={`reveal flex items-center gap-3 rounded-3xl bg-white/[0.05] p-4 font-semibold text-white/90 ring-2 ${t.ring}`}>
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${t.bg} text-black`}>
                      <I className="h-5 w-5" aria-hidden />
                    </span>
                    {f}
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>

        {/* PROFESSORA */}
        <Scallop color={NAVY} flip />
        <section className="relative overflow-hidden py-16 md:py-24" style={{ background: NAVY }}>
          <Sky />
          <Container className="grid items-center gap-12 md:grid-cols-2">
            <div className="reveal relative mx-auto w-full max-w-sm">
              <div className="rotate-[-3deg] rounded-[2rem] bg-white p-3 pb-14 shadow-2xl shadow-candy/20">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/images/ana-retrato.webp"
                    alt="Prof.ª Ana Brum dançando ballet no palco"
                    fill
                    sizes="(min-width: 768px) 384px, 90vw"
                    className="object-cover"
                  />
                </div>
                <p className="absolute bottom-4 left-0 right-0 text-center font-kids text-2xl font-extrabold text-black">
                  Prof.ª Ana Brum <span className="text-candy">♥</span>
                </p>
              </div>
              <span className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 rotate-2 rounded-sm bg-sun/80" aria-hidden />
              <Sticker icon={Star} tone="sun" rotate={12} className="-right-3 top-10" />
              <Sticker icon={Heart} tone="candy" rotate={-10} delay={1.5} className="-left-4 bottom-20" />
            </div>

            <div className="text-center md:text-left">
              <p className="font-kids text-sm font-bold uppercase tracking-[0.3em] text-sun">{kidsTeacher.eyebrow}</p>
              <h2 className="mt-3 font-kids text-4xl font-extrabold leading-[1.05] sm:text-5xl">
                {kidsTeacher.title} <span className="text-candy-gradient">{kidsTeacher.highlight}</span>
              </h2>
              {kidsTeacher.paragraphs.map((p) => (
                <p key={p} className="mt-4 text-lg text-white/80">
                  {p}
                </p>
              ))}
              <div className="mt-7 flex justify-center gap-4 md:justify-start">
                {kidsTeacher.stats.map((s, i) => (
                  <div key={s.label} className={`rounded-3xl px-5 py-3 ring-2 ${tones[toneCycle[i + 1]].ring} ${tones[toneCycle[i + 1]].soft}`}>
                    <span className={`block font-kids text-3xl font-extrabold ${tones[toneCycle[i + 1]].text}`}>{s.value}</span>
                    <span className="text-sm text-white/70">{s.label}</span>
                  </div>
                ))}
              </div>
              <a href="#oferta" className={`${btn} mt-8`}>
                <Heart className="h-5 w-5 fill-current" aria-hidden />
                {kidsTeacher.cta}
              </a>
            </div>
          </Container>
        </section>
        <Scallop color={NAVY} />

        {/* TELA DO BEM (comparação) */}
        <section className="relative overflow-hidden bg-black py-16 md:py-24">
          <Sky />
          <Container>
            <Tag>{screenTime.eyebrow}</Tag>
            <Title>
              {screenTime.title}
              <br />
              <span className="text-candy-gradient">{screenTime.highlight}</span>
            </Title>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="reveal rounded-[2rem] bg-white/[0.03] p-7 ring-2 ring-white/10 md:p-9">
                <h3 className="flex items-center gap-3 font-kids text-2xl font-extrabold text-white/70">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
                    <Tv className="h-6 w-6 text-white/60" aria-hidden />
                  </span>
                  {screenTime.bad.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {screenTime.bad.items.map((t) => (
                    <li key={t} className="flex gap-3 text-white/60">
                      <CircleX className="mt-0.5 h-5 w-5 shrink-0 text-[#ff6b6b]" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reveal relative rounded-[2rem] bg-gradient-to-br from-mint/15 to-sky/10 p-7 shadow-[0_0_50px_-12px] shadow-mint/40 ring-2 ring-mint/50 md:p-9">
                <span className="absolute -top-3 right-6 rounded-full bg-mint px-3 py-1 font-kids text-xs font-extrabold uppercase text-black">
                  Ballet Kids
                </span>
                <h3 className="flex items-center gap-3 font-kids text-2xl font-extrabold">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint text-black">
                    <Sparkles className="h-6 w-6" aria-hidden />
                  </span>
                  {screenTime.good.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {screenTime.good.items.map((t) => (
                    <li key={t} className="flex gap-3 text-white/90">
                      <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-mint" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* BENEFÍCIOS */}
        <section className="relative overflow-hidden py-16 md:py-24" style={{ background: NAVY }}>
          <Sky />
          <Container>
            <Title>
              {kidsBenefits.title} <span className="text-candy-gradient">{kidsBenefits.highlight}</span>
            </Title>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {kidsBenefits.items.map((b, i) => {
                const t = tones[b.color];
                const I = benefitIcons[i];
                return (
                  <article key={b.name} className={`reveal kids-wiggle flex flex-col rounded-[2rem] bg-white/[0.04] p-6 ring-2 ${t.ring}`}>
                    <span className={`grid h-14 w-14 place-items-center rounded-2xl ${t.bg} text-black`}>
                      <I className="h-7 w-7" aria-hidden />
                    </span>
                    <h3 className={`mt-5 font-kids text-2xl font-extrabold leading-tight ${t.text}`}>{b.name}</h3>
                    <ul className="mt-4 space-y-2.5 text-white/80">
                      {b.items.map((it) => (
                        <li key={it} className="flex gap-2">
                          <Star className={`mt-1 h-4 w-4 shrink-0 fill-current ${t.text}`} aria-hidden />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* COMO FUNCIONA */}
        <section className="relative overflow-hidden bg-black py-16 md:py-24">
          <Sky />
          <Container>
            <Title>
              {howItWorks.title} <span className="text-candy-gradient">{howItWorks.highlight}</span>
            </Title>
            <ol className="mt-12 flex flex-wrap justify-center gap-4">
              {howItWorks.steps.map((s, i) => {
                const I = stepIcons[i];
                const t = tones[toneCycle[i % 4]];
                return (
                  <li
                    key={s}
                    className={`reveal relative flex w-full items-center gap-4 rounded-3xl bg-white/[0.04] p-5 ring-2 ${t.ring} sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]`}
                  >
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${t.bg} font-kids text-xl font-extrabold text-black`}>
                      {i + 1}
                    </span>
                    <span className="flex-1 font-semibold text-white/90">{s}</span>
                    <I className={`h-5 w-5 shrink-0 ${t.text}`} aria-hidden />
                  </li>
                );
              })}
            </ol>
            <p className="reveal mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-3xl bg-gradient-to-r from-candy/20 to-sun/15 p-6 text-lg ring-2 ring-candy/40 sm:items-center">
              <Heart className="h-7 w-7 shrink-0 fill-current text-candy" aria-hidden />
              <span>
                <strong className="font-kids">Resultado:</strong> {howItWorks.result}
              </span>
            </p>
          </Container>
        </section>

        <KidsBands />

        {/* BÔNUS */}
        <section className="relative overflow-hidden py-16 md:py-24" style={{ background: NAVY }}>
          <Sky />
          <Container>
            <Tag>Só no lançamento</Tag>
            <Title>
              {kidsBonuses.title} <span className="text-candy-gradient">{kidsBonuses.highlight}</span>
            </Title>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {kidsBonuses.items.map((b, i) => {
                const I = bonusIcons[i];
                const t = tones[toneCycle[i % 4]];
                return (
                  <article key={b.tag} className={`reveal kids-wiggle relative rounded-[2rem] bg-white/[0.04] p-6 ring-2 ${t.ring}`}>
                    <span className={`inline-block rounded-full ${t.bg} px-3 py-1 font-kids text-sm font-extrabold text-black`}>{b.tag}</span>
                    <I className={`absolute right-6 top-6 h-8 w-8 ${t.text}`} aria-hidden />
                    <h3 className="mt-5 font-kids text-xl font-extrabold leading-snug">{b.title}</h3>
                    <p className="mt-2 text-white/70">{b.text}</p>
                  </article>
                );
              })}
            </div>
            <p className="mt-10 text-center text-lg text-white/80">
              {kidsBonuses.note} <strong className="font-kids text-sun">{kidsBonuses.noteHighlight}</strong>
            </p>
          </Container>
        </section>

        {/* OFERTA */}
        <section id="oferta" className="relative overflow-hidden bg-black py-16 md:py-24">
          <Sky />
          <Container className="max-w-3xl">
            <Tag>
              {KIDS_PROMO.launch} {KIDS_PROMO.label} • {KIDS_PROMO.discount}
            </Tag>
            <Title>
              {kidsOffer.title} <span className="text-candy-gradient">{kidsOffer.highlight}</span>
            </Title>
            <div className="reveal mt-10 rounded-[2rem] bg-white/[0.04] p-6 ring-2 ring-white/10 sm:p-8">
              <ul className="divide-y divide-white/10">
                {kidsOffer.items.map((it, i) => (
                  <li key={it.label} className="flex items-start justify-between gap-4 py-3">
                    <span className="flex gap-2.5">
                      <Star className={`mt-1 h-4 w-4 shrink-0 fill-current ${tones[toneCycle[i % 4]].text}`} aria-hidden />
                      {it.label}
                    </span>
                    <span className="shrink-0 font-semibold text-white/55">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-10 rounded-[2.5rem] bg-gradient-to-b from-[#24103a] to-black p-8 text-center shadow-[0_0_70px_-12px] shadow-candy/50 ring-2 ring-candy/50">
              <Sticker icon={Star} tone="sun" rotate={-12} className="-left-3 -top-4" />
              <Sticker icon={Heart} tone="candy" rotate={10} delay={1} className="-right-3 -top-4" />
              <p className="text-lg text-white/70">
                Valor somado: <s className="text-[#ff6b6b]">{kidsOffer.total}</s>
              </p>
              <p className="mt-1 text-lg text-white/70">
                De <s className="text-[#ff6b6b]">{kidsOffer.from}</s> por apenas:
              </p>
              <p className="text-candy-gradient mt-2 font-kids text-8xl font-extrabold leading-none sm:text-9xl">{kidsOffer.cash}</p>
              <p className="mt-2 text-lg text-white/70">à vista • {kidsOffer.installment}</p>
              <CheckoutLink href={KIDS_CHECKOUT_URL} className={`${btn} mt-8 px-10 py-5 text-xl`}>
                <Zap className="h-5 w-5" aria-hidden />
                {kidsOffer.cta}
              </CheckoutLink>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-white/60">
                <ShieldCheck className="h-4 w-4" aria-hidden />
                {kidsOffer.under}
              </p>
              <Countdown
                endsAt={KIDS_PROMO.endsAt}
                center
                label="O preço de lançamento termina em"
                boxClassName="rounded-2xl bg-black/70 ring-2 ring-candy/50 font-kids"
              />
            </div>

            <p className="mt-10 rounded-3xl bg-white/[0.04] p-6 text-center text-lg ring-2 ring-white/10">
              {kidsOffer.question}
              <br />
              <strong className="font-kids text-xl text-sun">{kidsOffer.question2}</strong>
            </p>
          </Container>
        </section>

        {/* GARANTIA */}
        <Scallop color={NAVY} flip />
        <section className="relative overflow-hidden py-16 md:py-20" style={{ background: NAVY }}>
          <Sky />
          <Container className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <div className="relative mx-auto">
              <div className="bf-glow pointer-events-none absolute inset-6 rounded-full bg-candy/40 blur-3xl" aria-hidden />
              <Image
                src="/images/selo-garantia.webp"
                alt="Selo de garantia de 7 dias"
                width={700}
                height={700}
                className="reveal relative h-auto w-56 md:w-72"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-kids text-4xl font-extrabold leading-[1.05] sm:text-5xl">
                {kidsGuarantee.title} <span className="text-candy-gradient">{kidsGuarantee.highlight}</span>
              </h2>
              <p className="mt-5 text-lg text-white/80">
                {kidsGuarantee.text} <strong className="text-white">{kidsGuarantee.textStrong}</strong> {kidsGuarantee.textEnd}
              </p>
              <p className="mt-4 font-kids text-xl font-bold text-mint">{kidsGuarantee.note}</p>
            </div>
          </Container>
        </section>
        <Scallop color={NAVY} />

        {/* FAQ */}
        <section className="relative overflow-hidden bg-black py-16 md:py-24">
          <Sky />
          <Container className="max-w-3xl">
            <Title>
              Dúvidas dos <span className="text-candy-gradient">papais e mamães</span>
            </Title>
            <div className="mt-10 space-y-3">
              {kidsFaq.map((f, i) => {
                const t = tones[toneCycle[i % 4]];
                return (
                  <details key={f.q} open={i === 0} className="group rounded-3xl bg-white/[0.04] ring-2 ring-white/10 transition open:ring-candy/40">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-kids text-lg font-bold">
                      {f.q}
                      <ChevronDown className={`h-5 w-5 shrink-0 transition group-open:rotate-180 ${t.text}`} aria-hidden />
                    </summary>
                    <p className="px-5 pb-5 text-white/70">{f.a}</p>
                  </details>
                );
              })}
            </div>
            <div className="mt-12 flex flex-col items-center gap-4 text-center">
              <CheckoutLink href={KIDS_CHECKOUT_URL} className={`${btn} px-10 py-5 text-xl`}>
                <Star className="h-5 w-5 fill-current" aria-hidden />
                {kidsFinalCta.cta}
              </CheckoutLink>
              <span className="font-kids text-lg font-bold text-sun">{kidsFinalCta.note}</span>
            </div>
          </Container>
        </section>

        <KidsBands />
      </main>

      <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-white/50">
        2026 Brumdance © Todos os direitos reservados.
      </footer>
    </>
  );
}
