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
  }
];

const selectRow = selectItem => ({
  mode: "radio",
  clickToSelect: true,
  onSelect: (row, isSelect, rowIndex, e) => {
    selectItem(row);
    // console.log(row);
  }
});

export const ListTable = ({ groceryList, selectItem }) => (
  <div className="listTable">
    <BootstrapTable
      keyField="id"
      data={groceryList}
      columns={columns}
      selectRow={selectRow(selectItem)}
    />
  </div>
);

export default ListTable;
