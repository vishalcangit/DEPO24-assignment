import React from "react";

const ItemList = (items) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => {
        <p>{item.name}</p>;
      })}
    </div>
  );
};

export default ItemList;
