"use client";

import { MotionConfig, motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <MotionConfig transition={{ duration: 0.3, ease: "backInOut" }}>
        <motion.button
          whileHover={{ scale: 1.05, y: -5, rotate: "-2.5deg" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-300 px-3 py-2 rounded-md text-sm"
        >
          Button
        </motion.button>
      </MotionConfig>
    </>
  );
}
