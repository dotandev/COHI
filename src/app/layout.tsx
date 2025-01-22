import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

import { RootLayout as CustomLayout } from "@/components/uis/RootLayout";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"]});


export const metadata: Metadata = {
  title: "The Word-Smiths (TWS)",
  description: "The Word-Smiths, the debate club for The University Of Lagos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <CustomLayout>
        {children}
        </CustomLayout>
        </body>
    </html>
  );
}
