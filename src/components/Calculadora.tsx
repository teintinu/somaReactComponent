import * as React from "react";
import { soma } from '@hoda5/somalib';
export interface CalculadoraProperty {
    type: string;
    elements: Array<string>;
}
export class Calculadora extends React.Component<CalculadoraProperty, {}> {
    constructor(props: any) {
        super(props);
        this.exibirResultado = this.exibirResultado.bind(this);
    }
    exibirResultado(elem: Array<string>) {

        // elem=['1', '2', '3']
        // const [n1, n2] = elem destructuring n1='1', n2='2'
        // arr = [...elem]  == clone
        // const [n1, ...n2] = spread n1='1', n1=['2', '3']
        // const [n1, n2, n3, n4, ...n5] = spread n4=undefined n5=[]

        // const obj = {a: 1, b: 2}
        // const obj2 = {c: 4, b: 3}
        // const {b} = obj // destructuring   const b=obj.b
        // const clone = {...obj}
        // const clone2 = {...obj, a: 3}
        // const clone3 = {...obj, ...obj2} = {a: 1. b: 3, c:4}
        // console.log(clone3)

        const e = this.props.elements;
        let resultado = 0;
        // for (let i = 0; i < elem.length; i++) {
        //     resultado += parseInt(elem[i]);
        // }
        for (let n of elem) {
            resultado += parseInt(n);
        }
        return parseInt(elem[0]) + parseInt(elem[1]);
    }
    render() {
        const self = this;
        if ((self.props.type == "soma")) {
            return (
                <div>
                    <h1>{self.props.type}</h1>
                    <ul>{self.props.elements.map(e => <ItemComponente e={e} />)}</ul>
                    {/* {self.props.elements.forEach(e => 
                        <p> e </p>
                    )} */}
                    {self.exibirResultado(self.props.elements)}
                </div >
            );
        }
    }
}

function ItemComponente(props: { e: string }) {
    return <li>{props.e}</li>
};
