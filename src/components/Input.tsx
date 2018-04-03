import * as React from "react";

export interface InputProperty {
    name: string;
    value?: string;
    type: string;
    placeholder?: string;
}
export class Input extends React.Component<InputProperty, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            test: this.props.value,
        };
    }
    hadleChange(event: any) {
        this.setState({
            value: event.target.value
        });
    }
    render() {
        const self = this;
        return (
            <div>
            <input
                type={self.props.type}
                value={self.props.value}
                placeholder={self.props.placeholder}
                onChange={self.hadleChange}
            />
            </div>
        );
    }
}