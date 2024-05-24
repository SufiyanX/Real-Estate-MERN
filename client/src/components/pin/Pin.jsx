import React from "react";
import "./Pin.scss";
import { Marker, Popup } from "react-leaflet";

const position = [51.505, -0.09];

function Pin() {
  return (
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily bkjbduiboufbusebf.
      </Popup>
    </Marker>
  );
}

export default Pin;
