import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kapil Poudel | Portfolio",
  description: "Portfolio of Kapil Poudel - Data Analyst Intern, Machine Learning Intern, AI Engineer Intern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}