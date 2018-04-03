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
var ReactDom = require("react-dom");
var input_1 = require("./components/input");
var Calcula = /** @class */ (function (_super) {
    __extends(Calcula, _super);
    function Calcula(props) {
        return _super.call(this, props) || this;
    }
    Calcula.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(input_1.Input, { name: "inputA", type: "number", placeholder: "Digite o valor de A" }),
            React.createElement(input_1.Input, { name: "inputB", type: "number", placeholder: "Digite o valor de B" })));
    };
    return Calcula;
}(React.Component));
var root = document.getElementById('root');
ReactDom.render(React.createElement(Calcula, null), root);
//# sourceMappingURL=index.js.map