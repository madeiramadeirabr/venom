"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var venom_1 = require("../venom");
var constants_1 = require("./constants");
var index_1 = require("./field-component/index");
var index_2 = require("./password-visibility-component/index");
var index_3 = require("./notification-component/index");
var index_4 = require("./button-component/index");
var index_5 = require("./panel-component/index");
var component_1 = require("./component");
var tabs_component_1 = require("./tabs-component/tabs-component");
var collapse_component_1 = require("./collapse-component/collapse-component");
var index_6 = require("./modal-component/index");
var index_7 = require("./toggle-component/index");
var index_8 = require("./loading-component/index");
exports.Components = {
    initialize: function (alias) {
        if (alias === void 0) { alias = null; }
        var reload = (alias !== null && alias !== '') ? true : false, elements = reload ? document.querySelector("[data-alias=" + alias + "]").querySelectorAll('[data-venom]') : document.querySelectorAll('[data-venom]'), elementsCount = elements.length;
        if (elementsCount <= 0)
            return false;
        for (var i = 0; i < elementsCount; i++) {
            var el = elements[i], _a = el.dataset, alias_1 = _a.alias, component = _a.component;
            var Instance = false;
            if (!venom_1.Venom.get(alias_1) || reload) {
                if (component) {
                    if (component === constants_1.COMPONENT_FIELD)
                        Instance = {
                            alias: alias_1,
                            component: new index_1.FieldHandler(el).getComponent()
                        };
                    if (component === constants_1.COMPONENT_PASSWORD_VISIBILITY)
                        Instance = {
                            alias: alias_1,
                            component: new index_2.PasswordVisibilityComponent(el).getComponent()
                        };
                    if (component === constants_1.COMPONENT_NOTIFICATION)
                        Instance = {
                            alias: alias_1,
                            component: new index_3.NotificationComponent(el).getComponent()
                        };
                    if (component === constants_1.COMPONENT_BUTTON)
                        Instance = {
                            alias: alias_1,
                            component: new index_4.ButtonComponent(el).getComponent()
                        };
                    if (component === constants_1.COMPONENT_PANEL)
                        Instance = {
                            alias: alias_1,
                            component: new index_5.PanelComponent(el).getComponent()
                        };
                    if (component === constants_1.COMPONENT_TABS)
                        Instance = {
                            alias: alias_1,
                            component: new tabs_component_1.TabsComponent(el).getComponent()
                        };
                    if (component === constants_1.COMPONENT_COLLAPSE)
                        Instance = {
                            alias: alias_1,
                            component: new collapse_component_1.CollapsComponent(el).getComponent()
                        };
                    if (component === constants_1.COMPONENT_MODAL)
                        Instance = {
                            alias: alias_1,
                            component: new index_6.ModalComponent(el).getComponent()
                        };
                    if (component === constants_1.COMPONENT_TOGGLE)
                        Instance = {
                            alias: alias_1,
                            component: new index_7.ToggleComponent(el).getComponent()
                        };
                    if (component === constants_1.COMPONENT_LOADING)
                        Instance = {
                            alias: alias_1,
                            component: new index_8.LoadingComponent(el).getComponent()
                        };
                }
                if (!Instance) {
                    Instance = { alias: alias_1, component: new component_1.Component(el).getComponent() };
                }
                venom_1.Venom.subscribe(Instance);
            }
        }
    },
    reload: function (alias) {
        if (alias === void 0) { alias = ''; }
        this.initialize(alias);
    }
};
//# sourceMappingURL=components.js.map