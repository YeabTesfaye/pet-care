import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PetCare - Complete Care For Your Furry Friends",
    template: "%s | PetCare",
  },
  description:
    "Track pet health, book services, connect with other pet owners, and access resources all in one place.",
  keywords: [
    "pet care",
    "pet health",
    "veterinary",
    "pet community",
    "pet services",
  ],
  authors: [{ name: "PetCare Team" }],
  creator: "PetCare",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://petcare.vercel.app",
    title: "PetCare - Complete Care For Your Furry Friends",
    description:
      "Track pet health, book services, connect with other pet owners, and access resources all in one place.",
    siteName: "PetCare",
  },
  twitter: {
    card: "summary_large_image",
    title: "PetCare - Complete Care For Your Furry Friends",
    description:
      "Track pet health, book services, connect with other pet owners, and access resources all in one place.",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
