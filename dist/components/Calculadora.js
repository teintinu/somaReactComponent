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
var Calculadora = /** @class */ (function (_super) {
    __extends(Calculadora, _super);
    function Calculadora(props) {
        var _this = _super.call(this, props) || this;
        _this.exibirResultado = _this.exibirResultado.bind(_this);
        return _this;
    }
    Calculadora.prototype.exibirResultado = function () {
        var result = 0;
        var elem = this.props.elements;
        return result;
    };
    Calculadora.prototype.render = function () {
        var self = this;
        if ((self.props.type == "soma")) {
            return (React.createElement("div", null,
                React.createElement("h1", null, self.props.type),
                React.createElement("h1", null, self.props.elements),
                self.exibirResultado()));
        }
    };
    return Calculadora;
}(React.Component));
exports.Calculadora = Calculadora;
//# sourceMappingURL=Calculadora.js.map