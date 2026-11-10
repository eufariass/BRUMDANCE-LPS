import type { Metadata, Viewport } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethink = Rethink_Sans({
  variable: "--font-rethink",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Pacote completo: Jazz + Ballet + Contemporâneo — Black Friday: 3 escolas completas de R$397 por R$147. Com 20 min/dia, veja progresso real nas primeiras 4 semanas.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://brumdance.com.br"),
  title: "Black Friday 3 em 1 – Brumdance",
  description,
  openGraph: {
    title: "Black Friday 3 em 1 – Brumdance",
    description,
    locale: "pt_BR",
    type: "website",
    siteName: "Brum Dance",
    images: [{ url: "/images/logo.webp", width: 873, height: 760 }],
  },
  twitter: { card: "summary_large_image", title: "Black Friday 3 em 1 – Brumdance", description },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${rethink.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
