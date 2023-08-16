"use client";
import AboutSection from "@/components/HomePage/AboutSection";
import ContactSection from "@/components/HomePage/ContactSection";
import HeroSection from "@/components/HomePage/HeroSection";
import MissionSection from "@/components/HomePage/MissionSection";
import ServicesSection from "@/components/HomePage/ServicesSection";
import Header from "@/components/Layout/Header/Header";

export default function Page() {
  // Header animation

  //
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
