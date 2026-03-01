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
    "Mobile application developer based in Dhaka, building apps with Kotlin, Swift, and Flutter.",
  keywords: [
    "Musfick Jamil",
    "Android Developer",
    "iOS Developer",
    "Flutter Developer",
    "Kotlin",
    "SwiftUI",
    "Jetpack Compose",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: "Musfick Jamil" }],
  openGraph: {
    title: "Musfick Jamil",
    description:
      "Mobile application developer based in Dhaka, building apps with Kotlin, Swift, and Flutter.",
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
