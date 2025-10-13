'use client'

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import CRMSection from "./components/CRMSection";
import IntakeSection from "./components/IntakeSection";
import BlogSection from "./components/BlogSection";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
    <NavBar />
    <Hero />
    <InfoSection />
    <CRMSection />
    <IntakeSection />
    <BlogSection />
    <FormSection />
    <Footer />
    </div>
  );
}
