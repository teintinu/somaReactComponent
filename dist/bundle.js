!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){t.exports=React},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.soma=function(t,e){if(t<=0||e<=0)throw new Error("Use apenas numeros naturais");return t+e}},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),u=n(1),i=function(t){function e(e){var n=t.call(this,e)||this;return n.state={inputA:0,inputB:0},n.handleChangeA=n.handleChangeA.bind(n),n.handleChangeB=n.handleChangeB.bind(n),n.result=n.result.bind(n),n}return o(e,t),e.prototype.handleChangeA=function(t){var e=parseFloat(t.target.value);this.state.inputA!=e&&this.setState({inputA:e})},e.prototype.handleChangeB=function(t){var e=parseFloat(t.target.value);this.state.inputB!=e&&this.setState({inputB:e})},e.prototype.result=function(){if(this.state.inputA>0&&this.state.inputB>0){var t=u.soma(this.state.inputA,this.state.inputb);this.setState({resultado:t})}},e.prototype.render=function(){return a.createElement("div",null,a.createElement("input",{name:"inputA",type:"number",value:this.state.inputA,placeholder:"Digite o valor de A",onChange:this.handleChangeA}),a.createElement("input",{name:"inputB",type:"number",value:this.state.inputB,onChange:this.handleChangeB,placeholder:"Digite o valor de B"}),a.createElement("br",null),a.createElement("button",{onClick:this.result},"Calcular"),this.state.resultado)},e}(a.Component);e.Soma=i},function(t,e){t.exports=ReactDOM},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),u=n(3),i=n(2),s=function(t){function e(e){return t.call(this,e)||this}return o(e,t),e.prototype.render=function(){return a.createElement(i.Soma,null)},e}(a.Component),c=document.getElementById("example");u.render(a.createElement(s,null),c)}]);
//# sourceMappingURL=bundle.js.map