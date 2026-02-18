import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nimod Cooperative",
  description: "Official portal of Nimod Cooperative Society for digital services and rural development.",
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
