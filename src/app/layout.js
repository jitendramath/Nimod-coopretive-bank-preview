import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nimod Gram Seva Sahakari Samiti | Digital Banking",
  description: "Official portal of Nimod Cooperative Society for digital banking and agrarian services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <body className={`${inter.className} bg-premium-bg text-premium-text transition-colors duration-500`}>
        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          
          {/* Global Navbar */}
          <Navbar />

          {/* Main Page Content */}
          <main className="min-h-screen relative overflow-hidden">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}
