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
var Soma = /** @class */ (function (_super) {
    __extends(Soma, _super);
    function Soma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soma.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Input_1.Input, { name: "inputA", type: "number", placeholder: "Digite o valor de A" }),
            React.createElement(Input_1.Input, { name: "inputB", type: "number", placeholder: "Digite o valor de B" }),
            React.createElement(Calculadora_1.Calculadora, { type: "soma", elements: [
                    "inputA",
                    "inputB"
                ] })));
    };
    return Soma;
}(React.Component));
exports.Soma = Soma;
//# sourceMappingURL=SomaTeste.js.map