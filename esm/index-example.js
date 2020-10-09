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
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RCPhoneNumber from '../src';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { value: undefined };
        return _this;
    }
    App.prototype.render = function () {
        return React.createElement("div", { style: { width: '25%' } },
            React.createElement(RCPhoneNumber, { onChange: function (e) { return console.log(e); }, onBlur: function (e) { return console.log(e); }, value: this.state.value, placeholder: "Phone", withIpLookup: true }));
    };
    return App;
}(React.Component));
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=index-example.js.map