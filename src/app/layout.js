import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // prevent blank text flash
});

export const metadata = {
  title: "Nimod Cooperative Bank | Gram Seva Sahakari Samiti",
  description:
    "निमोद ग्राम सेवा सहकारी समिति - ग्रामीण वित्तीय सेवाएं, कृषि विकास और सहकारी सशक्तिकरण के लिए समर्पित संस्था।",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body
        className={`${inter.className} bg-premium-charcoal text-white antialiased selection:bg-premium-emerald selection:text-premium-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
