import React from "react";
import PropTypes from "prop-types";

export const ListInputs = ({ addItem, removeItem, selectedItem }) => {
  const createItem = () => {
    const item = {
      id: 10,
      name: "Roasted Turkey",
      category: "Deli",
      deliveryMethod: "Ground"
    };

    addItem(item);
  };

  return (
    <div>
      <button className="addItemButton" onClick={createItem}>
        Add Random Item
      </button>
      <button
        className="removeItemButton"
        onClick={() => removeItem(selectedItem)}
      >
        Remove Selected Item
      </button>
    </div>
  );
};

ListInputs.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default ListInputs;
