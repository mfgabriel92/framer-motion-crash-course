"use client";

import { motion, useAnimationControls } from "framer-motion";

export default function Page() {
  const controls = useAnimationControls();

  function handleClick() {
    controls.start("flip");
  }

  return (
    <>
      <motion.button
        className="bg-gray-300 px-3 py-2 rounded-md text-sm"
        whileHover={{ scale: 1.05, y: -5, rotate: "-2.5deg" }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        Button
      </motion.button>
      <motion.div
        className="w-[150px] h-[150px] bg-gray-700"
        animate={controls}
        initial="initial"
        variants={{
          initial: { rotate: "0deg" },
          flip: { rotate: "90deg" },
        }}
      />
    </>
  );
}
