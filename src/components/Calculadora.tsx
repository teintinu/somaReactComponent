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
    exibirResultado() {
        let result = 0;
        const elem = this.props.elements;
        return elem;
    }
    render() {
        const self = this;
        if ((self.props.type == "soma")) {
            return (
                <div>
                    <h1>{self.props.type}</h1>
                    <h1>{self.props.elements}</h1>
                    {/* {self.props.elements.forEach(e => 
                        <p> e </p>
                    )} */}
                    {self.exibirResultado()}
                </div >
            );
        }
    }
}