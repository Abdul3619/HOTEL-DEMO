import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
}

export default function FadeInSection({ children }: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
