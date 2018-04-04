import * as React from "react";
import { soma } from '@hoda5/somalib';
export interface CalculadoraProperty {
    type: string;
    elements: Array<string>;
}
export class Calculadora extends React.Component<CalculadoraProperty, {}> {
    constructor(props: any) {
        super(props);
        this.exibirResultado = this.exibirResultado.bind(this);
    }
    exibirResultado(elem: Array<string>) {
        const e = this.props.elements;
        return parseInt(elem[0]) + parseInt(elem[1]);
    }
    render() {
        const self = this;
        if ((self.props.type == "soma")) {
            return (
                <div>
                    <h1>{self.props.type}</h1>
                    <ul>{self.props.elements.map((e) =><ItemComponente e={e}/>)}</ul>
                    {/* {self.props.elements.forEach(e => 
                        <p> e </p>
                    )} */}
                    {self.exibirResultado(self.props.elements)}
                </div >
            );
        }
    }
}

function ItemComponente(props: {e: string}) { 
    return <li>{props.e}</li> 
};
