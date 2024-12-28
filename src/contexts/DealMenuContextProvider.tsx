import { createContext, useState } from 'react';

const DealMenuContext = createContext(null);

const DealMenuContextProvider = () => {
  //state for deals (which will be object-like when pulled from DB)
  const { deals, setDeals } = useState([]);

  //event handlers for Dealform.tsx
  return (
    <DealMenuContext.Provider
      value={{ deals, setDeals }}
    ></DealMenuContext.Provider>
  );
};

export default DealMenuContextProvider;
