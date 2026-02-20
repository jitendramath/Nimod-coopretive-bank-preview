import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nimod Cooperative Society | निमोद सहकारी समिति",
  description: "बहुउद्देशीय प्राथमिक ग्राम सेवा सहकारी समिति निमोद। डिजिटल बैंकिंग, सुपरमार्केट और कृषि सुविधाओं के साथ ग्रामीण विकास का आधुनिक मॉडल।",
  
  // 🟢 Open Graph (For WhatsApp, Facebook, LinkedIn, Telegram, Instagram)
  openGraph: {
    title: "Nimod Cooperative Society | निमोद सहकारी समिति",
    description: "सहकारिता के माध्यम से ग्रामीण विकास का आधुनिक मॉडल। जानिए हमारी डिजिटल बैंकिंग, सुपरमार्केट और कृषि सुविधाओं के बारे में।",
    url: "https://nimodbank.in", // अपनी असली वेबसाइट का लिंक यहाँ डालें (अगर अलग है तो)
    siteName: "Nimod Cooperative Society",
    images: [
      {
        url: "https://i.ibb.co/zT42c2Kr/og.png", // तुम्हारी Premium 1200x630 Image
        width: 1200,
        height: 630,
        alt: "Nimod Cooperative Society Preview",
      },
    ],
    type: "website",
  },

  // 🐦 Twitter (For X / Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Nimod Cooperative Society | निमोद सहकारी समिति",
    description: "सहकारिता के माध्यम से ग्रामीण विकास का आधुनिक मॉडल।",
    images: ["https://i.ibb.co/zT42c2Kr/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-500`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>

          {/* 🔝 NAVBAR */}
          <Navbar />

          {/* 🌐 PAGE CONTENT */}
          <main className="min-h-screen relative overflow-hidden">
            {children}
          </main>

          {/* 🔻 FOOTER */}
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}
