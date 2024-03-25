import React from "react";
import HomeNav from "../components/HomeNav";
import ColHero from "../components/ColHero";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

export default function ColHome() {
  return (
    <>
      <HomeNav />
      <ColHero />
      <Projects />
      <Timeline />
      <Footer />
    </>
  );
}
