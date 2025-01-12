const Container = ({ children }) => {
  return (
    <div className='flex flex-wrap items-center justify-center mt-12 gap-4'>
      {children}
    </div>
  );
};

export default Container;
