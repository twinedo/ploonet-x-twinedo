'use client'
import HomeFeatures from "@/components/home/features";
import HomeHero from "@/components/home/hero";
import HomePreviousWork from "@/components/home/previous-work";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
   <>
    <Navbar />
    <HomeHero />
    <HomeFeatures />
    <HomePreviousWork />
   </>
  );
}
