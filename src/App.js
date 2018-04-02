var Somar = require('@hoda5/somalib');
import React, { Component } from 'react';

class Appa extends Component {
  constructor(props) {
    super(props);
    this.state = {a: null, b: null, resultado: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSomar = this.handleSomar.bind(this);
  }

  handleChange(event) {
    debugger
    event.target.id === 'a' ? this.setState({a: parseInt(event.target.value)}) : null;
    event.target.id === 'b' ? this.setState({b: parseInt(event.target.value)}) : null;
  }

  handleSomar(event) {
    debugger;
    if(this.state.a && this.state.b)
      this.setState({resultado: Somar.soma(this.state.a, this.state.b)})
  }

  render() {
    return (
      <div className="Appa">
        <form>
            A: <input type="" id="a" onChange={this.handleChange} name="a" />
            B: <input type="B" id="b" onChange={this.handleChange} name="b" />
            Resultado: <input value={this.state.resultado} />
          <input onClick={this.handleSomar} type="button" value="Somar" />
        </form>
      </div>
    );
  }
}

export default Appa;
