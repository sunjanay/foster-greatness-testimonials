import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foster Greatness Testimonials",
  description: "Beautiful testimonials widget showcasing Foster Greatness community stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Century+Gothic:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Century Gothic', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
