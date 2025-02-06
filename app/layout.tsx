import type { Metadata } from "next";
import { Work_Sans, Raleway, Sofia } from "next/font/google";
import Header from './ui/Header'
import "../styles/globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const sofia = Sofia({
  variable: "--font-sofia",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Krishnasankar | Freelance Web Developer",
  description: "Krishnasankar is a freelance web developer specializing in modern web technologies and responsive design. Discover his portfolio and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${raleway.variable} ${sofia.variable} antialiased font-work_sans relative overflow-hidden`}
      >
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-green-500 to-cyan-500 -z-10 rounded-xl blur-3xl animate-glow"></div>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
