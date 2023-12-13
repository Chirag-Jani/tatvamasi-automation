import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  maxWidth: "400px",
  height: "400px",
  margin: "0 auto",
};
const center = {
  lat: 21.36282069229223,
  lng: 72.9873768245914,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB8-p6pWVijPlnz9M5vVGAAF_XOwvpnKTc",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps...</div>;
  }

  return (
    <div style={mapContainerStyle}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        {/* Check if the marker is displayed on the console */}

        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;
