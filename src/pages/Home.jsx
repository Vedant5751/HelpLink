import React from "react";
import HomeNav from "../components/HomeNav"; 
import HomeHero from "../components/HomeHero";
import Projects from "../components/Projects";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <HomeNav />
      <HomeHero />
      <Projects />
    </>
  );
}
