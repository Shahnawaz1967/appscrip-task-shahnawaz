import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern E-commerce Store | Discover Our Products",
  description:
    "Discover our curated collection of high-quality bags, accessories, and home decor items. Shop the latest trends in modern design.",
  openGraph: {
    title: "Modern E-commerce Store | Discover Our Products",
    description:
      "Discover our curated collection of high-quality bags, accessories, and home decor items.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
