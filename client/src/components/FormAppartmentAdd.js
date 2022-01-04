import React, { useEffect, useState } from "react";
import axios from "axios";
import * as DataApi from "./DataApi";
import Geocode from "react-geocode";
import MyInput from "./MyInput";

const FormAppartmentAdd = ({ force }) => {
  Geocode.setApiKey(process.env.REACT_APP_GEOCODING_API_KEY);

  const [activeBtn, setActiveBtn] = useState(false);
  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");
  const [geoAdress, setGeoAdress] = useState();
  const [page, setPage] = useState(null);

  const handleActive = () => {
    if (activeBtn) {
      return setActiveBtn(false);
    }
    return setActiveBtn(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAdress("");
    setDescription("");

    DataApi.sendDataApi(adress, geoAdress, description);
    const data = new FormData();
    data.append("page", page);
    await axios.post(
      "https://immense-reef-45036.herokuapp.com/auth/postImg",
      data,
      {
        headers: { "content-type": "multipart/form-data" },
      }
    );
    force();
  };

  useEffect(() => {
    if (adress.length) {
      Geocode.fromAddress(adress).then(
        (response) => {
          setGeoAdress(response.results[0].geometry.location);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [adress]);

  return (
    <div className={activeBtn ? "modal-regist activeBtn" : "modal-regist"}>
      <button className="btnMenu" onClick={handleActive}>
        ➕
      </button>
      <form className="border-white" onSubmit={handleSubmit}>
        <MyInput
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          placeholder="Город Улица №дома"
          type="text"
        />
        <MyInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="описание"
          type="text"
        />
        <MyInput
          placeholder="фото жилья"
          onChange={(e) => setPage(e.target.files[0])}
          type="file"
          multiple
        />
        <button className="btn btn-primary mt-2 " onClick={handleSubmit}>
          Добавить описание
        </button>
      </form>
    </div>
  );
};
export default FormAppartmentAdd;
