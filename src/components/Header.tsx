type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  return (
    <h1 className='text-5xl font-bold text-center tracking-tighter '>
      {props.title}
    </h1>
  );
};

export default Header;
