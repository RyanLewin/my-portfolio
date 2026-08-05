import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./header";
import { ThemeProvider } from '@/components/ThemeProvider';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Lewin - Portfolio",
  description: "Portfolio website for Ryan Lewin, a programmer with experience in game development and web development. Showcasing projects, skills, and a book club for sharing reading experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
          <Header></Header>
          <div className="mx-4 sm:mx-32 bg-background">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
