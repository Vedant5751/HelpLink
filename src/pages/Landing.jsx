import React from "react";
import LandNav from "../components/LandNav";
import Hero from "../components/Hero";

export default function Landing() {
  return (
    <>
      <LandNav />
      <Hero />
      <h1 className="text-3xl bg-yellow-500 mb-24 font-bold underline">
        Project Showcase
      </h1>
      <h1 className="text-3xl bg-cyan-500 mb-24 font-bold underline">
        Contact Us
      </h1>
      <h1 className="text-3xl bg-gray-500 mb-24 font-bold underline">Footer</h1>
    </>
  );
}
