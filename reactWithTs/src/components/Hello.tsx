import * as React from "react";
import { Component } from "react";
import { soma } from "@hoda5/somalib";

type stateType = {
    a: Number; 
    b: Number;
    resultado: Number;
}
export class Soma extends Component {
    constructor(props: stateType) {
      super(props);
        this.state = {
            a: 0, 
            b: 0, 
            resultado: 0,
        };
        this.render();
    }

    public onChangeInput = () => 
        (e: React.ChangeEvent<HTMLInputElement>) => {
            let res = soma(1, 3)
            alert(res)
    };

    public state: {
        a: Number; 
        b: Number;
        resultado: Number; 
    }

    public render() {
        return (
            <div>
                a<input  id="a" onChange={this.onChangeInput()}>{this.state.a}</input>
                b<input  id="b" onChange={this.onChangeInput()}>{this.state.b}</input>
                resultado<a>{this.state.resultado}</a>
            </div>
        );
    }
}