import * as React from "react";

export interface InputProperty {
    name: string;
    value?: string;
    type: string;
    placeholder?: string;
    onChangeText: any;
}
export class Input extends React.Component<InputProperty, {}> {
    constructor(props: InputProperty) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event: any) {
        const self = this;
        self.props.onChangeText(event.target.value);
    }
    render() {
        const self = this;
        return (
            <div>
            <input
                type={self.props.type}
                value={self.props.value}
                placeholder={self.props.placeholder}
                onKeyUp={self.handleChange}
            />
            </div>
        );
    }
}