import { Inter } from "next/font/google";
import "./globals.css"; // यह लाइन सबसे ज्यादा ज़रूरी है!

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nimod Cooperative Bank",
  description: "Gram Seva Sahakari Samiti Nimod",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
