"use client";
import AboutSection from "@/components/HomePage/AboutSection";
import HeroSection from "@/components/HomePage/HeroSection";
import MissionSection from "@/components/HomePage/MissionSection";
import ServicesSection from "@/components/HomePage/ServicesSection";
import Header from "@/components/Layout/Header";

export default function Page() {
  // Header animation

  //
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ServicesSection />
    </main>
  );
}
