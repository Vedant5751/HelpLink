import React from "react";
import HomeNav from "../components/HomeNav"; 
import HomeHero from "../components/HomeHero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HomeNav />
      <HomeHero />
      <Projects />
      <Footer />
    </>
  );
}
