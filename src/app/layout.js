import { Hind } from "next/font/google";
import "./globals.css";

// Google Font Setup (Optimized)
const hind = Hind({
  subsets: ["latin", "devanagari"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

export const metadata = {
  title: "Nimod Gram Seva Sahkari Samiti | Official Digital Platform",
  description:
    "निमोद ग्राम सेवा सहकारी समिति – एक बहुउद्देश्यीय ग्रामीण सहकारी संस्था जो वित्तीय समावेशन, कृषि विकास, ऊर्जा, भंडारण और सामाजिक सशक्तिकरण में कार्यरत है।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi" className={`${hind.variable} scroll-smooth`}>
      <body className="font-hind bg-brand-main text-ui-main antialiased selection:bg-mint-300 selection:text-mint-700">
        {children}
      </body>
    </html>
  );
}
