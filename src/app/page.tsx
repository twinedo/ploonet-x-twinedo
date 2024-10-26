'use client'
import HomeFeatures from "@/components/home/features";
import HomeForm from "@/components/home/form";
import HomeHero from "@/components/home/hero";
import HomeMakingProcess from "@/components/home/making-process";
import HomePreviousWork from "@/components/home/previous-work";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
   <>
    <Navbar />
    <HomeHero />
    <HomeFeatures />
    <HomePreviousWork />
    <HomeMakingProcess />
    <HomeForm />
   </>
  );
}
