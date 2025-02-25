import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // ✅ Ensure correct path
import Navbar from "@/components/Navbar"; // ✅ Import Navbar

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Pelican App Solutions",
  description: "Making technology simple and affordable.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <Navbar /> {/* ✅ Added Navbar */}
        <div className="max-w-4xl mx-auto px-6">{children}</div>
      </body>
    </html>
  );
}
