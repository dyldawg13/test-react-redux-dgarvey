import React from "react";

const ListTable = ({ groceryList, selectItem, deSelectItem, removeItem }) => {
  const handleSelectItem = groceryListItem => {
    selectItem(groceryListItem);
  };

  const handleDeSelectItem = index => {
    deSelectItem(index);
  };

  const handleRemoveItem = index => {
    removeItem(index);
  };

  const tableData = groceryList.map((groceryListItem, index) => {
    const { name, category, deliveryMethod } = groceryListItem;
    return (
      <tr key={index}>
        <td>{name}</td>
        <td>{category}</td>
        <td>{deliveryMethod}</td>
        <td>
          <button onClick={() => handleSelectItem(groceryListItem)}>
            Select
          </button>
          <button onClick={() => handleDeSelectItem(index)}>Deselect</button>
          <button onClick={() => handleRemoveItem(index)}>Remove</button>
        </td>
      </tr>
    );
  });

  const tableHeader = (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Delivery</th>
        </tr>
      </thead>
    </table>
  );

  return (
    <div className="listTable">
      {tableHeader}
      {tableData}
    </div>
  );
};

export default ListTable;
