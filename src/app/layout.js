import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Musfick Jamil",
  description:
    "Portfolio of Musfick Jamil, a specialized Mobile Application Developer building high-performance, user-centric mobile experiences.",
  keywords: [
    "Mobile Developer",
    "App Development",
    "Musfick Jamil",
    "Portfolio",
    "React Native",
    "Flutter",
    "Android",
    "iOS",
  ],
  authors: [{ name: "Musfick Jamil" }],
  openGraph: {
    title: "Musfick Jamil | Mobile Application Developer",
    description: "Explore the mobile projects and expertise of Musfick Jamil.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
