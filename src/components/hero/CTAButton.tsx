'use client'
import Link from "next/link";
import { motion } from "framer-motion";


interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
   className?: string;
}

export default function CTAButton({ href, children }: CTAButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
      <Link
        href={href}
        className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition shadow-md"
      >
        {children}
      </Link>
    </motion.div>
  );
}
