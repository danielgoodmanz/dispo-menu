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
      className={`text-6xl font-bold tracking-tighter text-balance`}
    >
      {children}
    </motion.h1>
  );
};

export default HeroHeader;
