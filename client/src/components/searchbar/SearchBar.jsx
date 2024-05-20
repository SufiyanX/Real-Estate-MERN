import React from "react";
import "./SearchBar.scss";
import SearchIcon from "../../assets/icons/search.png";

function SearchBar() {
  return (
    <div className="searchBar">
      <div className="type">
        <button>Buy</button>
        <button>Rent</button>
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Minimum Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Maximum Price"
        />
        <button>
          <img src={SearchIcon} alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
