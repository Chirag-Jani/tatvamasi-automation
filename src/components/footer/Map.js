import React from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import mapImg from "../../resources/google-maps_355980.svg";

// const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  maxWidth: "400px",
  height: "auto",
  margin: "20px auto",
};
// const center = {
//   lat: 21.36282069229223,
//   lng: 72.9873768245914,
// };

const Map = () => {
  //   const { isLoaded, loadError } = useLoadScript({
  //     googleMapsApiKey: "AIzaSyB8-p6pWVijPlnz9M5vVGAAF_XOwvpnKTc",
  //     libraries,
  //   });

  //   if (loadError) {
  //     return <div>Error loading maps: {loadError.message}</div>;
  //   }

  //   if (!isLoaded) {
  //     return <div>Loading maps...</div>;
  //   }

  return (
    <div style={mapContainerStyle}>
      {/* <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >

        <Marker position={center} />
      </GoogleMap> */}
      {/* https://maps.app.goo.gl/zkW2FqhVQLWQ8jXNA */}
      <a href="https://maps.app.goo.gl/zkW2FqhVQLWQ8jXNA" target="_blank">
        <img src={mapImg} alt="Map img here" />
      </a>
      "Click here to get Location"
    </div>
  );
};

export default Map;
