import { DealProps } from 'types/appTypes';

//function to hit API for flagging isSold boolean in DB, this will prob have to be a mutation eventually
export const markSold = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/marksold/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ isSold: true }),
      headers: { 'content-type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
  }
};
//check if this deal was added today, TODO: have this include a range of 24h from deal.updatedAt
export const isDealAddedToday = (deal: DealProps) => {
  if (!deal.updatedAt) return false;

  const today = new Date(Date.now()).getDate();
  const dealDate = new Date(deal.updatedAt!).getDate();

  return today === dealDate;
};

export const formattedDate = (updatedAt: string) => {
  return new Date(updatedAt).toLocaleString('en-US', {
    hour: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
