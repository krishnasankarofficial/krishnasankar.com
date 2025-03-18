import type { Metadata } from "next";
import { Work_Sans, Raleway, Sofia } from "next/font/google";
import localFont from 'next/font/local';
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import Megamenu from "./ui/Megamenu";
import GoToTop from "../components/ui/GoToTop";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const anthony = localFont({
  src: [
    {
      path: '../public/fonts/Anthony Gilford.otf',
      style: 'normal',
    },
  ],
  variable: "--font-anthony",
  display: 'swap',
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
  icons: {
    icon: "/icon-white.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${raleway.variable} ${sofia.variable} ${anthony.variable} antialiased font-work_sans relative overflow-x-hidden flex flex-col w-screen min-h-screen`} 
      >
        <div className="w-full h-full fixed top-0 left-0 bg-gradient-to-l from-green-400 to-cyan-400 -z-10 rounded-xl "></div>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <GoToTop />
      </body>
    </html>
  );
}
