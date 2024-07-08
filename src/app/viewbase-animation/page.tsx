"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Page() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Is in view?", isInView);
  }, [isInView]);

  return (
    <>
      <motion.div className="w-full h-[101vh]"></motion.div>
      <motion.div
        className="w-full h-screen bg-red-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.div
        className="w-full h-screen bg-blue-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        ref={ref}
      ></motion.div>
    </>
  );
}
