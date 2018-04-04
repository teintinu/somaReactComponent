import * as React from "react";
// import * as ReactDOM from "react-dom";
import * as somalib from "@hoda5/somalib";

export interface SomaProps {};

export interface SomaState {
  a: number,
  b: number,
  resultado: number,
};

// type status_agenda = 'agendado' | 'confirmado' | 'cadastrado' | 'atendimento' 

// function confirmaagendamento(id: number, novo_status: status_agenda): status_agenda {
//   const status: string = novo_status;
//   return status as status_agenda;
// }

export class Soma extends React.Component<SomaProps> {
  dados: SomaState = {a: null, b: null, resultado: 0};
  constructor(props: SomaProps) {
    super(props);
    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
  }

  handleChangeA(event: React.FormEvent<HTMLInputElement>) {
    const value = parseInt(event.currentTarget.value);
    if(this.dados.a == value) return;
    else
      this.dados.a = value;
    this.calcular();
  }

  handleChangeB(event: React.FormEvent<HTMLInputElement>) {
    const value = parseInt(event.currentTarget.value);
    if(this.dados.b == value) return;
    else
      this.dados.b = value;
    this.calcular();
  }

  calcular() {
    debugger;
    let resultadoSoma;
    if(this.dados.a > 0 && this.dados.b > 0) {
      resultadoSoma = somalib.soma(this.dados.a, this.dados.b);
    }
    else {
      resultadoSoma = 0;
    }
    this.dados.resultado = resultadoSoma;
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