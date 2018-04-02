import * as React from "react";

export interface HelloProps { }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.

export type HelloState = {
    valorA: number,
    valorB: number,
    resultadoSoma: number
}

export class Hello extends React.Component<HelloProps> {
    dados: HelloState = { valorA: null, valorB: null, resultadoSoma: 0 }
    constructor(props) {
        super(props);
        this.onKeyUpA = this.onKeyUpA.bind(this);
        this.onKeyUpB = this.onKeyUpB.bind(this);
    }
    render() {
        return <div>
            <input type="number" onKeyUp={this.onKeyUpA} placeholder="Digite o número a" />
            <input type="number" onKeyUp={this.onKeyUpB} placeholder="Digite o número b" />
            <h1> {this.dados.resultadoSoma} </h1>
        </div>;
    }

    onKeyUpA(e) {
        if (this.dados.valorA == e.target.value) return;
        this.dados.valorA = parseInt(e.target.value);
        this.calcular();
    }

    onKeyUpB(e) {
        if (this.dados.valorB == e.target.value) return;
        this.dados.valorB = parseInt(e.target.value);
        this.calcular();
    }

    calcular() {
        if (this.dados.valorA && this.dados.valorB) {
            this.dados.resultadoSoma = this.dados.valorA + this.dados.valorB;
        }
        else this.dados.resultadoSoma = 0;
        this.setState({});
    }
}

