import type { Metadata } from "next";
import { Work_Sans, Raleway } from "next/font/google";
import localFont from 'next/font/local';
import "../styles/globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

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
        className={`${workSans.variable} ${raleway.variable} ${anthony.variable} w-screen h-screen antialiased font-work_sans flex flex-col items-center justify-between gap-4`}
      >
        <Header />
        <main className="flex-1 mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
