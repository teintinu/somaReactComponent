import * as React from "react";
import * as ReactDOM from "react-dom";
import { Soma } from "./components/Soma";

class Main extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <Soma/>
        );
    }
}

const root = document.getElementById('example') as HTMLElement;

ReactDOM.render(<Main/>, root);