export type DealProps = {
  createdAt: number;
  _id: number;
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
