import React from "react";

const ListSelection = ({
  selectedItem: { category, deliveryMethod, id, name }
}) => (
  <div className="listSelection">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Category</th>
      <th>Delivery Method</th>
    </tr>
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{deliveryMethod}</td>
    </tr>
  </div>
);

export default ListSelection;
