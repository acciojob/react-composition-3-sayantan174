
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip text={["This is a tooltip","This is another tooltip"]} children={["Hover over me","Hover over me to see another tooltip"]}/>
    </div>
  )
}

export default App
