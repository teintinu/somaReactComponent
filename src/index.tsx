import * as React from "react";
import * as ReactDOM from "react-dom";
import { Soma } from "./components/Soma";
import { SomaTeste } from "./components/SomaTeste";

class Main extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div>
            <Soma/>
            </div>
        );
    }
}

const root = document.getElementById('example') as HTMLElement;

ReactDOM.render(<Main/>, root);