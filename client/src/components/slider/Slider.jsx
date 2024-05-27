import React, { useState } from "react";
import "./Slider.scss";
import arrowIcon from "../../assets/icons/arrow.png";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const prevImage = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    }
  };

  const nextImage = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1);
    }
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src={arrowIcon} alt="arrowIcon" onClick={prevImage} />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img
              src={arrowIcon}
              className="right"
              alt="arrowIcon"
              onClick={nextImage}
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            x
          </div>
        </div>
      )}

      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            key={index}
            alt=""
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
