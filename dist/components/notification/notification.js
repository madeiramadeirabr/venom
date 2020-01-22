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
var modifiers_1 = require("../../modifiers");
exports.NOTIFICATION_PRIMARY_MODIFIER = 'notification--is-primary', exports.NOTIFICATION_SECONDAY_MODIFIER = 'notification--is-secondary', exports.NOTIFICATION_SUCCESS_MODIFIER = 'notification--is-success', exports.NOTIFICATION_DANGER_MODIFIER = 'notification--is-danger', exports.NOTIFICATION_WARNING_MODIFIER = 'notification--is-warning', exports.NOTIFICATION_MODIFIERS = [exports.NOTIFICATION_PRIMARY_MODIFIER, exports.NOTIFICATION_SECONDAY_MODIFIER, exports.NOTIFICATION_SUCCESS_MODIFIER, exports.NOTIFICATION_DANGER_MODIFIER, exports.NOTIFICATION_WARNING_MODIFIER];
var Notification = (function (_super) {
    __extends(Notification, _super);
    function Notification(el) {
        var _this = _super.call(this, el) || this;
        _this._setUid(venom_1.Venom.create({ alias: _this._getAlias(), component: _this.getInstance() }));
        _this._bootstrap();
        return _this;
    }
    Notification.prototype._bootstrap = function () {
        var _this = this;
        var CloseButton = this.getCloseButton();
        if (CloseButton) {
            var CloseComponent = new component_1.Component(CloseButton);
            CloseComponent.attachEvent('click', function (e) {
                _this.setVisibile(false);
                e.stopPropagation();
            });
        }
    };
    Notification.prototype.getCloseButton = function () {
        if (!this._close) {
            var Close = (this._el.querySelector('.notification__close'));
            if (Close)
                this._close = Close;
        }
        return this._close;
    };
    Notification.prototype.getContent = function () {
        if (!this._content) {
            var Content = (this._el.querySelector('.notification__content'));
            if (Content)
                this._content = Content;
        }
        return this._content;
    };
    Notification.prototype.getInstance = function () {
        return this;
    };
    Notification.prototype.getElement = function () {
        return this._el;
    };
    Notification.prototype.setModifier = function (notificationModifier) {
        var classList = this.getElement().classList;
        exports.NOTIFICATION_MODIFIERS.map(function (modifier) {
            if (classList.contains(modifier))
                classList.remove(modifier);
        });
        if (!classList.contains(notificationModifier))
            classList.add(notificationModifier);
        return this;
    };
    Notification.prototype.setVisibile = function (visible, delay) {
        var _this = this;
        if (visible === void 0) { visible = true; }
        if (delay === void 0) { delay = 0; }
        var toggle = function () {
            var isHidden = _this.getElement().classList.contains(modifiers_1.HELPER_HIDDEN_MODIFIER);
            if (visible) {
                if (isHidden)
                    _this.getElement().classList.remove(modifiers_1.HELPER_HIDDEN_MODIFIER);
            }
            else {
                if (!isHidden)
                    _this.getElement().classList.add(modifiers_1.HELPER_HIDDEN_MODIFIER);
            }
        };
        if (delay > 0) {
            setTimeout(toggle, delay);
        }
        else {
            toggle();
        }
        return this;
    };
    Notification.prototype.setContent = function (content) {
        this.getContent().innerHTML = content;
        return this;
    };
    return Notification;
}(component_1.Component));
exports.Notification = Notification;
//# sourceMappingURL=notification.js.map