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
var Input_1 = require("./Input");
var Calculadora_1 = require("./Calculadora");
var SomaTeste = /** @class */ (function (_super) {
    __extends(SomaTeste, _super);
    function SomaTeste(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            a: '', b: ''
        };
        return _this;
    }
    SomaTeste.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(Input_1.Input, { name: "inputA", type: "number", onChangeText: function (text) { _this.setState({ a: text }); }, placeholder: "Digite o valor de A" }),
            React.createElement(Input_1.Input, { name: "inputB", type: "number", onChangeText: function (text) { _this.setState({ b: text }); }, placeholder: "Digite o valor de B" }),
            React.createElement(Calculadora_1.Calculadora, { type: "soma", elements: [
                    this.state.a,
                    this.state.b,
                ] })));
    };
    return SomaTeste;
}(React.Component));
exports.SomaTeste = SomaTeste;
//# sourceMappingURL=SomaTeste.js.map