
import React from "react";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import AboutUs from "@/components/home/AboutUs";
import Testimonials from "@/components/home/Testimonials";
import ContactForm from "@/components/home/ContactForm";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
