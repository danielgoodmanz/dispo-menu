type HeroHeaderProps = {
  children: React.ReactNode;
};

const HeroHeader = ({ children }: HeroHeaderProps) => {
  //this is how you can merge classes into the component OR keep the default ones set

  return (
    <h1 className={`text-6xl font-bold tracking-tighter text-balance`}>
      {children}
    </h1>
  );
};

export default HeroHeader;
