import * as React from "react";

export interface Soma { 
    a: number; 
    b: number;
    resultado: number; 
}

const onChangeInput = () => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name, e.target.value);
  };

export const Soma = 
    (props: Soma) => 
    <div>
        a<input type="number" id="a" onChange={onChangeInput()}> </input>
        b<input type="number" id="b" onChange={onChangeInput()}> </input>
        <a type="number">{props.resultado}</a>
    </div>;