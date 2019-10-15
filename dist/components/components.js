import { Venom } from 'venom';
import { COMPONENT_FIELD, COMPONENT_PASSWORD_VISIBILITY, COMPONENT_NOTIFICATION, COMPONENT_BUTTON, COMPONENT_PANEL, COMPONENT_TABS, COMPONENT_COLLAPSE, COMPONENT_MODAL, COMPONENT_TOGGLE, COMPONENT_LOADING } from './constants';
import { FieldHandler } from './field-component/index';
import { PasswordVisibilityComponent } from './password-visibility-component/index';
import { NotificationComponent } from './notification-component/index';
import { ButtonComponent } from './button-component/index';
import { PanelComponent } from './panel-component/index';
import { Component } from './component';
import { TabsComponent } from './tabs-component/tabs-component';
import { CollapsComponent } from './collapse-component/collapse-component';
import { ModalComponent } from './modal-component/index';
import { ToggleComponent } from './toggle-component/index';
import { LoadingComponent } from './loading-component/index';
export var Components = {
    initialize: function (alias) {
        if (alias === void 0) { alias = ''; }
        var reload = alias !== null ? true : false, elements = reload ? document.querySelector("[data-alias=" + alias + "]").querySelectorAll('[data-venom]') : document.querySelectorAll('[data-venom]'), elementsCount = elements.length;
        if (elementsCount <= 0)
            return false;
        for (var i = 0; i < elementsCount; i++) {
            var el = elements[i], _a = el.dataset, alias_1 = _a.alias, component = _a.component;
            var Instance = false;
            if (!Venom.get(alias_1) || reload) {
                if (component) {
                    if (component === COMPONENT_FIELD)
                        Instance = {
                            alias: alias_1,
                            component: new FieldHandler(el).getComponent()
                        };
                    if (component === COMPONENT_PASSWORD_VISIBILITY)
                        Instance = {
                            alias: alias_1,
                            component: new PasswordVisibilityComponent(el).getComponent()
                        };
                    if (component === COMPONENT_NOTIFICATION)
                        Instance = {
                            alias: alias_1,
                            component: new NotificationComponent(el).getComponent()
                        };
                    if (component === COMPONENT_BUTTON)
                        Instance = {
                            alias: alias_1,
                            component: new ButtonComponent(el).getComponent()
                        };
                    if (component === COMPONENT_PANEL)
                        Instance = {
                            alias: alias_1,
                            component: new PanelComponent(el).getComponent()
                        };
                    if (component === COMPONENT_TABS)
                        Instance = {
                            alias: alias_1,
                            component: new TabsComponent(el).getComponent()
                        };
                    if (component === COMPONENT_COLLAPSE)
                        Instance = {
                            alias: alias_1,
                            component: new CollapsComponent(el).getComponent()
                        };
                    if (component === COMPONENT_MODAL)
                        Instance = {
                            alias: alias_1,
                            component: new ModalComponent(el).getComponent()
                        };
                    if (component === COMPONENT_TOGGLE)
                        Instance = {
                            alias: alias_1,
                            component: new ToggleComponent(el).getComponent()
                        };
                    if (component === COMPONENT_LOADING)
                        Instance = {
                            alias: alias_1,
                            component: new LoadingComponent(el).getComponent()
                        };
                }
                if (!Instance) {
                    Instance = { alias: alias_1, component: new Component(el).getComponent() };
                }
                Venom.subscribe(Instance);
            }
        }
    },
    reload: function (alias) {
        if (alias === void 0) { alias = ''; }
        this.initialize(alias);
    }
};
//# sourceMappingURL=components.js.map