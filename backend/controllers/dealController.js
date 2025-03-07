import Deal from '../models/dealModel.js';

export async function getDeals(req, res) {
  try {
    //return all documents ie deals
    const deals = await Deal.find({});
    //on response 200, send deals
    res.status(200).json(deals);
  } catch (error) {
    console.log(error);
  }
}
export async function getDeal(req, res) {
  //URL parameters
  const { id } = req.params;
  try {
    //return a single deal
    const deal = await Deal.findById(id);
    res.status(200).json(deal);
  } catch (error) {
    console.log(error);
  }
}
export async function addDeal(req, res) {
  const {
    agent,
    address,
    propertyType,
    livingArea,
    lot,
    yearBuilt,
    escrow,
    closing,
    price,
    description,
    photo,
  } = req.body;

  try {
    const deal = await Deal.create({
      agent,
      address,
      propertyType,
      livingArea,
      lot,
      yearBuilt,
      escrow,
      closing,
      price,
      description,
      photo,
    });
    res.status(200).json(deal);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
}
export async function updateDeal(req, res) {
  const { id } = req.params;
  const {
    agent,
    address,
    propertyType,
    livingArea,
    lot,
    yearBuilt,
    escrow,
    closing,
    price,
    description,
    photo,
  } = req.body;
  try {
    // lets update a deal by the given id in the URL params
    const deal = await Deal.findByIdAndUpdate(id, req.body);
    res.status(200).json(`deal with id ${id} was edited`);
  } catch (error) {
    console.log(error);
  }
}

export async function updateSoldStatus(req, res) {
  const { id } = req.params;
  try {
    // we have sold boolean & the id of the incoming deal, just need to toggle it true
    console.log(id, req.body.isSold);
    await Deal.findByIdAndUpdate(id, req.body);
    res.status(200).json('succesfully set deal sold');
  } catch (error) {
    console.error(error);
  }
}
export async function deleteDeal(req, res) {
  const { id } = req.params;
  try {
    // lets delete a deal by id
    const deal = await Deal.findByIdAndDelete(id);
    res.status(200).json(`deal with id ${id} was deleted`);
  } catch (error) {
    console.log(error);
  }
}
