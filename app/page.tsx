import Features from "@/components/Features";
import Hero from "@/components/Hero";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canon Printer Software",
  description: "Canon Printer Software",
 
};

export default function Home() {
  return (
    <>
    
    
     <Hero />
     <Features />
  
     
    </>
  );
}
