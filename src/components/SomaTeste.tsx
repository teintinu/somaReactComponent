import * as React from 'react';

import { Input } from "./Input";
import { Calculadora } from "./Calculadora";
export class SomaTeste extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            a: '', b: ''
        }
    }
    render() {
        return (
            <div>
                <Input 
                    name="inputA"
                    type="number"
                    onChangeText={(text: string) => {this.setState({a: text})}}
                    placeholder="Digite o valor de A"
                />
                <Input 
                    name="inputB"
                    type="number"
                    onChangeText={(text: string) => {this.setState({b:  text})}}
                    placeholder="Digite o valor de B"
                />
                <Calculadora 
                    type="soma"
                    elements={[
                        this.state.a,
                        this.state.b,
                    ]}
                />
            </div>
        );
    }
}