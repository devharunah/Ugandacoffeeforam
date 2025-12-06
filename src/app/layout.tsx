import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-anton",
  subsets: ["latin"],
});
const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uganda Coffee Forum",
  description: "A platform connecting coffee farmers with a global community for learning, selling, and support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manRope.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
