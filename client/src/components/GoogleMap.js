import React, { useEffect, useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import * as DataApi from "./DataApi";
import FormAppartmentAdd from "./FormAppartmentAdd";
import BlockListApartmen from "./BlockListApartmen";
import { HTTP_REQ, HTTP_REQ_LOCAL } from "./constant";
import cube from "./page/cube.png";

export const MapContainer = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [center, setCenter] = useState({ lat: 50, lng: 36.25 });
  const [arrDataAp, setArrDataAp] = useState([]);
  const [arrayOneAppart, setArrayOneAppart] = useState([]);
  const [activeCard, setActiveCard] = useState(false);

  // const [activeMarker, setActiveMarker] = useState({});
  // const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  // const [selectedPlace, setSelectedPlace] = useState({});

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
  // const scrollMarkerClick = (props, marker, e) => {
  //   setSelectedPlace(props);
  //   setActiveMarker(marker);
  //   setShowingInfoWindow(true);
  // };

  // const onMapClicked = (props) => {
  //   if (showingInfoWindow) {
  //     setShowingInfoWindow(false);
  //     setActiveMarker(null);
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener("wheel", scrollMarkerClick);
  //   return function () {
  //     document.removeEventListener("wheel", scrollMarkerClick);
  //   };
  // }, []);
  // console.log(window.document.body.children);
  // let elem = document.querySelector("div[role='button']");
  // let rect = elem.getBoundingClientRect();
  // console.log(elem);

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
            src={`${HTTP_REQ_LOCAL}${arrayOneAppart.nameImg}`}
          />
        ) : (
          <></>
        )}

        <div className="card-body">
          <p className="m-0">{arrayOneAppart.adress}</p>
          <p className="m-0">{arrayOneAppart.description}</p>
        </div>
      </div>

      <Map
        google={props.google}
        style={{ width: "100%", height: "100%", position: "relative" }}
        initialCenter={center}
        center={center}
        zoom={15}
      >
        {arrDataAp.map((arr) => {
          return (
            <Marker
              onClick={() => onMarkerClick(arr)}
              name={arr._id}
              key={arr._id}
              position={arr.geoAdress}
              icon={cube}
            />
          );
        })}
      </Map>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
