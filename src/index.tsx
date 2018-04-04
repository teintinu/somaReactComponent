import * as React from 'react';
import { render } from 'react-dom';
import { soma } from "@hoda5/somalib";

class Calcula extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            v1: 0,
            v2: 0,
            res: 0
        };
        this.calc = this.calc.bind(this);
        this.value1 = this.value1.bind(this);
        this.value2 = this.value2.bind(this);
    }
    calc() {
        const self = this;
        if (self.state.v1 <= 0 || self.state.v2 <= 0)
            return this.setState({ r: 0 });
        const res = soma(self.state.v1, self.state.v2);
        this.setState({ r: res });
    }
    value1(event: any) {
        this.setState({
            v1: parseInt(event.target.value)
        })
    }
    value2(event: any) {
        this.setState({
            v2: parseInt(event.target.value)
        })
    }
    render() {
        return (
            <div>
                <label>ReactApp SOMA</label>
                <br />
                <input name="input1" value={this.state.v1} type="number" onChange={this.value1} />
                <input name="input2" value={this.state.v2} type="number" onChange={this.value2} />
                <button onClick={this.calc}>Calcular</button>
                <br />
                Resultado: {this.state.res}
            </div>
        );
    }
}
const App = document.getElementById('app') as HTMLElement;

render(<Calcula />, App);