import * as React from "react";
import * as ReactDOM from "react-dom";

import { Input } from "./components/Input";
import { Teste } from "./components/Teste";

// <Input 
//     // name="teste"
//     // type="number"
//     // value="0"
//     // placeholder="Digite um numero aqui"
// />
// ReactDOM.render(
//     <Teste />,
//     document.getElementById('example') as HTMLElement
// );

class Main extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <p> teste </p>
        );
    }
}

const root = document.getElementById('example') as HTMLElement;

ReactDOM.render(<Main/>, root);