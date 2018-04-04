"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var somalib_1 = require("@hoda5/somalib");
var Soma = /** @class */ (function (_super) {
    __extends(Soma, _super);
    function Soma(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            inputA: 0,
            inputB: 0,
        };
        _this.handleChangeA = _this.handleChangeA.bind(_this);
        _this.handleChangeB = _this.handleChangeB.bind(_this);
        _this.result = _this.result.bind(_this);
        return _this;
    }
    Soma.prototype.handleChangeA = function (event) {
        var value = parseFloat(event.target.value);
        if (this.state.inputA != value) {
            this.setState({
                inputA: value
            });
        }
    };
    Soma.prototype.handleChangeB = function (event) {
        var value = parseFloat(event.target.value);
        if (this.state.inputB != value) {
            this.setState({
                inputB: value
            });
        }
    };
    Soma.prototype.result = function () {
        if (this.state.inputA > 0 && this.state.inputB > 0) {
            var result = somalib_1.soma(this.state.inputA, this.state.inputb);
            this.setState({
                resultado: result
            });
        }
    };
    Soma.prototype.render = function () {
        var self = this;
        return (React.createElement("div", null,
            React.createElement("input", { name: "inputA", type: "number", value: self.state.inputA, placeholder: "Digite o valor de A", onChange: self.handleChangeA }),
            React.createElement("input", { name: "inputB", type: "number", value: self.state.inputB, onChange: self.handleChangeB, placeholder: "Digite o valor de B" }),
            React.createElement("br", null),
            React.createElement("button", { onClick: this.result }, "Calcular"),
            self.state.resultado));
    };
    return Soma;
}(React.Component));
exports.Soma = Soma;
//# sourceMappingURL=Soma.js.map