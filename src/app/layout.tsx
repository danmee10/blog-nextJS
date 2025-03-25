import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sandbox Docs",
  description: "Web development portfolio and blog",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Sandbox Docs",
    description:
      "A collection of experiments using different web technologies.",
    url: "https://sandboxdocs.com",
    siteName: "Sandbox Docs",
    images: [
      {
        url: "/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: "A preview image for the blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 font-geist-sans`}
      >
        <Navbar />
        <main className="flex justify-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
