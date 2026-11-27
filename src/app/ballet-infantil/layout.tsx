import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";

const baloo = Baloo_2({ variable: "--font-baloo", subsets: ["latin"], weight: ["600", "700", "800"], display: "swap" });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"], display: "swap" });

const description =
  "Lançamento Ballet Kids: troque o desenho por uma aula de ballet. Aulas curtas e divertidas para crianças dançarem em casa com a Prof.ª Ana Brum. Preço especial de Black Friday.";

export const metadata: Metadata = {
  title: "Ballet Kids – Lançamento Black Friday | Brumdance",
  description,
  openGraph: {
    title: "Ballet Kids – Lançamento Black Friday | Brumdance",
    description,
    locale: "pt_BR",
    type: "website",
    siteName: "Brum Dance",
    images: [{ url: "/images/hero-bg.webp", width: 1920, height: 800 }],
  },
  twitter: { card: "summary_large_image", title: "Ballet Kids – Lançamento Black Friday", description },
};

export default function KidsLayout({ children }: LayoutProps<"/ballet-infantil">) {
  return <div className={`${baloo.variable} ${nunito.variable} font-kids-body`}>{children}</div>;
}
