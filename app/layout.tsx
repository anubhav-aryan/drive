import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets : ['latin'],
  weight : ['100', '200', '300', '400'],
  display : 'swap',
  variable : '--font-poppins',
}) 


export const metadata: Metadata = {
  title: "StoreIt",
  description: "Start after a long break",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={'${poppins.variable} font-poppins antialiased '}
      >
        {children}
      </body>
    </html>
  );
}
