import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Novawork — Elite Talent Marketplace",
    template: "%s | Novawork",
  },
  description:
    "Connect with world-class freelance talent and unlock enterprise-grade digital solutions on Novawork, the modern marketplace built for ambitious teams.",
  keywords: [
    "freelance marketplace",
    "remote work",
    "hire developers",
    "find freelance jobs",
    "top talent platform",
  ],
  metadataBase: new URL("https://agentic-07f1ee16.vercel.app"),
  openGraph: {
    title: "Novawork — Elite Talent Marketplace",
    description:
      "Hire top freelance experts or land your next project opportunity with a curated, data-driven talent experience.",
    url: "https://agentic-07f1ee16.vercel.app",
    siteName: "Novawork",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novawork — Elite Talent Marketplace",
    description:
      "Your competitive advantage for hiring elite freelancers and managing talent pipelines end-to-end.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${mono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[30%] h-[500px] bg-[radial-gradient(circle,_rgba(168,85,247,0.15),_transparent_60%)] blur-3xl"
          />
          <div className="relative flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
