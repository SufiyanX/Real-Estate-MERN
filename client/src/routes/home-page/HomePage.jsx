import React from "react";
import "./HomePage.scss";
import bgImg from "../../assets/icons/bg.png";
import SearchBar from "../../components/searchbar/SearchBar";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place...</h1>
          <p>
            Discover your dream home with SufiEstate. Browse stunning
            properties, get expert advice, and find your perfect match in the
            world of real estate. Your journey to a new home starts here.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src={bgImg} />
      </div>
    </div>
  );
}

export default HomePage;
