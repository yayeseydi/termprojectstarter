import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Blocks",
  description: "Code blocks with auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {/* top navigation */}
        <header className="flex items-center justify-between px-8 py-4 border-b bg-white">
          <Link href="/" className="text-lg font-semibold">
            Code Blocks
          </Link>

          <nav className="flex items-center gap-4 text-sm">
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
            <Link href="/register" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </nav>
        </header>

        {/* Page content */}
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
