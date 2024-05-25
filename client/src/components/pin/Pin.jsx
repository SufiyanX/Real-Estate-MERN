import React from "react";
import "./Pin.scss";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img[0]} />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span className="bed">
              {item.bedroom} {item.bedroom > 1 ? "Bedrooms" : "Bedroom"}
            </span>
            <b>$ {item.price} </b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
