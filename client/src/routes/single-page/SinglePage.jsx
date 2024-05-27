import React from "react";
import "./SinglePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../data";
import PinIcon from "../../assets/icons/pin.png";
import ChatIcon from "../../assets/icons/chat.png";
import SaveIcon from "../../assets/icons/save.png";
import UtilityIcon from "../../assets/icons/utility.png";
import PetIcon from "../../assets/icons/pet.png";
import FeeIcon from "../../assets/icons/fee.png";
import SizeIcon from "../../assets/icons/size.png";
import BedIcon from "../../assets/icons/bed.png";
import BathIcon from "../../assets/icons/bath.png";
import SchoolIcon from "../../assets/icons/school.png";
import BusIcon from "../../assets/icons/bus.png";
import RestaurantIcon from "../../assets/icons/restaurant.png";

console.log(singlePostData);
function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData[0].img} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData[0].title}</h1>
                <div className="address">
                  <img src={PinIcon} />
                  <span>{singlePostData[0].address} </span>
                </div>
                <div className="price">$ {singlePostData[0].price}</div>
              </div>
              <div className="user">
                <img src="https://th.bing.com/th/id/OIP.XVoQB7M2RRUF5W10lPK2tAHaHa?w=570&h=570&rs=1&pid=ImgDetMain" />
                <span>{userData.name} </span>
              </div>
            </div>
            <div className="bottom">{singlePostData[0].description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src={UtilityIcon} alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src={PetIcon} alt="" />
              <div className="featureText">
                <span>Pet Policies</span>
                <p>Pets allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src={FeeIcon} alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="listHorizontal">
            <div className="size">
              <img src={SizeIcon} alt="" />
              <span>80 Sqft</span>
            </div>
            <div className="size">
              <img src={BedIcon} alt="" />
              <span>2 Bedrooms</span>
            </div>
            <div className="size">
              <img src={BathIcon} alt="" />
              <span>1 Bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src={SchoolIcon} alt="" />
              <div className="featureText">
                <span>School</span>
                <p>200m</p>
              </div>
            </div>
            <div className="feature">
              <img src={BusIcon} alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>200m</p>
              </div>
            </div>
            <div className="feature">
              <img src={RestaurantIcon} alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={singlePostData} />
          </div>
          <div className="buttons">
            <button>
              <img src={ChatIcon} alt="" />
              Send a message
            </button>
            <button>
              <img src={SaveIcon} alt="" />
              Save the place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
