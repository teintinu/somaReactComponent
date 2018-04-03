import * as React from "react";
// import * as ReactDOM from "react-dom";
import * as somalib from "@hoda5/somalib";

export interface SomaProps {};

export interface SomaState {
  a: number,
  b: number,
  resultado: number,
};

export class Soma extends React.Component<SomaProps> {
  dados: SomaState = {a: null, b: null, resultado: 0};
  constructor(props: SomaProps) {
    super(props);
    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
  }

  handleChangeA(event: React.FormEvent<HTMLInputElement>) {
    this.dados.a = parseInt(event.currentTarget.value);
    this.calcular();
  }

  handleChangeB(event: React.FormEvent<HTMLInputElement>) {
    this.dados.b = parseInt(event.currentTarget.value);
    console.log("b: " + this.dados.b);
    this.calcular();
  }

  calcular() {
    debugger;
    if(this.dados.a && this.dados.b)
      this.dados.resultado = somalib.soma(this.dados.a, this.dados.b);
    else
      this.dados.resultado = 0;
    console.log("resultado: " + this.dados.resultado);
    this.setState({});
  }

  render(){
    return (
      <div>
        <input type="number" onChange={this.handleChangeA}/>
        <input type="number" onChange={this.handleChangeB}/>
        <div>
          {this.dados.resultado}
        </div>
      </div>
    );
  }
};