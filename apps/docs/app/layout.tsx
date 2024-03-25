import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth Rush",
  description:
    "Auth Rush is an all-in-one solution for your authentication needs. It provides a simple and secure way to authenticate your users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative max-w-screen-2xl mx-auto">
          <Navbar />
        </main>

        {children}
      </body>
    </html>
  );
}
