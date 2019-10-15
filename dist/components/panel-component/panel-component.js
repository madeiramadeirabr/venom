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
var HEADER = '[data-panel="header"]', TITLE = '[data-panel="title"]', SUBTITLE = '[data-panel="subtitle"]', BUTTON = '.panel__arrow', DESCRIPTION = '[data-panel="description"]', BODY = '[data-panel="body"]', OPEN_MODIFIER = 'panel--is-open', NO_DESCRIPTION_MODIFIER = 'panel--has-no-description';
var PanelComponent = (function (_super) {
    __extends(PanelComponent, _super);
    function PanelComponent(element) {
        var _this = _super.call(this, element) || this;
        _this.getInstance = _this.getInstance.bind(_this);
        _this.toggle = _this.toggle.bind(_this);
        _this.close = _this.close.bind(_this);
        _this.open = _this.open.bind(_this);
        _this.show = _this.show.bind(_this);
        _this.hide = _this.hide.bind(_this);
        _this.setTitle = _this.setTitle.bind(_this);
        _this.setSubtitle = _this.setSubtitle.bind(_this);
        _this.setDescription = _this.setDescription.bind(_this);
        _this.setBody = _this.setBody.bind(_this);
        _this._initialize();
        return _this;
    }
    PanelComponent.prototype.getInstance = function () {
        return this;
    };
    PanelComponent.prototype._initialize = function () {
        var Header = this.getHeader();
        if (Header)
            Header.addEventListener('click', this.toggle.bind(this));
    };
    PanelComponent.prototype.toggle = function () {
        var classnames = this.getClassnames(), isOpen = classnames.contains(OPEN_MODIFIER);
        if (isOpen) {
            this.close();
        }
        else {
            this.open();
        }
        return this;
    };
    PanelComponent.prototype.close = function () {
        var classnames = this.getClassnames();
        classnames.remove(OPEN_MODIFIER);
        return this;
    };
    PanelComponent.prototype.open = function () {
        var classnames = this.getClassnames();
        classnames.add(OPEN_MODIFIER);
        return this;
    };
    PanelComponent.prototype.show = function () {
        this.open();
        return this;
    };
    PanelComponent.prototype.hide = function () {
        this.close();
        return this;
    };
    PanelComponent.prototype.getButton = function () {
        if (!this._button)
            this._button = this.getElement().querySelector(BUTTON);
        return this._button;
    };
    PanelComponent.prototype.getHeader = function () {
        if (!this._header)
            this._header = this.getElement().querySelector(HEADER);
        return this._header;
    };
    PanelComponent.prototype.getTitle = function () {
        if (!this._title)
            this._title = this.getElement().querySelector(TITLE);
        return this._title;
    };
    PanelComponent.prototype.getSubtitle = function () {
        if (!this._subtitle)
            this._subtitle = this.getElement().querySelector(SUBTITLE);
        return this._subtitle;
    };
    PanelComponent.prototype.getDescription = function () {
        if (!this._description)
            this._description = this.getElement().querySelector(DESCRIPTION);
        return this._description;
    };
    PanelComponent.prototype.getBody = function () {
        if (!this._body)
            this._body = this.getElement().querySelector(BODY);
        return this._body;
    };
    PanelComponent.prototype.setTitle = function (title) {
        this.getTitle().innerHTML = title;
        return this;
    };
    PanelComponent.prototype.setSubtitle = function (subtitle) {
        this.getSubtitle().innerHTML = subtitle;
        return this;
    };
    PanelComponent.prototype.setDescription = function (description) {
        var Description = this.getDescription(), classnames = this.getClassnames(), contains = classnames.contains(NO_DESCRIPTION_MODIFIER), content = description.length > 0;
        if (content && contains)
            classnames.remove(NO_DESCRIPTION_MODIFIER);
        if (!content && !contains)
            classnames.add(NO_DESCRIPTION_MODIFIER);
        var El = this.getDescription().querySelector('p');
        El.innerHTML = description;
        return this;
    };
    PanelComponent.prototype.setBody = function (body, isHtmlElement) {
        if (isHtmlElement === void 0) { isHtmlElement = false; }
        if (isHtmlElement) {
            this.getBody().innerHTML = body;
        }
        else {
            this.getBody().appendChild(body);
        }
        return this;
    };
    return PanelComponent;
}(Component));
export { PanelComponent };
//# sourceMappingURL=panel-component.js.map