type HeaderProps = {
  title: string;
  className?: string;
};

const Header = (props: HeaderProps) => {
  //this is how you can merge classes into the component OR keep the default ones set
  const { title, className } = props;
  return (
    <h1 className={`text-5xl font-bold tracking-tighter ${className}`}>
      {title}
    </h1>
  );
};

export default Header;
