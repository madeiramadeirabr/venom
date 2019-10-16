"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venom = {
    observers: [],
    subscribe: function (instance) {
        var alias = instance.alias;
        var indexOf = -1;
        this.observers.map(function (observer, index) {
            if (observer && observer.alias === alias) {
                indexOf = index;
            }
        });
        if (indexOf <= 0) {
            this.observers.push(instance);
        }
        else {
            this.update(instance, indexOf);
        }
        console.log('Venom', this.observers);
    },
    unsubscribe: function (f) {
        this.observers = this.observers.filter(function (subscriber) { return subscriber !== f; });
    },
    get: function (alias) {
        if (alias === void 0) { alias = ''; }
        if (!alias)
            return false;
        var indexOf = -1;
        this.observers.map(function (observer, index) {
            if (observer.alias === alias)
                indexOf = index;
        });
        if (indexOf >= 0)
            return this.observers[indexOf];
        return false;
    },
    getComponent: function (alias) {
        if (alias === void 0) { alias = ''; }
        if (!alias)
            return false;
        var indexOf = -1;
        this.observers.map(function (observer, index) {
            if (observer.alias === alias)
                indexOf = index;
        });
        if (indexOf >= 0)
            return this.observers[indexOf].component;
        return false;
    },
    update: function (instance, position) {
        this.observers[position] = instance;
        return this;
    }
};
//# sourceMappingURL=venom.js.map