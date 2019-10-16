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
var CollapsComponent = (function (_super) {
    __extends(CollapsComponent, _super);
    function CollapsComponent(element) {
        var _this = _super.call(this, element) || this;
        _this._initialize();
        return _this;
    }
    CollapsComponent.prototype.getInstance = function () {
        return this;
    };
    CollapsComponent.prototype._initialize = function () {
        var _this = this;
        this._button = this.getElement().querySelector('button');
        this._container = this.getElement().querySelector('.collapse__container');
        this._content = this.getElement().querySelector('.collapse__content');
        this._container.addEventListener('click', function () {
            _this.change();
        });
    };
    CollapsComponent.prototype.change = function () {
        var isHidden = this._content.classList.contains(constants_1.HIDDEN_MODIFIER);
        if (isHidden) {
            this.open();
        }
        else {
            this.close();
        }
        return this;
    };
    CollapsComponent.prototype.close = function () {
        this._content.classList.add(constants_1.HIDDEN_MODIFIER);
        this._button.classList.add('collapse__open');
        this._button.classList.remove('collapse__close');
        return this;
    };
    CollapsComponent.prototype.closeAll = function () {
        if (this._element.parentElement) {
            this._element.parentElement.querySelectorAll('.collapse__content').forEach(function (content) {
                content.classList.add(constants_1.HIDDEN_MODIFIER);
            });
            this._element.parentElement.querySelectorAll('.collapse__container').forEach(function (container) {
                ;
                container.childNodes[3].classList
                    .remove('collapse__close')(container.childNodes[3])
                    .classList.add('collapse__open');
            });
        }
        return this;
    };
    CollapsComponent.prototype.open = function () {
        this.closeAll();
        this._content.classList.remove(constants_1.HIDDEN_MODIFIER);
        this._button.classList.remove('collapse__open');
        this._button.classList.add('collapse__close');
        return this;
    };
    return CollapsComponent;
}(component_1.Component));
exports.CollapsComponent = CollapsComponent;
//# sourceMappingURL=collapse-component.js.map