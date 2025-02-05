import type { Metadata } from "next";
import { Work_Sans, Raleway } from "next/font/google";
import "../styles/globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
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
        className={`${workSans.variable} ${raleway.variable} antialiased font-work_sans`}
      >
        {children}
      </body>
    </html>
  );
}
