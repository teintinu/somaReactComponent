import * as React from 'react';

import { Input } from "./Input";
import { Calculadora } from "./Calculadora";
export class Soma extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Input 
                    name="inputA"
                    type="number"
                    placeholder="Digite o valor de A"
                />
                <Input 
                    name="inputB"
                    type="number"
                    placeholder="Digite o valor de B"
                />
                <Calculadora 
                    type="soma"
                    elements={[
                        "inputA",
                        "inputB"
                    ]}
                />
            </div>
        );
    }
}