import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

const columns = [
  {
    dataField: "id",
    text: "Product ID"
  },
  {
    dataField: "name",
    text: "Product Name"
  },
  {
    dataField: "price",
    text: "Product Price"
  }
];
const products = [
  { id: 1, name: "item name 0", price: 2100 },
  { id: 2, name: "item name 1", price: 2100 },
  { id: 3, name: "item name 2", price: 2100 }
];
const selectRow = {
  mode: "radio",
  clickToSelect: true
};

export const ListTable = () => (
  <div className="listTable">
    <BootstrapTable
      keyField="id"
      data={products}
      columns={columns}
      selectRow={selectRow}
    />
  </div>
);

export default ListTable;
