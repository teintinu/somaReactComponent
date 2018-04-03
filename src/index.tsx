import * as React from "react";
import * as ReactDOM from "react-dom";

// import { Hello } from "./components/Hello";
import { Soma } from "./components/soma";

ReactDOM.render(
    // <Hello compiler="TypeScript" framework="React" />,
    <Soma />,
    document.getElementById("example")
);