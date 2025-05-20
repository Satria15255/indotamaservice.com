"use client";

import { motion } from "framer-motion";

export default function FadeInFromTop({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay }}>
      {children}
    </motion.div>
  );
}
