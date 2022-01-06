import axios from "axios";
import { HTTP_REQ } from "./constant";

export const sendDataApi = async (
  adress,
  geoAdress,
  description,
  basePage,
  nameImg
) => {
  return await axios.post(`${HTTP_REQ}auth/signup`, {
    adress,
    geoAdress,
    description,
    basePage,
    nameImg,
  });
};
export const retrievalDataApi = async () => {
  return axios.get(`${HTTP_REQ}auth/getApartment`);
};
