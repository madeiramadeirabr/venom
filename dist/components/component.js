"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var Component = (function () {
    function Component(element) {
        this._element = element;
        this.attachEvent = this.attachEvent.bind(this);
        this.getAlias = this.getAlias.bind(this);
        this.getAttributes = this.getAttributes.bind(this);
        this.getClassnames = this.getClassnames.bind(this);
        this.getComponent = this.getComponent.bind(this);
        this.getElement = this.getElement.bind(this);
        this.setEvent = this.setEvent.bind(this);
        this.getEvent = this.getEvent.bind(this);
        this.getTagname = this.getTagname.bind(this);
        this.setContentHtml = this.setContentHtml.bind(this);
        this.getContentHtml = this.getContentHtml.bind(this);
        this.clearModifiers = this.clearModifiers.bind(this);
        this.setModifier = this.setModifier.bind(this);
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
        this.toggle = this.toggle.bind(this);
        this.isInput = this.isInput.bind(this);
    }
    Component.prototype.getComponent = function () {
        return this;
    };
    Component.prototype.getElement = function () {
        return this._element;
    };
    Component.prototype.attachEvent = function (trigger, callback) {
        this.getElement().addEventListener(trigger, callback);
        return this;
    };
    Component.prototype.getAttributes = function () {
        return this.getElement().dataset;
    };
    Component.prototype.getClassnames = function () {
        return this.getElement().classList;
    };
    Component.prototype.setContentHtml = function (setContentHtml) {
        if (this._haveInnerHTML())
            this.getElement().innerHTML = setContentHtml;
        return this;
    };
    Component.prototype._haveInnerHTML = function () {
        var el = this.getElement();
        return (el instanceof HTMLDivElement ||
            el instanceof HTMLLabelElement ||
            el instanceof HTMLParagraphElement ||
            el instanceof HTMLSpanElement ||
            el instanceof HTMLTemplateElement ||
            el instanceof HTMLAnchorElement ||
            el instanceof HTMLButtonElement ||
            el instanceof HTMLFormElement ||
            el instanceof HTMLTableElement ||
            el instanceof HTMLTimeElement ||
            el instanceof HTMLQuoteElement ||
            el instanceof HTMLHeadingElement);
    };
    Component.prototype.getContentHtml = function () {
        return this._haveInnerHTML() ? this.getElement().innerHTML : null;
    };
    Component.prototype.setEvent = function (event) {
        this._event = event;
        return this;
    };
    Component.prototype.getEvent = function () {
        return this._event;
    };
    Component.prototype.getTagname = function () {
        return this.getElement().tagName.toLowerCase();
    };
    Component.prototype.getAlias = function () {
        var alias = this.getAttributes().alias;
        return alias;
    };
    Component.prototype.getComponentName = function () {
        var component = this.getAttributes().component;
        return component;
    };
    Component.prototype.clearModifiers = function () {
        var _this = this;
        var modifiers = [constants_1.DANGER_MODIFIER, constants_1.WARNING_MODIFIER, constants_1.INFO_MODIFIER, constants_1.SUCCESS_MODIFIER];
        modifiers.map(function (modifier) {
            if (_this.getClassnames().contains(_this.getComponentName() + modifier)) {
                _this.getClassnames().remove(_this.getComponentName() + modifier);
            }
        });
    };
    Component.prototype.setModifier = function (modifier) {
        this.clearModifiers();
        var MODIFIER = this.getComponentName() + modifier;
        if (!this.getClassnames().contains(MODIFIER))
            this.getClassnames().add(MODIFIER);
        return this;
    };
    Component.prototype.hide = function () {
        var Classnames = this.getClassnames();
        if (!Classnames.contains(constants_1.HIDDEN_MODIFIER))
            Classnames.add(constants_1.HIDDEN_MODIFIER);
        return this;
    };
    Component.prototype.show = function () {
        var Classnames = this.getClassnames();
        if (Classnames.contains(constants_1.HIDDEN_MODIFIER))
            Classnames.remove(constants_1.HIDDEN_MODIFIER);
        return this;
    };
    Component.prototype.toggle = function () {
        if (this.getClassnames().contains(constants_1.HIDDEN_MODIFIER)) {
            this.show();
        }
        else {
            this.hide();
        }
        return this;
    };
    Component.prototype.isInput = function () {
        var el = this.getElement();
        if (el instanceof HTMLInputElement) {
            return el;
        }
        return false;
    };
    return Component;
}());
exports.Component = Component;
//# sourceMappingURL=component.js.map