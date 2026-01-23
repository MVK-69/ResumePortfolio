"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <motion.h1
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 1, y: -110 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold"
      >
        Hi, I’m Vinay Kumar 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -100 }}
        transition={{ delay: 0.8 }}
        className="text-gray-500"
      >
        Java Developer | System Design
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -90 }}
        transition={{ delay: 1.0 }}
      >
        <Button>View Projects</Button>
      </motion.div>
    </main>
  );
}
