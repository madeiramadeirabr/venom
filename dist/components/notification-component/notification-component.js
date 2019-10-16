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
var constants_1 = require("../constants");
var ELEMENT_CONTENT = '.notification__content', ELEMENT_CLOSE = '.notification__close';
var NotificationComponent = (function (_super) {
    __extends(NotificationComponent, _super);
    function NotificationComponent(el) {
        var _this = _super.call(this, el) || this;
        _this.getInstance = _this.getInstance.bind(_this);
        _this.setContent = _this.setContent.bind(_this);
        _this.setVisible = _this.setVisible.bind(_this);
        _this.hideIn = _this.hideIn.bind(_this);
        _this._initialize();
        return _this;
    }
    NotificationComponent.prototype._initialize = function () {
        var visible = this.getAttributes().visible;
        this._toggle(visible === 'false' ? false : true);
        if (this.getContentHtml() === '') {
            var content = document.createElement('div');
            content.classList.add('venom');
            content.classList.add(ELEMENT_CONTENT.replace('.', ''));
            this._content = content;
            var close_1 = document.createElement('button');
            close_1.classList.add('venom');
            close_1.classList.add(ELEMENT_CLOSE.replace('.', ''));
            close_1.innerHTML +=
                "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z\"/></svg>\n        ";
            this._button = close_1;
            this.getElement().appendChild(content);
            this.getElement().appendChild(close_1);
        }
        else {
            var content = this.getElement().querySelector(ELEMENT_CONTENT);
            if (content)
                this._content = content;
            var close_2 = this.getElement().querySelector(ELEMENT_CLOSE);
            if (close_2)
                this._button = close_2;
        }
        console.log('william', this._button);
        this._attachEvents();
    };
    NotificationComponent.prototype._attachEvents = function () {
        if (this._button)
            this._button.addEventListener('click', this._hide.bind(this));
    };
    NotificationComponent.prototype._toggle = function (visibile) {
        if (visibile) {
            if (this.getClassnames().contains(constants_1.HIDDEN_MODIFIER))
                this.getClassnames().remove(constants_1.HIDDEN_MODIFIER);
        }
        else {
            if (!this.getClassnames().contains(constants_1.HIDDEN_MODIFIER))
                this.getClassnames().add(constants_1.HIDDEN_MODIFIER);
        }
    };
    NotificationComponent.prototype._hide = function (event) {
        event.preventDefault();
        this._toggle(false);
        return false;
    };
    NotificationComponent.prototype.getInstance = function () {
        return this;
    };
    NotificationComponent.prototype.setContent = function (content) {
        this._content.innerHTML = content;
        return this;
    };
    NotificationComponent.prototype.setVisible = function (visible) {
        if (visible === void 0) { visible = true; }
        this._toggle(visible);
        return this;
    };
    NotificationComponent.prototype.hideIn = function (milliseconds) {
        var _this = this;
        setTimeout(function () { return _this._toggle(false); }, milliseconds);
        return this;
    };
    return NotificationComponent;
}(component_1.Component));
exports.NotificationComponent = NotificationComponent;
//# sourceMappingURL=notification-component.js.map