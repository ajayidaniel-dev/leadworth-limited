import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | Leadworth Consulting Limited",
    default: "Leadworth Consulting Limited",
  },
  description:
    "Leadworth Consulting Limited is a leading provider of HR solutions, including recruitment, HR consulting, training, background checks, outsourcing, and employee relations services.",
  keywords: [
    "Leadworth Consulting",
    "Leadworth HR solutions",
    "HR consulting Nigeria",
    "HR outsourcing services",
    "recruitment agency in Nigeria",
    "employee background checks",
    "HR training programs",
    "human resource consulting",
    "HR blog Nigeria",
    "HR community",
    "HR insights",
    "HR trends 2025",
    "latest in HR",
    "HR news updates",
    "HR tips and strategies",
    "HR for startups",
    "HR for SMEs",
    "HR professionals blog",
    "HR best practices",
    "recruitment tips",
    "workplace culture",
    "talent acquisition",
    "employee relations",
    "performance management",
    "HR outsourcing company",
    "weekly Leadworth update",
    "HR design blog",
    "product managers HR blog",
    "content writers HR blog",
    "how to hire right",
    "HRies",
    "HR gist",
    "HRgig",
    "HR websites",
    "how to retain talent",
    "training and development",
  ],

  icons: {
    icon: "/enhanced_logo.jpg",
    shortcut: "/enhanced_logo.jpg",
    apple: "/apple-touch-icon.png",
  },
  applicationName: "Leadworth Consulting Limited",
  referrer: "origin",
  creator: "Ajayi Daniel",
  publisher: "Leadworth Consulting Limited",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://leadworthconsulting.com" },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://leadworthconsulting.com/",
    title: "Leadworth Consulting Limited",
    description:
      "Leadworth Consulting Limited is a leading provider of HR solutions, including recruitment, HR consulting, training, background checks, outsourcing, and employee relations services.",
    siteName: "Leadworth Consulting Limited",
    images: [
      {
        url: "/enhanced_logo.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@leadworthconsulting",
    creator: "@leadworthconsulting",
    images: "/enhanced_logo.jpg",
    description:
      "Leadworth Consulting Limited is a leading provider of HR solutions, including recruitment, HR consulting, training, background checks, outsourcing, and employee relations services.",
    title: "Leadworth Consulting Limited",
  },

  metadataBase: new URL("https://leadworthconsulting.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
