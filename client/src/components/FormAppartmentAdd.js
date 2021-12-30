import React, { useEffect, useState } from "react";
import * as DataApi from "./DataApi";
import Geocode from "react-geocode";
import MyInput from "./MyInput";
const FormAppartmentAdd = () => {
  Geocode.setApiKey(process.env.REACT_APP_GEOCODING_API_KEY);

  const [description, setDescription] = useState("");

  const [adress, setAdress] = useState("");

  const [activeBtn, setActiveBtn] = useState(false);

  const [geoAdress, setGeoAdress] = useState();
  const HandleProps = () => {
    if (activeBtn) {
      return setActiveBtn(false);
    }
    return setActiveBtn(true);
  };

  const handleSubmit = () => {
    DataApi.sendDataApi(adress, geoAdress, description);
    setAdress("");
    setDescription("");
  };
  useEffect(() => {
    Geocode.fromAddress(adress).then(
      (response) => {
        setGeoAdress(response.results[0].geometry.location);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [adress]);

  return (
    <div className={activeBtn ? "modal-regist activeBtn" : "modal-regist"}>
      <button className="btnMenu" onClick={HandleProps}>
        ➕
      </button>
      <form className="border-white">
        <MyInput
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          placeholder="Страна"
          type="text"
        />
        <MyInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="описание"
          type="text"
        />
        <MyInput placeholder="фото жилья" type="file" />
        <button className="btn btn-primary mt-2 " onClick={handleSubmit}>
          Добавить
        </button>
      </form>
    </div>
  );
};
export default FormAppartmentAdd;
