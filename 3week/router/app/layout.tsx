import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    template: "%s | Sucoding",
    default: "Next.JS 14",
  },
  description: "Let's learn next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Link href={"/"}>home</Link>
        <Link href={"/about"}>about</Link>
        <div></div>
      </body>
    </html>
  );
}
