import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
import PinIcon from "../../assets/icons/pin.png";
import BedIcon from "../../assets/icons/bed.png";
import BathIcon from "../../assets/icons/bath.png";
import SaveIcon from "../../assets/icons/save.png";
import ChatIcon from "../../assets/icons/chat.png";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src={PinIcon} alt="pin" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price} </p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src={BedIcon} />
              <span>
                {item.bedroom} {item.bedroom > 1 ? "Bedrooms" : "Bedroom"}
              </span>
            </div>
            <div className="feature">
              <img src={BathIcon} />
              <span>
                {item.bathroom} {item.bathroom > 1 ? "Bathrooms" : "Bathroom"}
              </span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <tooltip title="Save">
                <img src={SaveIcon} />
              </tooltip>
            </div>
            <div className="icon">
              <tooltip title="chat">
                <img src={ChatIcon} />
              </tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
