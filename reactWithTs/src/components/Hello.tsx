import * as React from "react";
import { Component } from "react";
import { soma } from "@hoda5/somalib";

type stateType = {
    a: Number; 
    b: Number;
    resultado: Number;
}
export class Soma extends React.Component<{}, stateType> {
    constructor(props: stateType) {
      super(props);
        this.state = {
            a: null, 
            b: null, 
            resultado: null,
        };
        this.render();
    }

    public onChangeInput = () => 
        (e: React.ChangeEvent<HTMLInputElement>) => {
            let resultado = soma(1, 3)
            this.setState({resultado}); 
    };

    public render() {
        return (
            <div>
                a<input  id="a" onChange={this.onChangeInput()}/>
                b<input  id="b" onChange={this.onChangeInput()}/>
                resultado<a>{this.state.resultado}</a>
            </div>
        );
    }
}