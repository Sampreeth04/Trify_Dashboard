import React from "react";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import { Marker, Popup } from "react-leaflet";

const MarkerComponent = (props) => {
  return (
    <Marker position={[props.latitude, props.longitude]}>
      <Popup>
        Timestamp: {props.timestamp} <br /> Battery Percentage:{" "}
        {props.batteryPercentage}
      </Popup>
    </Marker>
  );
};

export default MarkerComponent;
