import axios from "axios";

export const sendDataApi = async (adress, geoAdress, description, data) => {
  return await axios.post("http://localhost:8090/auth/signup", {
    adress,
    geoAdress,
    description,
    data,
  });
};
export const retrievalDataApi = async () => {
  return axios.get("http://localhost:8090/auth/getApartment");
};
