import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl bg-blue-500 mt-24 mb-24 font-bold underline">
        Hero Section
      </h1>
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
