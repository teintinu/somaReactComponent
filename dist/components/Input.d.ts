/// <reference types="react" />
import * as React from "react";
export interface InputProperty {
    name: string;
    value?: string;
    type: string;
    placeholder?: string;
}
export declare class Input extends React.Component<{}> {
    render(): JSX.Element;
}
