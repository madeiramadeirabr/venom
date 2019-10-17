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
var component_1 = require("./component");
var InputComponent = (function (_super) {
    __extends(InputComponent, _super);
    function InputComponent(element) {
        var _this = _super.call(this, element) || this;
        _this.getBaseComponent = _this.getBaseComponent.bind(_this);
        _this.getInputComponent = _this.getInputComponent.bind(_this);
        _this.getElement = _this.getElement.bind(_this);
        _this.setDisabled = _this.setDisabled.bind(_this);
        _this.getDisabled = _this.getDisabled.bind(_this);
        _this.setType = _this.setType.bind(_this);
        _this.getType = _this.getType.bind(_this);
        _this.setValue = _this.setValue.bind(_this);
        _this.getValue = _this.getValue.bind(_this);
        return _this;
    }
    InputComponent.prototype.getInputComponent = function () {
        return this;
    };
    InputComponent.prototype.getBaseComponent = function () {
        return _super.prototype.getComponent.call(this);
    };
    InputComponent.prototype.getElement = function () {
        return _super.prototype.getElement.call(this);
    };
    InputComponent.prototype.setValue = function (value) {
        this.getElement().value = value === null ? '' : value;
        return this;
    };
    InputComponent.prototype.getValue = function () {
        return this.getElement().value;
    };
    InputComponent.prototype.setType = function (type) {
        this.getElement().type = type;
        return this;
    };
    InputComponent.prototype.getType = function () {
        return this.getElement().type;
    };
    InputComponent.prototype.setDisabled = function (disabled) {
        this.getElement().disabled = disabled;
        return this;
    };
    InputComponent.prototype.getDisabled = function () {
        return this.getElement().disabled;
    };
    InputComponent.prototype.isFormInput = function () {
        return this.getElement() instanceof HTMLInputElement || this.getElement() instanceof HTMLSelectElement || this.getElement() instanceof HTMLTextAreaElement ? true : false;
    };
    return InputComponent;
}(component_1.Component));
exports.InputComponent = InputComponent;
//# sourceMappingURL=input-component.js.map