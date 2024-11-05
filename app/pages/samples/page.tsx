"use client";

import AnimatedLogo from "@/app/components/AnimatedLogo";
import SimpleRippleChat from "@/app/components/SimpleRippleForChat";
import { ExampleTick } from "@/app/components/TickAnimation";

export default function SamplesPage() {
  return (
    <div className="flex flex-col bg-gray-200">
      <SimpleRippleChat />
      <AnimatedLogo />
      <ExampleTick />
    </div>
  );
}
