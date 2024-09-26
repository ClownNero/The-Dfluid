import type { Metadata } from "next";
import { META_ROOT } from "./_meta";
import { Exo_2, Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = META_ROOT;

const exo_2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo-2",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${exo_2.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
