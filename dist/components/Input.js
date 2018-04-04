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
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.hadleChange = _this.hadleChange.bind(_this);
        return _this;
    }
    Input.prototype.hadleChange = function (event) {
        var self = this;
        this.props.onChangeText(event.target.value);
    };
    Input.prototype.render = function () {
        var self = this;
        return (React.createElement("div", null,
            React.createElement("input", { type: self.props.type, value: self.props.value, placeholder: self.props.placeholder, onKeyUp: self.hadleChange })));
    };
    return Input;
}(React.Component));
exports.Input = Input;
//# sourceMappingURL=Input.js.map