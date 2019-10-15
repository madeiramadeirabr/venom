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
import { Venom } from '../../venom';
import { ButtonComponent } from '../button-component/index';
import { InputComponent } from '../input-component';
import { TEXT_FIELD_ELEMENT } from './constants';
import { SUCCESS_MODIFIER, DANGER_MODIFIER, WARNING_MODIFIER, ACTIVE_MODIFIER, DISABLED_MODIFIER } from '../constants';
var FieldComponent = (function (_super) {
    __extends(FieldComponent, _super);
    function FieldComponent(el, handlers) {
        var _this = _super.call(this, el) || this;
        _this.validators = [];
        _this.isValid = false;
        _this.getInstance = _this.getInstance.bind(_this);
        _this.setIsValid = _this.setIsValid.bind(_this);
        _this.getIsValid = _this.getIsValid.bind(_this);
        _this.update = _this.update.bind(_this);
        _this.pushValidators = _this.pushValidators.bind(_this);
        _this.setDisabled = _this.setDisabled.bind(_this);
        _this.setFocus = _this.setFocus.bind(_this);
        _this.setBlur = _this.setBlur.bind(_this);
        _this.notify = _this.notify.bind(_this);
        _this.injectHandlers = _this.injectHandlers.bind(_this);
        _this.clearClassnames = _this.clearClassnames.bind(_this);
        _this.setValue = _this.setValue.bind(_this);
        _this.setActive = _this.setActive.bind(_this);
        _this.setHelperContent = _this.setHelperContent.bind(_this);
        _this.setModifier = _this.setModifier.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.getIsRequired = _this.getIsRequired.bind(_this);
        if (_this.getValue().length > 0)
            _this.setActive(true);
        _this.injectHandlers(handlers);
        return _this;
    }
    FieldComponent.prototype.getListener = function () {
        var listener = this.getAttributes().listener;
        if (!listener)
            return false;
        var instance = Venom.get(listener);
        if (instance)
            return instance.component;
    };
    FieldComponent.prototype.getIsRequired = function () {
        var required = this.getAttributes().required;
        return required || false;
    };
    FieldComponent.prototype.setValue = function (value, forceIsValid) {
        if (forceIsValid === void 0) { forceIsValid = false; }
        this._valueHandler(value);
        _super.prototype.setValue.call(this, value);
        if (forceIsValid)
            this.isValid = true;
        return this;
    };
    FieldComponent.prototype._valueHandler = function (value) {
        if (value.length <= 0)
            this.reset();
        if (value.length > 0)
            this.setActive(true);
    };
    FieldComponent.prototype.setDisabled = function (value) {
        var prevDisabled = this.getElement().disabled;
        if (prevDisabled !== value) {
            _super.prototype.setDisabled.call(this, value);
            var classList = this._getMainElement().classList;
            var DISABLE_MODIFIER = TEXT_FIELD_ELEMENT + DISABLED_MODIFIER;
            if (!classList.contains(DISABLE_MODIFIER))
                classList.add(DISABLE_MODIFIER);
        }
        return this;
    };
    FieldComponent.prototype.setHelperContent = function (content) {
        var prevContent = this._getHelperElement().innerHTML;
        if (prevContent !== content)
            this._getHelperElement().innerHTML = content;
        return this;
    };
    FieldComponent.prototype.setFocus = function () {
        this.getElement().focus();
        return this;
    };
    FieldComponent.prototype.setBlur = function () {
        var value = this.getValue();
        this._valueHandler(value);
        this.getElement().blur();
        return this;
    };
    FieldComponent.prototype.getInstance = function () {
        return this;
    };
    FieldComponent.prototype.pushValidators = function (name, trigger) {
        this.validators.push({ name: name, trigger: trigger, value: false });
        return this;
    };
    FieldComponent.prototype.setIsValid = function (name, trigger, isValid) {
        if (isValid !== this.isValid) {
            var indexOf_1 = -1;
            this.validators.map(function (validator, index) {
                return validator.name === name && validator.trigger === trigger ? (indexOf_1 = index) : false;
            });
            if (indexOf_1 >= 0 && this.validators[indexOf_1].value !== isValid)
                this.validators[indexOf_1].value = isValid;
            var result_1 = true;
            this.validators.map(function (_a) {
                var value = _a.value;
                return (value === false ? (result_1 = false) : null);
            });
            if (this.isValid !== result_1)
                this.isValid = result_1;
            this.notify();
        }
        return this;
    };
    FieldComponent.prototype.notify = function () {
        var listener = this.getListener();
        if (listener instanceof ButtonComponent)
            listener.notify();
    };
    FieldComponent.prototype.getIsValid = function () {
        return this.isValid;
    };
    FieldComponent.prototype.reset = function () {
        this.isValid = false;
        this.clearClassnames();
        this.setActive(false);
    };
    FieldComponent.prototype.injectHandlers = function (handlers) {
        var _this = this;
        if (handlers) {
            handlers.map(function (_a) {
                var trigger = _a.trigger, name = _a.name, handler = _a.handler, ignore = _a.ignore;
                var exists = false;
                _this.validators.map(function (validator) {
                    if (validator.name === name) {
                        if (validator.trigger !== 'blur')
                            exists = true;
                    }
                });
                if (!exists && (ignore === undefined || !ignore) && name)
                    _this.pushValidators(name, trigger);
                _this.attachEvent(trigger, function (event) { return handler(_this, event); });
            });
        }
        return this;
    };
    FieldComponent.prototype._getContainerElement = function () {
        if (!this._containerEl)
            this._containerEl = this.getElement().parentElement;
        return this._containerEl;
    };
    FieldComponent.prototype._getHelperElement = function () {
        if (!this._helperEl)
            this._helperEl = this._getMainElement().querySelector('span.text-field__helper');
        return this._helperEl;
    };
    FieldComponent.prototype._getMainElement = function () {
        if (!this._mainEl)
            this._mainEl = this._getContainerElement().parentElement;
        return this._mainEl;
    };
    FieldComponent.prototype.clearClassnames = function () {
        var classList = this._getMainElement().classList;
        if (classList.contains(TEXT_FIELD_ELEMENT + SUCCESS_MODIFIER))
            classList.remove(TEXT_FIELD_ELEMENT + SUCCESS_MODIFIER);
        if (classList.contains(TEXT_FIELD_ELEMENT + DANGER_MODIFIER))
            classList.remove(TEXT_FIELD_ELEMENT + DANGER_MODIFIER);
        if (classList.contains(TEXT_FIELD_ELEMENT + DANGER_MODIFIER))
            classList.remove(TEXT_FIELD_ELEMENT + WARNING_MODIFIER);
        if (classList.contains(TEXT_FIELD_ELEMENT + DISABLED_MODIFIER))
            classList.remove(TEXT_FIELD_ELEMENT + DISABLED_MODIFIER);
    };
    FieldComponent.prototype.changeClassnames = function (success) {
        if (success === void 0) { success = true; }
        var classList = this._getMainElement().classList;
        var className = "" + TEXT_FIELD_ELEMENT + (success ? SUCCESS_MODIFIER : DANGER_MODIFIER);
        if (!classList.contains(className))
            classList.add(className);
    };
    FieldComponent.prototype.update = function (changeClassnames) {
        if (changeClassnames === void 0) { changeClassnames = true; }
        this.clearClassnames();
        if (changeClassnames)
            this.changeClassnames(this.getIsValid());
        return this;
    };
    FieldComponent.prototype.setActive = function (value) {
        if (value === void 0) { value = true; }
        var mainEl = this._getMainElement();
        if (mainEl) {
            var classList = mainEl.classList, ACTIVATED_MODIFIER = TEXT_FIELD_ELEMENT + ACTIVE_MODIFIER;
            if (value) {
                if (!classList.contains(ACTIVATED_MODIFIER))
                    classList.add(ACTIVATED_MODIFIER);
            }
            else {
                if (classList.contains(ACTIVATED_MODIFIER))
                    classList.remove(ACTIVATED_MODIFIER);
            }
        }
        return this;
    };
    FieldComponent.prototype.setModifier = function (modifier) {
        var mainEl = this._getMainElement();
        if (mainEl) {
            this.clearClassnames();
            var classList = mainEl.classList, MODIFIER = TEXT_FIELD_ELEMENT + modifier;
            if (!classList.contains(MODIFIER))
                classList.add(MODIFIER);
        }
        return this;
    };
    return FieldComponent;
}(InputComponent));
export { FieldComponent };
//# sourceMappingURL=field-component.js.map