import React, { useEffect, useState } from "react";

import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerClusterer,
} from "@react-google-maps/api";

import * as DataApi from "./DataApi";
import FormAppartmentAdd from "./FormAppartmentAdd";
import BlockListApartmen from "./BlockListApartmen";
import { HTTP_REQ, HTTP_REQ_LOCAL } from "./constant";

const center = { lat: 50, lng: 36.25 };

const MyComponents = () => {
  const [arrDataAp, setArrDataAp] = useState([]);
  const [arrayOneAppart, setArrayOneAppart] = useState([]);
  const [activeCard, setActiveCard] = useState(false);

  const forceDataRetrieval = () => {
    DataApi.retrievalDataApi().then((appartments) =>
      setArrDataAp(appartments.data)
    );
  };
  // if(){}
  useEffect(() => {
    forceDataRetrieval();
  }, []);

  const onMarkerClick = (arr) => {
    setArrayOneAppart(arr);
    setActiveCard(true);
    setTimeout(() => {
      setActiveCard(false);
    }, 4000);
  };

  function createKey(location) {
    return location.lat + location.lng;
  }
  const mapContainerStyle = {
    width: "100%",
    height: window.innerHeight,
  };

  const locations = arrDataAp.map((arr) => arr);

  const cluster = (b) => {
    console.log(b.markers.map((a) => a.isAdded));
  };
  return (
    <div>
      <FormAppartmentAdd force={forceDataRetrieval} />
      <BlockListApartmen />
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

      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <GoogleMap
          id="marker-example"
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={center}
        >
          <MarkerClusterer
            onClusteringBegin={(markerClaster) => cluster(markerClaster)}
          >
            {(clusterer) =>
              locations.map((location) => {
                return (
                  <Marker
                    onClick={() => onMarkerClick(location)}
                    key={createKey(location.geoAdress)}
                    position={location.geoAdress}
                    clusterer={clusterer}
                  />
                );
              })
            }
          </MarkerClusterer>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default MyComponents;
