"use client";
import React from "react";
import AboutSection from "@/components/HomePageSections/AboutSection";
import ContactSection from "@/components/HomePageSections/ContactSection";
import HeroSection from "@/components/HomePageSections/HeroSection";
import MissionSection from "@/components/HomePageSections/MissionSection";
import ServicesSection from "@/components/HomePageSections/ServicesSection";
import ReferenceCardList from "@/components/References/ReferenceCardList";

const HomePageContainer = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ReferenceCardList />
      <MissionSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default HomePageContainer;
