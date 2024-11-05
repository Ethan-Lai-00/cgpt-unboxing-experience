"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "../shadcnSidebar/app-sidebar";

const OnboardingPortal = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("../pages/end"); // Navigate to the samples page
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex h-screen justify-center items-center">
        <div
          className="px-6 py-4 h-fit justify-center bg-[#7D78ED] text-white font-bold cursor-pointer rounded-md"
          onClick={handleClick}
        >
          Complete Onboarding
        </div>
      </div>
    </SidebarProvider>
  );
};

export default OnboardingPortal;

// The code above is an example code.
// Note that this sidebar provider and appsidebar code is suppose to wrap the structure of layout.tsx.
// return (
//   <SidebarProvider>
//     <AppSidebar />
//     <main>
//       <SidebarTrigger />
//       {children}
//     </main>
//   </SidebarProvider>
// )
