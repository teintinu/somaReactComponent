/// <reference types="react" />
import * as React from "react";
export interface HelloProps {
}
export declare type HelloState = {
    valorA: number;
    valorB: number;
    resultadoSoma: number;
};
export declare class Hello extends React.Component<HelloProps> {
    dados: HelloState;
    constructor(props: any);
    render(): JSX.Element;
    onKeyUpA(e: any): void;
    onKeyUpB(e: any): void;
    calcular(): void;
}
