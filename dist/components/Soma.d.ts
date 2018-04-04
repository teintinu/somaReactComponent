/// <reference types="react" />
import * as React from 'react';
export declare class Soma extends React.Component<any, {
    inputA: number;
    inputB: number;
    resultado?: number;
}> {
    constructor(props: any);
    handleChangeA(event: any): void;
    handleChangeB(event: any): void;
    result(): void;
    render(): JSX.Element;
}
