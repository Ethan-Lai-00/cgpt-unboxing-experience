"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SimpleRippleChat() {
  const [isThinking, setIsThinking] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsThinking(false);
    }, 6000); // Stop thinking after 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-64 h-64 flex items-center justify-center rounded-full">
      <AnimatePresence>
        {isThinking && (
          <motion.div
            key="ripple"
            className="absolute rounded-full border-2 border-purple-600"
            initial={{ width: 30, height: 30, opacity: 0 }}
            animate={{
              width: [30, 200],
              height: [30, 200],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <div className="w-36 h-36 relative z-10 bg-white rounded-full p-4 flex items-center justify-center">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          layout="fill"
          objectFit="fill"
        />
      </div>
    </div>
  );
}

// Constant rippling
// "use client";

// import * as motion from "framer-motion/client";
// import Image from "next/image";

// export default function SimpleRippleChat() {
//   const ripples = Array.from({ length: 10 });

//   return (
//     <div className="relative w-64 h-64 flex items-center justify-center rounded-full">
//       {ripples.map((_, index) => (
//         <motion.div
//           key={index}
//           className="absolute rounded-full border border-purple-600 opacity-0"
//           initial={{ width: 30, height: 30 }}
//           animate={{
//             width: 200,
//             height: 200,
//             opacity: [0, 0.5, 0],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             delay: index * 1,
//             ease: "easeOut",
//           }}
//         />
//       ))}
//       <div className="w-36 h-36 relative z-10 bg-white rounded-full p-4">
//         <Image
//           src="/assets/logo.png"
//           alt="Logo"
//           layout="fill"
//           objectFit="fill"
//         />
//       </div>
//     </div>
//   );
// }
