"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("./utils/uuid");
exports.Venom = {
    observers: [],
    create: function (instance) {
        var id = uuid_1.uuid();
        this.observers[id] = instance;
        return id;
    },
    update: function (uid, instance) {
        this.observers[uid] = instance;
    },
    get: function (aliasOrUid) {
        if (typeof aliasOrUid === 'string') {
            var indexOf_1 = -1;
            this.observers.map(function (observer, index) {
                if (observer.alias === aliasOrUid)
                    indexOf_1 = index;
            });
            if (indexOf_1 >= 0)
                return this.observers[indexOf_1].component;
        }
        return this.observers[aliasOrUid].component;
    },
    delete: function (f) {
        this.observers = this.observers.filter(function (subscriber) { return subscriber !== f; });
    }
};
//# sourceMappingURL=venom.js.map