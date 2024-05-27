import "./List.scss";
import React from "react";
import { apartments } from "../../data";
import Card from "../card/Card";

function List() {
  return (
    <div className="list">
      {apartments.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
