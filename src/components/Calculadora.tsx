import * as React from "react";
import { soma } from '@hoda5/somalib';
export interface CalculadoraProperty {
    type: string;
    elements: Array<string>;
}
export class Calculadora extends React.Component<CalculadoraProperty, {}> {
    exibirResultado() {

        return 1;
    }
    render() {
        const self = this;
        if ((self.props.type == "soma")) {
            return (
                < div >
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