import React from "react";
import "./ListPage.scss";
import { apartments } from "../../data";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";

function ListPage() {
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {apartments.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map />
      </div>
    </div>
  );
}

export default ListPage;
