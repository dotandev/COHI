import type { Metadata } from "next";
import { Inter, Manrope, Itim } from "next/font/google";
import "./globals.css";

import { RootLayout as CustomLayout } from "@/components/uis/RootLayout";

// const inter = Inter({ subsets: ["latin"] });
const itim = Itim(
  {
    subsets: ["vietnamese"],
    weight: "400"
  }
);
// const manrope = Manrope({ subsets: ["latin"]});


export const metadata: Metadata = {
  title: "Council Of Higher Institutions- MSSN Lagos. (COHI)",
  description: "An Organ of Muslim Students' Society of Nigeria Lagos State Area Unit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={itim.className}>
        <CustomLayout>
        {children}
        </CustomLayout>
        </body>
    </html>
  );
}
