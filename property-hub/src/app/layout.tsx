import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Property Hub",
  description: "A real estate website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
