import * as React from 'react';
import * as ReactDom from 'react-dom';

import { soma } from "@hoda5/somalib";
class Calcula extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            a: 0,
            b: 0,
            r: 0
        };
        this.calcular = this.calcular.bind(this);
        this.valorA = this.valorA.bind(this);
        this.valorB = this.valorB.bind(this);
    }
    calcular() {
        const self = this
        const res = soma(self.state.a, self.state.b)
        this.setState({
            r: self.state.a+self.state.b
        })
    }
    valorA(event: any) {
        this.setState({
            a: parseInt(event.target.value)
        })
    }
    valorB(event: any) {
        this.setState({
            b: parseInt(event.target.value)
        })
    }
    render() {
        return (
            <div>
                <input
                    name="inputA"
                    value = {this.state.a}
                    type="number"
                    onChange={this.valorA}
                    placeholder="Digite o valor de A"
                    />
                <input
                    name="inputB"
                    value = {this.state.b}
                    type="number"
                    onChange={this.valorB}
                    placeholder="Digite o valor de B"
                />
                <button onClick={this.calcular}>Calcular</button>
                {this.state.r}
            </div>
        );
    }
}
const root = document.getElementById('root') as HTMLElement;

ReactDom.render(<Calcula />, root);