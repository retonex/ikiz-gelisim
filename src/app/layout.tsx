import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "İkiz Gelişim Platformu",
  description: "İkiz ergenlerin ayrışma-bütünleşme süreci, bireyselleşme ve kimlik gelişimlerini desteklemeye yönelik platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-green-400 via-purple-500 to-purple-800`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
