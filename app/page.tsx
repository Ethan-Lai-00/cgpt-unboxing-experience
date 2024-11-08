"use client";

import { useRouter } from "next/navigation";
import AnimatedLogo from "./components/AnimatedLogo";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("..pages/samples"); // Navigate to the samples page
  };

  const greetings = [
    "",
    "Hello John Doe, Carbon GPT at your service",
    "Let's jumpstart your sustainability journey!",
  ];

  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [isThinking, setIsThinking] = useState(true);
  const [showRipple, setShowRipple] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsThinking(false);
    }, 6000); // Stop thinking after 6 seconds
    // Start the ripple effect after 1 second
    const rippleTimeout = setTimeout(() => {
      setShowRipple(true);
    }, 1000);

    return () => {
      clearTimeout(rippleTimeout);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (currentGreetingIndex < greetings.length - 1) {
      interval = setInterval(() => {
        setCurrentGreetingIndex((prevIndex) => prevIndex + 1);
      }, 5000); // 5 seconds for each text
    } else {
      const timeout = setTimeout(() => {
        router.push("pages/portal");
      }, 5000); // Wait for the last greeting to display for 5 seconds

      return () => clearTimeout(timeout);
    }

    return () => clearInterval(interval);
  }, [currentGreetingIndex, router, greetings.length]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex h-16 bg-gray-100 justify-end items-center px-4">
        <div
          className="px-4 py-2 h-fit justify-center bg-white cursor-pointer rounded-md"
          onClick={handleClick}
        >
          Samples
        </div>
      </div>
      <div className="flex flex-grow justify-center items-center">
        <div className="flex flex-col items-center w-full">
          <div className="flex w-full justify-center px-4">
            <div className="w-60">
              <div className="relative w-64 h-64 flex items-center justify-center rounded-full">
                <AnimatedLogo />

                <AnimatePresence>
                  {isThinking && showRipple && (
                    <motion.div
                      key="ripple"
                      className="absolute rounded-full border-2 border-purple-600"
                      initial={{ width: 100, height: 100, opacity: 0 }}
                      animate={{
                        width: [280, 400],
                        height: [280, 400],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center px-10 mt-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGreetingIndex}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="flex text-2xl font-semibold text-gray-700 text-center"
              >
                {greetings[currentGreetingIndex] === "" ? (
                  <span>&nbsp;</span> // Render a blank space for the empty string
                ) : (
                  <Typewriter
                    options={{
                      strings: greetings[currentGreetingIndex],
                      autoStart: true,
                      loop: false,
                      delay: 45, // Adjust typing speed
                    }}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
