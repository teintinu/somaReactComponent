import * as React from 'react';
import { render } from 'react-dom';
import { soma } from "@hoda5/somalib";

class Calcula extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            a: 0,
            b: 0,
            r: 0
        };
        this.calcular = this.calcular.bind(this);
        this.value1 = this.value1.bind(this);
        this.value2 = this.value2.bind(this);
    }
    calcular() {
        const self = this
        const res = soma(self.state.a, self.state.b)
        this.setState({ r: res });
    }
    value1(event: any) {
        this.setState({
            a: parseInt(event.target.value)
        })
    }
    value2(event: any) {
        this.setState({
            b: parseInt(event.target.value)
        })
    }
    render() {
        return (
            <div>
                <label>ReactApp SOMA</label>
                <br />
                <input name="input1" value={this.state.a} type="number" onChange={this.value1}/>
                <input name="input2" value={this.state.b} type="number" onChange={this.value2}/>
                <button onClick={this.calcular}>Calcular</button>
                <br />
                Resultado: {this.state.r}
            </div>
        );
    }
}
const App = document.getElementById('app') as HTMLElement;

render(<Calcula />, App);