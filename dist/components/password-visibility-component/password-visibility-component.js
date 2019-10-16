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
var venom_1 = require("../../venom");
var component_1 = require("../component");
var constants_1 = require("../constants");
var PasswordVisibilityComponent = (function (_super) {
    __extends(PasswordVisibilityComponent, _super);
    function PasswordVisibilityComponent(el) {
        var _this = _super.call(this, el) || this;
        _this._onChangeVisibility = function () {
            var type = _this._target.getType(), isVisible = type === 'text';
            _this._target.setType(isVisible ? 'password' : 'text');
            if (isVisible) {
                _this._getInvisible().classList.add(constants_1.HIDDEN_MODIFIER);
                _this._getVisible().classList.remove(constants_1.HIDDEN_MODIFIER);
            }
            else {
                _this._getVisible().classList.add(constants_1.HIDDEN_MODIFIER);
                _this._getInvisible().classList.remove(constants_1.HIDDEN_MODIFIER);
            }
        };
        _this.getInstance = _this.getInstance.bind(_this);
        _this._initialize();
        return _this;
    }
    PasswordVisibilityComponent.prototype.getInstance = function () {
        return this;
    };
    PasswordVisibilityComponent.prototype._getVisible = function () {
        return this._visible;
    };
    PasswordVisibilityComponent.prototype._getInvisible = function () {
        return this._invisible;
    };
    PasswordVisibilityComponent.prototype._createVisible = function () {
        var visible = document.createElement('span');
        visible.setAttribute('title', 'Mostrar senha');
        visible.dataset.passwordVisibility = 'on';
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z');
        svg.setAttribute('style', 'width: 20px');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('viewbox', '0 0 640 512');
        svg.setAttribute('width', '100%');
        svg.appendChild(path);
        visible.innerHTML = svg.outerHTML;
        this._visible = visible;
        this.getElement().appendChild(visible);
    };
    PasswordVisibilityComponent.prototype._createInvisible = function () {
        var invisible = document.createElement('span');
        invisible.setAttribute('title', 'Esconder senha');
        invisible.dataset.passwordVisibility = 'off';
        invisible.classList.add(constants_1.HIDDEN_MODIFIER);
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z');
        svg.setAttribute('style', 'width: 20px');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('viewbox', '0 0 576 512');
        svg.setAttribute('width', '100%');
        svg.appendChild(path);
        invisible.innerHTML = svg.outerHTML;
        this._invisible = invisible;
        this.getElement().appendChild(invisible);
    };
    PasswordVisibilityComponent.prototype._initialize = function () {
        var target = this.getAttributes().target;
        var targetComponent = venom_1.Venom.getComponent(target);
        if (targetComponent)
            this._target = targetComponent;
        this._createVisible();
        this._createInvisible();
        this.attachEvent('click', this._onChangeVisibility);
    };
    return PasswordVisibilityComponent;
}(component_1.Component));
exports.PasswordVisibilityComponent = PasswordVisibilityComponent;
//# sourceMappingURL=password-visibility-component.js.map