import Deal from './models/dealModel.js';

export async function getDeals(req, res) {
  try {
    res.json({ message: 'this is the getDeals route' });
  } catch (error) {
    console.log(error);
  }
}
export async function getDeal(req, res) {
  try {
    res.json({ message: 'this is the getDeal route' });
  } catch (error) {
    console.log(error);
  }
}
export async function addDeal(req, res) {
  try {
    res.json({ message: 'this is the addDeal route' });
  } catch (error) {
    console.log(error);
  }
}
export async function updateDeal(req, res) {
  try {
    res.json({ message: 'this is the updateDeal route' });
  } catch (error) {
    console.log(error);
  }
}
export async function deleteDeal(req, res) {
  try {
    res.json({ message: 'this is the deleteDeal route' });
  } catch (error) {
    console.log(error);
  }
}
