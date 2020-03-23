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
    {groceryList.forEach((item, index) => {
      item.rowId = index + 1;
    })}
    ;
    <BootstrapTable
      keyField="rowId"
      data={groceryList}
      columns={columns}
      selectRow={selectRow(selectItem)}
    />
  </div>
);

export default ListTable;
