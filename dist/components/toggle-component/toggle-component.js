"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../component");
var ToggleComponent = (function (_super) {
    __extends(ToggleComponent, _super);
    function ToggleComponent(el) {
        var _this = _super.call(this, el) || this;
        _this.getInstance = _this.getInstance.bind(_this);
        _this.turnOn = _this.turnOn.bind(_this);
        _this.turnOff = _this.turnOff.bind(_this);
        _this.turn = _this.turn.bind(_this);
        _this.isOn = _this.isOn.bind(_this);
        _this.getInput = _this.getInput.bind(_this);
        _this._initialize();
        return _this;
    }
    ToggleComponent.prototype.onChange = function (callback) {
        var _this = this;
        this.getInput().addEventListener('change', function (e) {
            setTimeout(callback, 500);
            if (e.target.checked)
                _this.turnOn();
            return false;
        });
    };
    ToggleComponent.prototype.getInstance = function () {
        return this;
    };
    ToggleComponent.prototype.isOn = function () {
        return this.getInput().checked;
    };
    ToggleComponent.prototype.turnOn = function () {
        if (!this.isOn())
            this.getInput().checked = true;
        return this;
    };
    ToggleComponent.prototype.turnOff = function () {
        if (this.isOn())
            this.getInput().checked = false;
        return this;
    };
    ToggleComponent.prototype._initialize = function () {
        this.attachEvent('click', this.turn);
    };
    ToggleComponent.prototype.getInput = function () {
        if (!this._input)
            this._input = this.getElement().querySelector('input[type=checkbox]');
        return this._input;
    };
    ToggleComponent.prototype.turn = function () {
        this.getInput().checked = !this.isOn();
        return this;
    };
    return ToggleComponent;
}(component_1.Component));
exports.ToggleComponent = ToggleComponent;
//# sourceMappingURL=toggle-component.js.map