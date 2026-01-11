import type { Metadata } from "next";
import { AppProviders } from "@/providers/app-providers";
import "@/styles/globals.css";
import {
  rubik,
  openSans,
  parkinsans,
  monaSans,
  montserrat,
  beVietnamPro,
} from "@/styles/fonts";

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
        className={`${montserrat.variable} ${beVietnamPro.variable} ${parkinsans.variable} ${rubik.variable} ${openSans.variable} ${monaSans.variable} antialiased font-montserrat`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
