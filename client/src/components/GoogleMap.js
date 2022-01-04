import React, { useEffect, useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import * as DataApi from "./DataApi";
import FormAppartmentAdd from "./FormAppartmentAdd";
import cube from "./page/cube.png";

export const MapContainer = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [center, setCenter] = useState({ lat: 50, lng: 36.25 });

  const [arrDataAp, setArrDataAp] = useState([]);

  const forceDataRetrieval = () => {
    DataApi.retrievalDataApi().then((appartments) =>
      setArrDataAp(appartments.data)
    );
  };

  useEffect(() => {
    forceDataRetrieval();
  }, []);
  return (
    <div>
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
            key={arr._id}
            name={"Dolores park"}
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
