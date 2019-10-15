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
import { Component } from '../component';
var CLOSE_BUTTON = '[data-modal=button]', BODY = '.modal__body', CONTAINER = '.modal__container', TITLE = '[data-modal=title]';
var ModalComponent = (function (_super) {
    __extends(ModalComponent, _super);
    function ModalComponent(element) {
        var _this = _super.call(this, element) || this;
        _this.setBodyContent = _this.setBodyContent.bind(_this);
        _this.setBodyContentFromTemplate = _this.setBodyContentFromTemplate.bind(_this);
        _this.setBodyContentFromData = _this.setBodyContentFromData.bind(_this);
        _this.setSize = _this.setSize.bind(_this);
        _this.setWidth = _this.setWidth.bind(_this);
        _this.setHeight = _this.setHeight.bind(_this);
        _this.open = _this.open.bind(_this);
        _this.close = _this.close.bind(_this);
        _this.show = _this.show.bind(_this);
        _this.hide = _this.hide.bind(_this);
        _this.setTitle = _this.setTitle.bind(_this);
        _this.setTitleModifier = _this.setTitleModifier.bind(_this);
        _this.changeClose = _this.changeClose.bind(_this);
        _this.resetClose = _this.resetClose.bind(_this);
        _this._onClose = _this._onClose.bind(_this);
        _this._initialize();
        return _this;
    }
    ModalComponent.prototype.getInstance = function () {
        return this;
    };
    ModalComponent.prototype._initialize = function () {
        var _this = this;
        var windowSize = window.matchMedia('(min-width: 768px)');
        this.setSize(windowSize);
        windowSize.addEventListener('change', function () {
            _this.setSize(windowSize);
        });
        var Close = this.getClose();
        if (Close)
            Close.addEventListener('click', this._onClose);
    };
    ModalComponent.prototype._onClose = function (e) {
        this.close();
        return false;
    };
    ModalComponent.prototype.setSize = function (windowSize) {
        var width, height;
        if (windowSize.matches) {
            width = this.getElement().dataset.width + 'px';
            height = this.getElement().dataset.height + 'px';
        }
        else {
            width = '100%';
            height = '100%';
        }
        this.setWidth(width);
        this.setHeight(height);
        return this;
    };
    ModalComponent.prototype.setWidth = function (width) {
        if (width) {
            var size = width.toString().includes('px') ? width : width + "px";
            this.getContainer().style.width = size;
            this.getContainer().style.maxWidth = width == '100%' ? 'calc(100vh - 40px)' : size;
        }
        return this;
    };
    ModalComponent.prototype.setHeight = function (height) {
        if (height) {
            var size = height.toString().includes('px') ? height : height + "px";
            this.getContainer().style.height = size;
            this.getContainer().style.maxHeight = height == '100%' ? 'calc(100vh - 40px)' : size;
        }
        return this;
    };
    ModalComponent.prototype.close = function () {
        this.getElement().classList.add('modal--is-hidden');
        document.documentElement.style.overflow = 'scroll';
        return this;
    };
    ModalComponent.prototype.open = function () {
        this.getElement().classList.remove('modal--is-hidden');
        document.documentElement.style.overflow = 'hidden';
        return this;
    };
    ModalComponent.prototype.show = function () {
        this.open();
        return this;
    };
    ModalComponent.prototype.hide = function () {
        this.close();
        return this;
    };
    ModalComponent.prototype.setBodyContent = function (content) {
        this.getBody().innerHTML = content;
        return this;
    };
    ModalComponent.prototype.setBodyContentFromTemplate = function (id) {
        var template = document.getElementById(id);
        this.setBodyContent('');
        this.getBody().appendChild(document.importNode(template.content, true));
        return this;
    };
    ModalComponent.prototype.setBodyContentFromData = function (attribute, value, multiple) {
        var _this = this;
        if (multiple === void 0) { multiple = false; }
        var param = "[data-" + attribute + "=" + value + "]", template = multiple ? [].slice.call(document.querySelectorAll(param)) : document.querySelector(param);
        this.setBodyContent('');
        if (!multiple)
            this.getBody().appendChild(document.importNode(template.content, true));
        if (template)
            template.map(function (t) { return _this.getBody().appendChild(document.importNode(t.content, true)); });
        return this;
    };
    ModalComponent.prototype.getBody = function () {
        if (!this._body)
            this._body = this.getElement().querySelector(BODY);
        return this._body;
    };
    ModalComponent.prototype.getContainer = function () {
        if (!this._container)
            this._container = this.getElement().querySelector(CONTAINER);
        return this._container;
    };
    ModalComponent.prototype.getClose = function () {
        if (!this._close)
            this._close = this.getElement().querySelector(CLOSE_BUTTON);
        return this._close;
    };
    ModalComponent.prototype.getTitle = function () {
        if (!this._title)
            this._title = this.getElement().querySelector(TITLE);
        return this._title;
    };
    ModalComponent.prototype.setTitle = function (title) {
        var Title = this.getTitle();
        Title.innerHTML = title;
        return this;
    };
    ModalComponent.prototype.setTitleModifier = function (modifier) {
        var classList = this.getTitle().parentElement.classList, contains = classList.contains(modifier);
        if (!contains)
            classList.add(modifier);
        return this;
    };
    ModalComponent.prototype.changeClose = function (callback) {
        var Close = this.getClose();
        Close.removeEventListener('click', this._onClose);
        Close.addEventListener('click', function () { return callback(); });
        return this;
    };
    ModalComponent.prototype.resetClose = function () {
        var Close = this.getClose();
        Close.addEventListener('click', this._onClose);
    };
    return ModalComponent;
}(Component));
export { ModalComponent };
//# sourceMappingURL=modal-component.js.map