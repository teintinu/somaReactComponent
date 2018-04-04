/// <reference types="react" />
import * as React from "react";
export interface CalculadoraProperty {
    type: string;
    elements: Array<string>;
}
export declare class Calculadora extends React.Component<CalculadoraProperty, {}> {
    constructor(props: any);
    exibirResultado(): any;
    render(): JSX.Element | undefined;
}
