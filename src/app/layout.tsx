import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syncore | מערכות ארגוניות חכמות שעובדות בשבילך",
  description:
    "פלטפורמה מבוססת AI לניהול פרויקטים, משימות, לקוחות ותהליכים עסקיים. אוטומציה חכמה שחוסכת זמן ומגדילה יעילות.",
  icons: {
    icon: "/Favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Syncore",
        url: "https://syncore.co.il/",
      },
      {
        "@type": "WebSite",
        name: "Syncore",
        url: "https://syncore.co.il/",
      },
    ],
  };

  return (
    <html lang="he" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
