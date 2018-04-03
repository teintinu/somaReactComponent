import * as React from "react";


export interface CalculadoraProperty {
    type: string;
    elements: Array<string>;
}
export class Calculadora extends React.Component<CalculadoraProperty, {}> {
    
    render() {
        const self = this;
        if ((self.props.type == "soma")) {
            return (
                < div >
                    <h1>{self.props.type}</h1>
                </div >
            );
        }
    }
}