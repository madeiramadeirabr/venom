"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("./utils/uuid");
var Component = (function () {
    function Component(el) {
        this._el = el;
        console.log("Venom/Component: " + new Date().toISOString() + ": " + this._getAlias(), this);
    }
    Component.prototype.getElement = function () {
        return this._el;
    };
    Component.prototype._getAlias = function () {
        var alias = this._el.dataset.alias;
        if (alias)
            return alias;
        var id = this._el.id;
        if (id)
            return id;
        return uuid_1.uuid().toString();
    };
    Component.prototype.attachEvent = function (trigger, callback) {
        this._el.addEventListener(trigger, callback);
        return this;
    };
    Component.prototype._setUid = function (uid) {
        this._uid = uid;
    };
    Component.prototype.getUid = function () {
        return this._uid;
    };
    Component.prototype._isInputType = function () {
        return this._el instanceof HTMLInputElement;
    };
    return Component;
}());
exports.Component = Component;
//# sourceMappingURL=component.js.map