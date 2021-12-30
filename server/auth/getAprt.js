const apartmentModel = require("../model/apartment");
const getApartment = async (req, res) => {
  try {
    const apartment = await apartmentModel.find(
      {},
      " adress geoAdress description"
    );

    return res.json(apartment);
  } catch (error) {
    console.error(err.message);
  }
};
module.exports = getApartment;
