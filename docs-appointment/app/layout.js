import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from 'sonner'
//import { Toaster } from "@/components/ui/toaster";
//it is layout.js which is visible to the viewers
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
       <div className="md:px-20">
        <Header/>
        {children}
        <Toaster />

        </div> 
        <Footer/>       
      </body>
    </html>
  );
}
