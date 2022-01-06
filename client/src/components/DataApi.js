import axios from "axios";

export const sendDataApi = async (
  adress,
  geoAdress,
  description,
  basePage,
  nameImg
) => {
  return await axios.post("http://localhost:8090/auth/signup", {
    adress,
    geoAdress,
    description,
    basePage,
    nameImg,
  });
};
export const retrievalDataApi = async () => {
  return axios.get("http://localhost:8090/auth/getApartment");
};
