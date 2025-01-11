const Container = ({ children }) => {
  return (
    <div className='flex flex-wrap items-center space-x-4 justify-center mt-12'>
      {children}
    </div>
  );
};

export default Container;
