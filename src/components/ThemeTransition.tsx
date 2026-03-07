'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./ThemeProvider"

export default function ThemeTransition() {

  const { darkMode } = useTheme()

  return (
    <AnimatePresence mode="wait">

      <motion.div
        key={darkMode ? "dark" : "light"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="
        fixed
        inset-0
        pointer-events-none
        z-[9999]
        bg-black
        "
      />

    </AnimatePresence>
  )
}