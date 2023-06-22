import React, { useState } from "react";

const Tooltip = (props) => {
  const [f1, setF1] = useState(false);
  const [f2, setF2] = useState(false);
  return (
    <>
      {f1 && <h2 className="tooltiptext"><div>{props.text[0]}</div></h2>}
      <h2
        onMouseOver={() => {
          setF1(true);
        }}
        onMouseOut={() => {
          setF1(false);
        }}
        className="tooltip"
      >
        <div><div>{props.text[0]}</div></div>
      </h2>
      {f2 && <p className="tooltiptext"><div>{props.text[1]}</div></p>}
      <p
        onMouseOver={() => {
          setF2(true);
        }}
        onMouseOut={() => {
          setF2(false);
        }}
        className="tooltip"
      ><div>{props.children[1]}</div>
        
      </p>
    </>
  );
};

export default Tooltip;
