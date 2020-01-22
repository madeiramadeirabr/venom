"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable = (function () {
    function Observable() {
        this.observers = [];
        this.observers = [];
    }
    Observable.prototype.subscribe = function (f) {
        this.observers.push(f);
    };
    Observable.prototype.unsubscribe = function (f) {
        this.observers.filter(function (subscriber) { return subscriber !== f; });
    };
    Observable.prototype.notify = function (data) {
        this.observers.forEach(function (observer) { return observer(data); });
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=observer.js.map