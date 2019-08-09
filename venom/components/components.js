import { Venom } from "../venom"
import { Component } from "./component"
import {
  COMPONENT_FIELD,
  COMPONENT_PASSWORD_VISIBILITY,
  COMPONENT_NOTIFICATION,
  COMPONENT_BUTTON,
  COMPONENT_FORM,
  COMPONENT_PANEL,
  COMPONENT_LABEL
} from "./constants"
import { FieldHandler } from "./field-component"
import { PasswordVisibilityComponent } from "./password-visibility-component"
import { NotificationComponent } from "./notification-component"
import { ButtonComponent } from "./button-component"
import { FormComponent } from "./form-component"
import { PanelComponent } from "./panel-component"
import { LabelComponent } from "./label-component"

export const Components = {
  initialize: function () {
    const
      elements = document.querySelectorAll('[data-venom]'),
      elementsCount = elements.length

    if (elementsCount <= 0) return false

    for (let i = 0; i < elementsCount; i++) {
      const
        el = elements[i], {
          dataset: {
            alias,
            component
          }
        } = el

      let Instance = false

      if (!Venom.get(alias)) {
        const NewComponent = new Component(el).getInstance()
        if (component === COMPONENT_FIELD) Instance = { alias, component: new FieldHandler(NewComponent).getInstance() }
        if (component === COMPONENT_PASSWORD_VISIBILITY) Instance = { alias, component: new PasswordVisibilityComponent(NewComponent).getInstance() }
        if (component === COMPONENT_NOTIFICATION) Instance = { alias, component: new NotificationComponent(NewComponent).getInstance() }
        if (component === COMPONENT_BUTTON) Instance = { alias, component: new ButtonComponent(NewComponent).getInstance() }
        if (component === COMPONENT_FORM) Instance = { alias, component: new FormComponent(NewComponent).getInstance() }
        if (component === COMPONENT_PANEL) Instance = { alias, component: new PanelComponent(NewComponent).getInstance() }
        if (component === COMPONENT_LABEL) Instance = { alias, component: new LabelComponent(NewComponent).getInstance() }
        Venom.subscribe(Instance)
      }
    }
  },
  reload: function () {
    this.initialize()
  }
}