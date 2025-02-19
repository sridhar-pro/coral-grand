import { Geist, Geist_Mono, Noto_Sans, Inter } from "next/font/google";
import "./globals.css";

import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./components/Navbar"));
const FooterBlock = dynamic(() => import("./components/Footer"));

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights as needed
});


export const metadata = {
  title: "Coral Grand Property Developers",
  description: "Property Developers in coimbatore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={inter.className}
      >
        <Navbar />
        {children}
        <FooterBlock />
      </body>
    </html>
  );
}
