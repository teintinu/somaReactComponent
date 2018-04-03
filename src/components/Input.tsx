import * as React from "react";

export interface InputProperty {
    name: string;
    value?: string;
    type: string;
    placeholder?: string;
}
export class Input extends React.Component<{}> {
    // constructor(props: any) {
    //     super(props);
    //     this.state = {
    //         value: 'props.value',
    //         text: ''
    //     };
    // }
    // hadleChange(event: any) {
    //     this.setState({
    //         value: event.target.value
    //     });
    // }
    render() {
        return (
            <div>
            <p> teste </p>
            {/* <input
                type={this.props.type}
                value={this.props.value}
                placeholder={this.props.placeholder}
                // onChange={this.hadleChange}
            /> */}
            </div>
        );
    }
}