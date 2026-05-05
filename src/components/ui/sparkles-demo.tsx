"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles"

export default function SparklesDemo() {
  return (
    <div className="h-[20rem] sm:h-[30rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md pt-20 pb-10">
      <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20 max-w-6xl mx-auto px-4 leading-tight tracking-tight">
        Everything you need to build your digital twin
      </h1>
      <div className="w-full max-w-[40rem] h-40 relative mt-4">
        {/* Gradients */}
        <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm mx-auto" />
        <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 mx-auto" />
        <div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm mx-auto" />
        <div className="absolute inset-x-20 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 mx-auto" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges - exact match to the site background */}
        <div className="absolute inset-0 w-full h-full bg-[#0a0a0f] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
