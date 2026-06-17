import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SKYPARK | The Kendy Initiative — Building Africa's Playgrounds",
  description:
    "SKYPARK is building free, world-class community sports parks across Africa's major cities. Basketball courts, football turf, tennis, skating, dance and more — free for all via the Kendy Token.",
  keywords: [
    "SKYPARK",
    "Kendy Initiative",
    "community sports parks Africa",
    "free public sports",
    "Pan-African sports infrastructure",
    "Kendy Token",
  ],
  openGraph: {
    title: "SKYPARK | The Kendy Initiative — Building Africa's Playgrounds",
    description: "Free sport. Open doors. Stronger cities.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKYPARK | The Kendy Initiative",
    description: "Free sport. Open doors. Stronger cities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${inter.variable}
          ${syne.variable}
          font-sans
          bg-slate-950
          text-white
          antialiased
          overflow-x-hidden
        `}
      >
        {children}
      </body>
    </html>
  );
}