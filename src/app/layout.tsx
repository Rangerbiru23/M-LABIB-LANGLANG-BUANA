import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M LABIB LANGLANG BUANA - Budidaya Ikan Air Tawar Profesional",
  description: "M LABIB LANGLANG BUANA adalah perusahaan profesional di bidang budidaya ikan air tawar yang berlokasi di Cicantayan, Sukabumi. Kami menyediakan layanan budidaya ikan berkualitas tinggi dengan metode modern.",
  keywords: ["M LABIB LANGLANG BUANA", "budidaya ikan", "ikan air tawar", "aquaculture", "perikanan", "Sukabumi", "Cicantayan", "ikan konsumsi", "budidaya ikan profesional"],
  authors: [{ name: "M LABIB LANGLANG BUANA" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "M LABIB LANGLANG BUANA - Budidaya Ikan Air Tawar",
    description: "Perusahaan profesional di bidang budidaya ikan air tawar di Cicantayan, Sukabumi",
    url: "https://mlabib-langlangbuana.com",
    siteName: "M LABIB LANGLANG BUANA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M LABIB LANGLANG BUANA - Budidaya Ikan Air Tawar",
    description: "Perusahaan profesional di bidang budidaya ikan air tawar di Cicantayan, Sukabumi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="gvawgpe1y164q26dekag5h808dckcz" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
