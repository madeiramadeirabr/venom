var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Email, Mixed, LegalPerson, MinMax, Min, Max, Numeric, Username, User, Mobile, Phone, Zipcode, State, Password, Common, Monetary } from './handlers/index';
import { FieldComponent } from './field-component';
var FieldHandler = (function () {
    function FieldHandler(el) {
        this.initialize(el);
    }
    FieldHandler.prototype.getComponent = function () {
        return this._component;
    };
    FieldHandler.prototype.initialize = function (el) {
        var _a = el.dataset, validator = _a.validator, trigger = _a.trigger, handlers = [];
        if (validator) {
            if (validator.includes('email')) {
                var vEmail = { trigger: 'keyup', name: 'email', handler: Email };
                handlers.push(vEmail);
                if (trigger && trigger !== 'keyup')
                    handlers.push(__assign(__assign({}, vEmail), { trigger: trigger }));
            }
            if (validator.includes('mixed')) {
                var vMixed = { trigger: 'keyup', name: 'mixed', handler: Mixed };
                handlers.push(vMixed);
                if (trigger && trigger !== 'keyup')
                    handlers.push(__assign(__assign({}, vMixed), { trigger: trigger }));
            }
            if (validator.includes('legal-person')) {
                var vLegalPerson = { trigger: 'keyup', name: 'legal-person', handler: LegalPerson };
                handlers.push(vLegalPerson);
                if (trigger && trigger !== 'keyup')
                    handlers.push(__assign(__assign({}, vLegalPerson), { trigger: trigger }));
            }
            if (validator.includes('numeric')) {
                var vNumeric = { trigger: 'keyup', name: 'numeric', handler: Numeric };
                handlers.push(vNumeric);
                if (trigger && trigger !== 'keyup')
                    handlers.push(__assign(__assign({}, vNumeric), { trigger: trigger }));
            }
            if (validator.includes('min') && validator.includes('max')) {
                var vMinMax = { trigger: 'keyup', name: 'min-max', handler: MinMax };
                handlers.push(vMinMax);
                if (trigger && trigger !== 'keyup')
                    handlers.push(__assign(__assign({}, vMinMax), { trigger: trigger }));
            }
            if (validator.includes('min') && !validator.includes('max')) {
                var vMin = { trigger: 'keyup', name: 'min', handler: Min };
                handlers.push(vMin);
                if (trigger && trigger !== 'keyup')
                    handlers.push(__assign(__assign({}, vMin), { trigger: trigger }));
            }
            if (validator.includes('max') && !validator.includes('min')) {
                var vMax = { trigger: 'keyup', name: 'max', handler: Max };
                handlers.push(vMax);
                if (trigger && trigger !== 'keyup')
                    handlers.push(__assign(__assign({}, vMax), { trigger: trigger }));
            }
            if (validator.includes('username')) {
                var vUsername = { trigger: 'keyup', name: 'username', handler: Username };
                handlers.push(vUsername);
                if (trigger && trigger !== 'keyup')
                    handlers.push(__assign(__assign({}, vUsername), { trigger: trigger }));
            }
            if (validator.includes('mobile')) {
                var vMobile = { trigger: 'keyup', name: 'mobile', handler: Mobile };
                handlers.push(vMobile);
                if (trigger && trigger !== 'keyup')
                    handlers.push(__assign(__assign({}, vMobile), { trigger: trigger }));
            }
            if (validator.includes('phone')) {
                var vPhone = { trigger: 'keyup', name: 'phone', handler: Phone };
                handlers.push(vPhone);
                if (trigger && trigger !== 'keyup')
                    handlers.push(__assign(__assign({}, vPhone), { trigger: trigger }));
            }
            if (validator.includes('zipcode')) {
                var vZipcode = { trigger: 'keyup', name: 'zipcode', handler: Zipcode };
                handlers.push(vZipcode);
                if (trigger && trigger !== 'keyup')
                    handlers.push(__assign(__assign({}, vZipcode), { trigger: trigger }));
            }
            if (validator.includes('user') && validator.includes('user')) {
                var vUser = { trigger: 'keyup', name: 'user', handler: User };
                handlers.push(vUser);
                if (trigger && trigger !== 'keyup')
                    handlers.push(__assign(__assign({}, vUser), { trigger: trigger }));
            }
            if (validator.includes('password')) {
                var vPassword = { trigger: 'keyup', name: 'password', handler: Password };
                handlers.push(vPassword);
                if (trigger && trigger !== 'keyup')
                    handlers.push(__assign(__assign({}, vPassword), { trigger: trigger }));
            }
            if (validator.includes('monetary')) {
                var vMonetary = { trigger: 'keyup', name: 'monetary', handler: Monetary };
                handlers.push(vMonetary);
                if (trigger && trigger !== 'keyup')
                    handlers.push(__assign(__assign({}, vMonetary), { trigger: trigger }));
            }
        }
        else {
            var vCommon = { trigger: 'keyup', name: 'common', handler: Common };
            handlers.push(vCommon);
        }
        var vBlurState = { trigger: 'blur', name: 'state', handler: State, ignore: true };
        handlers.push(vBlurState);
        var vFocusState = { trigger: 'focus', name: 'state', handler: State, ignore: true };
        handlers.push(vFocusState);
        this._component = new FieldComponent(el, handlers);
    };
    return FieldHandler;
}());
export { FieldHandler };
//# sourceMappingURL=field-handler.js.map