import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = await (await fetch("http://localhost:4000/post")).json();
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/blog/1"}>blog 1</Link>
          <Link href={"/blog/2"}>blog 2</Link>
        </nav>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
        <main>{children}</main>
      </body>
    </html>
  );
}
