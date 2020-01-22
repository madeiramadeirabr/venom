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
exports.TEXTFIELD_DISABLED_MODIFIER = 'field--is-disabled', exports.TEXTFIELD_ACTIVE_MODIFIER = 'field--is-active', exports.TEXTFIELD_SUCCESS_MODIFIER = 'field--is-success', exports.TEXTFIELD_DANGER_MODIFIER = 'field--is-danger', exports.TEXTFIELD_MODIFIERS = [exports.TEXTFIELD_ACTIVE_MODIFIER, exports.TEXTFIELD_SUCCESS_MODIFIER, exports.TEXTFIELD_DANGER_MODIFIER];
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField(el) {
        var _this = _super.call(this, el) || this;
        _this._setUid(venom_1.Venom.create({ alias: _this._getAlias(), component: _this.getInstance() }));
        return _this;
    }
    TextField.prototype.getInstance = function () {
        return this;
    };
    TextField.prototype.getElement = function () {
        return this._el;
    };
    TextField.prototype.getContainer = function () {
        if (!this._container) {
            var Container = this._el.closest('.field');
            if (Container)
                this._container = Container;
        }
        return this._container;
    };
    TextField.prototype.getFeedback = function () {
        if (!this._feedback) {
            var Helper = this.getContainer().querySelector('.field__feedback');
            if (Helper)
                this._feedback = Helper;
        }
        return this._feedback;
    };
    TextField.prototype.getLabel = function () {
        if (!this._label) {
            var Label = this.getContainer().querySelector('label');
            if (Label)
                this._label = Label;
        }
        return this._label;
    };
    TextField.prototype.setDisabled = function (disabled) {
        if ('disabled' in this._el) {
            this._el.disabled = disabled;
        }
        else {
            var classList = this.getContainer().classList, contains = classList.contains(exports.TEXTFIELD_DISABLED_MODIFIER);
            if (disabled) {
                if (!contains)
                    classList.add(exports.TEXTFIELD_DISABLED_MODIFIER);
            }
            else {
                if (contains)
                    classList.remove(exports.TEXTFIELD_DISABLED_MODIFIER);
            }
        }
        return this;
    };
    TextField.prototype.setModifier = function (textfieldModifier) {
        var classList = this.getContainer().classList;
        exports.TEXTFIELD_MODIFIERS.map(function (modifier) {
            if (classList.contains(modifier))
                classList.remove(modifier);
        });
        if (!classList.contains(textfieldModifier))
            classList.add(textfieldModifier);
        return this;
    };
    TextField.prototype.setValue = function (value) {
        this.getElement().value = value;
        return this;
    };
    TextField.prototype.getValue = function () {
        return this.getElement().value;
    };
    TextField.prototype.setFeedback = function (text) {
        this.getFeedback().innerHTML = text;
        return this;
    };
    TextField.prototype.setLabel = function (label) {
        if (this.getLabel().innerHTML !== label)
            this.getLabel().innerHTML = label;
        return this;
    };
    return TextField;
}(component_1.Component));
exports.TextField = TextField;
//# sourceMappingURL=text-field.js.map