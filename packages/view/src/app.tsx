

import React from "react";
import ReactDOM from "react-dom";
import {App} from "core/src/app"


const ViewAPP = () => (
  <h1>Hello view <App></App></h1>
  
);

ReactDOM.render(
  <ViewAPP />,
  document.getElementById("view")
);

