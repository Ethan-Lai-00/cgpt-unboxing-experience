"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OnboardingPortal = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("../pages/end"); // Navigate to the samples page
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div
        className="px-6 py-4 h-fit justify-center bg-[#7D78ED] text-white font-bold cursor-pointer rounded-md"
        onClick={handleClick}
      >
        Complete Onboarding
      </div>
    </div>
  );
};

export default OnboardingPortal;
