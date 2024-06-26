import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Next연습",
    default: "NextJS 연습",
  },
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = await (await fetch("http://localhost:4000/posts")).json();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Link href="/a" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link href="/b">About</Link>
        </div>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
        {children}
      </body>
    </html>
  );
}
