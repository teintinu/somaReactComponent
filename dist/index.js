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
var ReactDOM = require("react-dom");
// <Input 
//     // name="teste"
//     // type="number"
//     // value="0"
//     // placeholder="Digite um numero aqui"
// />
// ReactDOM.render(
//     <Teste />,
//     document.getElementById('example') as HTMLElement
// );
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main(props) {
        return _super.call(this, props) || this;
    }
    Main.prototype.render = function () {
        return (React.createElement("p", null, " teste "));
    };
    return Main;
}(React.Component));
var root = document.getElementById('example');
ReactDOM.render(React.createElement(Main, null), root);
//# sourceMappingURL=index.js.map