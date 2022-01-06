import React, { useEffect, useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import * as DataApi from "./DataApi";
import FormAppartmentAdd from "./FormAppartmentAdd";
import { HTTP_REQ } from "./constant";
import cube from "./page/cube.png";

export const MapContainer = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [center, setCenter] = useState({ lat: 50, lng: 36.25 });
  const [arrDataAp, setArrDataAp] = useState([]);
  const [arrayOneAppart, setArrayOneAppart] = useState([]);
  const [activeCard, setActiveCard] = useState(false);
  const forceDataRetrieval = () => {
    DataApi.retrievalDataApi().then((appartments) =>
      setArrDataAp(appartments.data)
    );
  };

  useEffect(() => {
    forceDataRetrieval();
  }, []);

  const onMarkerClick = (arr) => {
    setActiveCard(true);
    setArrayOneAppart(arr);
    setTimeout(() => {
      setActiveCard(false);
    }, 4000);
  };
  return (
    <div>
      <div
        className={activeCard ? "block-card card" : "block-card-disactive card"}
        style={{ width: "18rem" }}
      >
        {activeCard ? (
          <img
            width="100%"
            alt=""
            src={`${HTTP_REQ}${arrayOneAppart.nameImg}`}
          />
        ) : (
          <></>
        )}

        <div className="card-body">
          <p className="m-0">{arrayOneAppart.adress}</p>
          <p className="m-0">{arrayOneAppart.description}</p>
        </div>
      </div>
      <FormAppartmentAdd force={forceDataRetrieval} />
      <Map
        google={props.google}
        style={{ width: "100%", height: "100%", position: "relative" }}
        className="m-0 p-0"
        initialCenter={center}
        center={center}
      >
        {arrDataAp.map((arr) => (
          <Marker
            onClick={() => onMarkerClick(arr)}
            key={arr._id}
            position={arr.geoAdress}
            icon={cube}
          />
        ))}
        <Marker />
      </Map>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
