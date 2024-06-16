'use client'
import { Montserrat } from "next/font/google";
import { usePathname } from 'next/navigation';
import Header from "@/components/Header";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  // Check if the current route is the home page
  const isHomePage = pathname === '/';
  return (
    <html className="dark w-screen h-screen relative bg-blue overflow-hidden" lang="en">
      <body className={montserrat.className + " w-screen overflow-x-hidden"} style={{backgroundImage: `url('/images/bg.png')`}}>
        {isHomePage && <Header />}
        {children}
      </body>
    </html>
  );
}
