import { motion } from 'motion/react';

type HeroHeaderProps = {
  children: React.ReactNode;
};

const HeroHeader = ({ children }: HeroHeaderProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 4 }}
      className={`sm:text-6xl px-4 text-2xl font-bold tracking-tighter text-balance`}
    >
      {children}
    </motion.h1>
  );
};

export default HeroHeader;
