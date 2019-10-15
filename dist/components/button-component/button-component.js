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
var DISABLED_CLASSNAME = 'button--is-disabled';
import { FieldComponent } from '../field-component/index';
import { Venom } from '../../venom';
import { InputComponent } from '../input-component';
var ButtonComponent = (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent(element) {
        var _this = _super.call(this, element) || this;
        _this.changeContent = _this.changeContent.bind(_this);
        _this.setDisabled = _this.setDisabled.bind(_this);
        _this.loadingStart = _this.loadingStart.bind(_this);
        _this.loadingStop = _this.loadingStop.bind(_this);
        _this.notify = _this.notify.bind(_this);
        _this.injectHandler = _this.injectHandler.bind(_this);
        _this._initialize();
        return _this;
    }
    ButtonComponent.prototype.getInstance = function () {
        return this;
    };
    ButtonComponent.prototype._getContent = function () {
        return this._content;
    };
    ButtonComponent.prototype._initialize = function () {
        var _this = this;
        this._element.addEventListener('dragover', function () {
            _this._element.classList.add('button--is-dragged');
            return false;
        });
        this._element.addEventListener('dragend', function () {
            _this._element.classList.remove('button--is-dragged');
            return false;
        });
        var Icon = this.getElement().querySelector('.button__icon');
        if (Icon)
            this._haveIcon = true;
        var Text = this.getElement().querySelector('.button__text');
        if (Text)
            this._text = Text;
        var tagName = _super.prototype.getElement.call(this).tagName;
        this._tag = tagName.toLowerCase();
        this._content = !Text ? _super.prototype.getValue.call(this) : Text.innerHTML;
        this._listening = [];
        var target = this.getAttributes().target;
        if (target) {
            var indexOfPipe = target.indexOf('|'), targets_1 = [], listening_1 = [];
            if (indexOfPipe > 0) {
                var targetList = target.split('|');
                targetList.map(function (t) { return targets_1.push(t); });
            }
            else {
                targets_1.push(target);
            }
            targets_1.map(function (t) {
                var instance = Venom.get(t);
                if (instance) {
                    if (instance.component instanceof FieldComponent) {
                        listening_1.push(instance);
                    }
                }
            });
            this._listening = listening_1;
        }
    };
    ButtonComponent.prototype._getText = function () {
        return this._text;
    };
    ButtonComponent.prototype.notify = function () {
        var ready = true;
        if (this._listening.length > 0) {
            this._listening.map(function (_a) {
                var component = _a.component;
                if (!component.getIsValid())
                    ready = false;
            });
            this._toggle(!ready);
        }
    };
    ButtonComponent.prototype.injectHandler = function (_a) {
        var trigger = _a.trigger, callback = _a.callback;
        _super.prototype.getElement.call(this).addEventListener(trigger, callback);
        return this;
    };
    ButtonComponent.prototype.changeContent = function (content) {
        var Text = this._getText();
        if (!Text) {
            if (this.getElement() instanceof HTMLInputElement) {
                _super.prototype.setValue.call(this, content);
            }
            else {
                _super.prototype.setContentHtml.call(this, content);
            }
        }
        else {
            Text.innerHTML = content;
        }
        return this;
    };
    ButtonComponent.prototype.setDisabled = function (disabled) {
        if (disabled === void 0) { disabled = true; }
        this._toggle(disabled);
        _super.prototype.setDisabled.call(this, disabled);
        return this;
    };
    ButtonComponent.prototype._toggle = function (disable) {
        if (disable === void 0) { disable = true; }
        var classlist = this.getClassnames();
        if (disable) {
            if (!classlist.contains(DISABLED_CLASSNAME))
                classlist.add(DISABLED_CLASSNAME);
        }
        else {
            if (classlist.contains(DISABLED_CLASSNAME))
                classlist.remove(DISABLED_CLASSNAME);
        }
    };
    ButtonComponent.prototype.loadingStart = function (content) {
        if (content === void 0) { content = 'aguarde...'; }
        this.changeContent(content);
        this._toggle(true);
        return this;
    };
    ButtonComponent.prototype.loadingStop = function () {
        this.changeContent(this._getContent());
        this._toggle(false);
        return this;
    };
    return ButtonComponent;
}(InputComponent));
export { ButtonComponent };
//# sourceMappingURL=button-component.js.map