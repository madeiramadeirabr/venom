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
var component_1 = require("../../component");
var venom_1 = require("../../venom");
var BUTTON_DISABLED_MODIFIER = 'button--is-disabled', BUTTON_MODIFIERS = ['button--is-primary', 'button--is-secondary', 'button--is-success', 'button--is-danger', 'button--is-warning'], BUTTON_TEXT = 'button__text';
exports.BUTTON_DISABLED_MODIFIER = BUTTON_DISABLED_MODIFIER;
exports.BUTTON_MODIFIERS = BUTTON_MODIFIERS;
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(el) {
        var _this = _super.call(this, el) || this;
        _this._setUid(venom_1.Venom.create({ alias: _this._getAlias(), component: _this.getInstance() }));
        return _this;
    }
    Button.prototype._getContent = function () {
        if (this._isInputType())
            return this._el.value;
        var ButtonText = (this._el.querySelector("." + BUTTON_TEXT));
        if (ButtonText)
            return ButtonText.innerHTML;
        return this._el.innerHTML;
    };
    Button.prototype.getInstance = function () {
        return this;
    };
    Button.prototype.getElement = function () {
        return this._el;
    };
    Button.prototype.setDisabled = function (disabled) {
        if ('disabled' in this._el) {
            this._el.disabled = disabled;
        }
        var classList = this._el.classList, contains = classList.contains(BUTTON_DISABLED_MODIFIER);
        if (disabled) {
            if (!contains)
                classList.add(BUTTON_DISABLED_MODIFIER);
        }
        else {
            if (contains)
                classList.remove(BUTTON_DISABLED_MODIFIER);
        }
        return this;
    };
    Button.prototype.setModifier = function (buttonModifier) {
        var classList = this._el.classList;
        for (var modifier in BUTTON_MODIFIERS) {
            if (classList.contains(modifier))
                classList.remove(modifier);
        }
        if (!classList.contains(buttonModifier))
            classList.add(buttonModifier);
        return this;
    };
    Button.prototype.setText = function (content) {
        if (this._isInputType()) {
            this._el.value = content;
        }
        else {
            this._el.innerHTML = content;
        }
        return this;
    };
    Button.prototype.setLoading = function (start, content) {
        if (start === void 0) { start = true; }
        if (content === void 0) { content = ''; }
        if (!this._content)
            this._content = this._getContent();
        this.setText(start ? content : this._content).setDisabled(start);
        return this;
    };
    return Button;
}(component_1.Component));
exports.Button = Button;
//# sourceMappingURL=button.js.map