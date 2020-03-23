import React from "react";

const ListSelection = ({
  selectedItem: { category, deliveryMethod, id, name }
}) => (
  <div className="listSelection">
    {category}
    {deliveryMethod}
    {id}
    {name}
  </div>
);

export default ListSelection;
