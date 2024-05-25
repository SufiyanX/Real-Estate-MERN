import React from "react";
import "./SinglePage.scss";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../data";
import PinIcon from "../../assets/icons/pin.png";

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.img} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src={PinIcon} />
                  <span>{singlePostData.address} </span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src="https://th.bing.com/th/id/OIP.XVoQB7M2RRUF5W10lPK2tAHaHa?w=570&h=570&rs=1&pid=ImgDetMain" />
                <span>{userData.name} </span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default SinglePage;
