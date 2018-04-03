import * as React from 'react';
import { soma } from '@hoda5/somalib';

// import { Input } from "./Input";
import { Calculadora } from "./Calculadora";
export class Soma extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            inputA: 0,
            inputB: 0,
        }
        this.handleChangeA = this.handleChangeA.bind(this);
        this.handleChangeB = this.handleChangeB.bind(this);
        this.result = this.result.bind(this);
    }
    handleChangeA(event: any) {
        const value = parseFloat(event.target.value);
        if (this.state.inputA != value) {
            this.setState({
                inputA: value
            });
        }
    }
    handleChangeB(event: any) {
        const value = parseFloat(event.target.value);
        if (this.state.inputB != value) {
            this.setState({
                inputB: value
            });
        }
    }
    result() {
        if (this.state.inputA > 0 && this.state.inputB > 0) {
            const result = soma(this.state.inputA, this.state.inputb);
            this.setState({
                resultado: result
            });
        }
    }
    render() {
        const self = this;
        return (
            <div>
                <input
                    name="inputA"
                    type="number"
                    value={self.state.inputA}
                    placeholder="Digite o valor de A"
                    onChange={self.handleChangeA}
                />
                <input
                    name="inputB"
                    type="number"
                    value={self.state.inputB}
                    onChange={self.handleChangeB}
                    placeholder="Digite o valor de B"
                />
                <br />
                <button onClick={this.result}>Calcular</button>
                {self.state.resultado}
            </div>
        );
    }
}