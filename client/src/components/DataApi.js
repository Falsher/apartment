import axios from "axios";

export const RegistrationUser = async (name, password) => {
  const response = await axios.post("http://localhost:8090/auth/registr", {
    name,
    password,
  });
  const token = response.data.token;

  localStorage.setItem("token", token);
};
export const sendDataApi = async (adress, geoAdress, description, imgName) => {
  return await axios.post("http://localhost:8090/auth/signup", {
    adress,
    geoAdress,
    description,
    imgName,
  });
};
export const retrievalDataApi = async () => {
  return axios.get("http://localhost:8090/auth/getApartment");
};
