export type DealProps = {
  createdAt?: string;
  updatedAt?: string;
  agent: string;
  _id?: string | number;
  address: string;
  livingArea: string;
  lot: string;
  yearBuilt: string;
  escrow: string;
  closing: string;
  price: string;
  description: string;
  photo: string;
};

export type AppProps = {
  children?: React.ReactNode;
};
