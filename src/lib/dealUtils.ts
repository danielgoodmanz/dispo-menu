import { DealProps } from 'types/appTypes';

//check if this deal was added within the day or 24h after
export const isDealAddedWithin24H = (deal: DealProps) => {
  if (!deal.updatedAt) return false;

  const today = new Date(Date.now()).getDate();
  const dealDate = new Date(deal.updatedAt!).getDate() + 1;

  return today <= dealDate;
};

export const formattedDate = (updatedAt: string) => {
  return new Date(updatedAt).toLocaleString('en-US', {
    hour: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
