import type { Metadata } from "next";
import { AppProviders } from "@/providers/app-providers";
import "@/styles/globals.css";
import { plusJakartaSans } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Gutech | Software House",
  description:
    "Gutech is a software development company that specializes in creating innovative and efficient software solutions for businesses of all sizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} antialiased font-plus-jakarta-sans`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
