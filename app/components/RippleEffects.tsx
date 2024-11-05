"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const RippleEffect = ({ variant }: { variant: string }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const baseClassName = "absolute inset-0 rounded-full border-2";

  const variants = {
    simple: {
      className: `${baseClassName} border-blue-500`,
      animate: {
        scale: [1, 2],
        opacity: [0.5, 0],
      },
      transition: {
        duration: 1,
        ease: "easeOut",
        times: [0, 1],
        repeat: Infinity,
      },
    },
    double: {
      className: `${baseClassName} border-green-500`,
      animate: {
        scale: [1, 1.5, 2],
        opacity: [0.5, 0.3, 0],
      },
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
      },
    },
    pulse: {
      className: `${baseClassName} border-purple-500`,
      animate: {
        scale: [1, 1.3, 1],
        opacity: [0.5, 0.3, 0.5],
      },
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
      },
    },
    burst: {
      className: `${baseClassName} border-red-500`,
      animate: {
        scale: [1, 1.5],
        opacity: [0.5, 0],
      },
      transition: {
        duration: 0.5,
        ease: "easeOut",
        times: [0, 1],
        repeat: 3,
        repeatDelay: 0.5,
      },
    },
    wave: {
      className: `${baseClassName} border-yellow-500`,
      animate: {
        scale: [1, 1.5, 2],
        opacity: [0.5, 0.3, 0],
        borderWidth: ["2px", "1px", "0px"],
      },
      transition: {
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
      },
    },
  };

  const currentVariant = variants[variant as keyof typeof variants];

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {isAnimating && (
        <motion.div
          className={currentVariant.className}
          animate={currentVariant.animate}
          transition={currentVariant.transition}
        />
      )}
      <Button
        className="relative z-10 w-16 h-16 rounded-full bg-white text-black hover:bg-gray-100"
        onClick={() => setIsAnimating(!isAnimating)}
      >
        {isAnimating ? "Stop" : "Start"}
      </Button>
    </div>
  );
};

export default function RippleEffectsShowcase() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Ripple Effects Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Simple Ripple</h2>
          <RippleEffect variant="simple" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Double Ripple</h2>
          <RippleEffect variant="double" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Pulse Ripple</h2>
          <RippleEffect variant="pulse" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Burst Ripple</h2>
          <RippleEffect variant="burst" />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Wave Ripple</h2>
          <RippleEffect variant="wave" />
        </div>
      </div>
    </div>
  );
}
