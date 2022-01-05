import React, { useEffect, useState } from "react";
import axios from "axios";
import * as DataApi from "./DataApi";
import Geocode from "react-geocode";
import MyInput from "./MyInput";

const FormAppartmentAdd = ({ force }) => {
  Geocode.setApiKey(process.env.REACT_APP_GEOCODING_API_KEY);
  const [visible, setVisible] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);
  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");
  const [geoAdress, setGeoAdress] = useState();
  const [page, setPage] = useState(null);
  const [baseImg, setBaseImg] = useState("");

  const handleActive = () => {
    if (activeBtn) {
      return setActiveBtn(false);
    }
    return setActiveBtn(true);
  };

  const convertBase = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAdress("");
    setDescription("");
    // const data = new FormData();
    // data.append("page", page);
    const basePage = await convertBase(page);
    setBaseImg(basePage);
    DataApi.sendDataApi(adress, geoAdress, description);

    //   await axios.post(
    //     "http://localhost:8090/auth/postImg",
    //     data
    //     //  {  headers: { "content-type": "multipart/form-data" },  }
    //   );
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
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setVisible(true);
    }
  }, []);
  return (
    <div className={activeBtn ? "modal-regist activeBtn" : "modal-regist"}>
      <button
        className={visible ? "visible btnMenu" : "not-visible btnMenu"}
        onClick={handleActive}
      >
        ➕
      </button>

      <form className="border-white" onSubmit={handleSubmit}>
        <MyInput
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          placeholder="Город Улица №дома"
          type="text"
        />
        <img width="100" alt="" src={baseImg} />
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
