'use client'
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  return (
    <html className="dark" lang="en">
      <body className={montserrat.className + " overflow-x-hidden"} style={{backgroundImage: `url('/images/bg.png')`}}>
        {children}
      </body>
    </html>
  );
}
