import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppinsFont = Poppins({
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sana Cash n Carry",
  description: "Sana Cash n Carry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppinsFont.className}>
      <body className={`${interFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
