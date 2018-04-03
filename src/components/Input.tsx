import * as React from "react";

export interface InputProperty {
    name: string;
    value?: string;
    type: string;
    placeholder?: string;
    onChangeText: any;
}
export class Input extends React.Component<InputProperty, {}> {
    constructor(props: any) {
        super(props);
        this.hadleChange = this.hadleChange.bind(this);
    }
    hadleChange(event: any) {
        const self = this;
        this.props.onChangeText(event.target.value);
    }
    render() {
        const self = this;
        return (
            <div>
            <input
                type={self.props.type}
                value={self.props.value}
                placeholder={self.props.placeholder}
                onKeyUp={self.hadleChange}
            />
            </div>
        );
    }
}