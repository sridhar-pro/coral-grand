import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import { Geologica } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geologica = Geologica({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights as needed
});

const notoSans = Noto_Sans({
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
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={notoSans.className}
      >
        {children}
      </body>
    </html>
  );
}
