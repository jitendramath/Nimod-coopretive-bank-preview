import { Inter } from "next/font/google";
import "./globals.css"; // Global Styles Import

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nimod Cooperative Bank | Gram Seva Sahakari Samiti",
  description: "निमोद ग्राम सेवा सहकारी समिति - एक बहुउद्देश्यीय ग्रामीण सहकारी संस्था जो वित्तीय समावेशन और विकास के लिए समर्पित है।",
  icons: {
    icon: "/favicon.ico", // Ensure you have a favicon or remove this line
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body className={`${inter.className} bg-premium-charcoal text-white antialiased selection:bg-premium-emerald selection:text-premium-charcoal`}>
        {children}
      </body>
    </html>
  );
}
