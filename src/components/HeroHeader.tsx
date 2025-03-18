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
      className={`max-sm:text-2xl text-6xl px-4 font-bold tracking-tighter text-balance`}
    >
      {children}
    </motion.h1>
  );
};

export default HeroHeader;
