/// <reference types="react" />
import * as React from "react";
export interface InputProperty {
    name: string;
    value?: string;
    type: string;
    placeholder?: string;
    onChangeText: any;
}
export declare class Input extends React.Component<InputProperty, {}> {
    constructor(props: InputProperty);
    handleChange(event: any): void;
    render(): JSX.Element;
}
