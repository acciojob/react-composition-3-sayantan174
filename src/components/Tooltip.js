import React, { useState } from "react";

const Tooltip = (props) => {
  const [f1, setF1] = useState(false);
  const [f2, setF2] = useState(false);
  return (
    <>
      {f1 && <h2 style={{position:"absolute"}} className="tooltiptext"><div>{props.text[0]}</div></h2>}
      <h1
        onMouseOver={() => {
          setF1(true);
        }}
        onMouseOut={() => {
          setF1(false);
        }}
        className="tooltip"
      >
        {props.children[0]}
      </h1>
      {f2 && <p style={{position:"absolute"}} className="tooltiptext"><div>{props.text[1]}</div></p>}
      <h2
        onMouseOver={() => {
          setF2(true);
        }}
        onMouseOut={() => {
          setF2(false);
        }}
        className="tooltip"
      >
        {props.children[1]}
      </h2>
    </>
  );
};

export default Tooltip;
