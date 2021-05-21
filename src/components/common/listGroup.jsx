import React from "react";

const ListGroup = (props) => {
  const { items, selectedItem, onItemSelected, textProperty, valueProperty } =
    props;
  return (
    <ul className="list-group" style={{ marginTop: "20px" }}>
      {items.map((item) => {
        return (
          <li
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelected(item)}
            style={{ cursor: "pointer" }}
          >
            {item[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
