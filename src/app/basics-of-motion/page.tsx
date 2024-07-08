"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function BasicsOfMotionPage() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <motion.button
        layout
        className="bg-gray-300 px-3 py-2 rounded-md text-sm"
        onClick={() => setVisible(!visible)}
      >
        Click
      </motion.button>
      <AnimatePresence mode="popLayout">
        {visible && (
          <motion.div
            initial={{
              rotate: "0deg",
            }}
            animate={{
              rotate: "180deg",
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: "0deg",
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.5, 1],
            }}
            className="w-[150px] h-[150px] bg-gray-700"
          />
        )}
      </AnimatePresence>
    </>
  );
}
