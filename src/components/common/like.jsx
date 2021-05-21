import React from "react";

const Like = (props) => {
  return (
    <i
      className={props.liked ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden="true"
      style={{ cursor: "pointer", color: "red" }}
      onClick={props.onClick}
    ></i>
  );
};

export default Like;
