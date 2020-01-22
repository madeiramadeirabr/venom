"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_field_1 = require("./text-field");
var Validator = (function () {
    function Validator(component) {
        this._validators = [];
        this._isValid = true;
        this._component = component;
        this._validators = [];
    }
    Validator.prototype.insert = function (validator) {
        this._validators.push(validator);
        return this;
    };
    Validator.prototype.delete = function (validator) {
        this._validators.filter(function (instance) { return instance !== validator; });
        return this;
    };
    Validator.prototype.isValid = function () {
        return this._isValid;
    };
    Validator.prototype.validate = function () {
        var _this = this;
        var currentValue = this._component.getValue();
        var validated = true;
        if (this._validators.length > 0) {
            this._validators.map(function (_a) {
                var parser = _a.parser, validator = _a.validator, mask = _a.mask, _b = _a.messages, error = _b.error, success = _b.success, callback = _a.callback, _c = _a.options, clearMessageOnSuccess = _c.clearMessageOnSuccess, clearMessageOnEmpty = _c.clearMessageOnEmpty;
                if (currentValue.length > 0) {
                    var value = parser ? parser(currentValue) : currentValue, isValid = validator(value);
                    var feedback = "", modifier = text_field_1.TEXTFIELD_SUCCESS_MODIFIER;
                    if (!clearMessageOnSuccess || !isValid) {
                        feedback = isValid ? success : error;
                        modifier = isValid ? text_field_1.TEXTFIELD_SUCCESS_MODIFIER : text_field_1.TEXTFIELD_DANGER_MODIFIER;
                    }
                    _this._component.setFeedback(feedback).setModifier(modifier);
                    if (!isValid)
                        validated = false;
                    if (callback)
                        callback(!isValid);
                    if (mask)
                        _this._component.setValue(mask(value));
                }
                else {
                    if (clearMessageOnEmpty)
                        _this._component.setFeedback('');
                }
            });
        }
        if (this._isValid !== validated)
            this._isValid = !this._isValid;
        return this;
    };
    return Validator;
}());
exports.Validator = Validator;
//# sourceMappingURL=validator.js.map