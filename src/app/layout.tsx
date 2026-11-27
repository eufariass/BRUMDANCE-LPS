import type { Metadata, Viewport } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethink = Rethink_Sans({
  variable: "--font-rethink",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Trilogia Essencial da Dança — Ballet, Jazz e Contemporânea com BrumDance. Nova edição: 30 aulas do zero ao essencial na técnica + 6 aulas bônus. Black Friday: de R$1.191 por R$247.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://brumdance.com.br"),
  title: "Trilogia Essencial da Dança – Black Friday | BrumDance",
  description,
  openGraph: {
    title: "Trilogia Essencial da Dança – Black Friday | BrumDance",
    description,
    locale: "pt_BR",
    type: "website",
    siteName: "Brum Dance",
    images: [{ url: "/images/logo.webp", width: 873, height: 760 }],
  },
  twitter: { card: "summary_large_image", title: "Trilogia Essencial da Dança – Black Friday | BrumDance", description },
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
