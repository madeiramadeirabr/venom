import { Venom } from 'venom'
import {
  COMPONENT_FIELD,
  COMPONENT_PASSWORD_VISIBILITY,
  COMPONENT_NOTIFICATION,
  COMPONENT_BUTTON,
  COMPONENT_PANEL,
  COMPONENT_TABS,
  COMPONENT_COLLAPSE,
  COMPONENT_MODAL,
  COMPONENT_TOGGLE,
  COMPONENT_LOADING
} from './constants'
import { FieldHandler } from './field-component/index'
import { PasswordVisibilityComponent } from './password-visibility-component/index'
import { NotificationComponent } from './notification-component/index'
import { ButtonComponent } from './button-component/index'
import { PanelComponent } from './panel-component/index'
import { Component } from './component'
import { TabsComponent } from './tabs-component/tabs-component'
import { CollapsComponent } from './collapse-component/collapse-component'
import { ModalComponent } from './modal-component/index'
import { ToggleComponent } from './toggle-component/index'
import { LoadingComponent } from './loading-component/index'

export const Components = {
  initialize: function(alias: string = '') {
    const reload = alias !== null ? true : false,
      // @ts-ignore
      elements: NodeListOf<Element> = reload ? document.querySelector(`[data-alias=${alias}]`).querySelectorAll('[data-venom]') : document.querySelectorAll('[data-venom]'),
      elementsCount: number = elements.length

    if (elementsCount <= 0) return false

    for (let i = 0; i < elementsCount; i++) {
      const el = elements[i],
        {
          dataset: { alias, component }
        } = el as HTMLElement

      let Instance: any = false

      if (!Venom.get(alias as any) || reload) {
        if (component) {
          if (component === COMPONENT_FIELD)
            Instance = {
              alias,
              component: new FieldHandler(el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).getComponent()
            }
          if (component === COMPONENT_PASSWORD_VISIBILITY)
            Instance = {
              alias,
              component: new PasswordVisibilityComponent(el as HTMLSpanElement).getComponent()
            }
          if (component === COMPONENT_NOTIFICATION)
            Instance = {
              alias,
              component: new NotificationComponent(el as HTMLDivElement).getComponent()
            }
          if (component === COMPONENT_BUTTON)
            Instance = {
              alias,
              component: new ButtonComponent(el as HTMLButtonElement).getComponent()
            }
          if (component === COMPONENT_PANEL)
            Instance = {
              alias,
              component: new PanelComponent(el as HTMLDivElement).getComponent()
            }
          if (component === COMPONENT_TABS)
            Instance = {
              alias,
              component: new TabsComponent(el as HTMLDivElement).getComponent()
            }
          if (component === COMPONENT_COLLAPSE)
            Instance = {
              alias,
              component: new CollapsComponent(el as HTMLDivElement).getComponent()
            }
          if (component === COMPONENT_MODAL)
            Instance = {
              alias,
              component: new ModalComponent(el as HTMLDivElement).getComponent()
            }
          if (component === COMPONENT_TOGGLE)
            Instance = {
              alias,
              component: new ToggleComponent(el as HTMLSpanElement).getComponent()
            }
          if (component === COMPONENT_LOADING)
            Instance = {
              alias,
              component: new LoadingComponent(el as HTMLElement).getComponent()
            }
        }

        if (!Instance) {
          Instance = { alias, component: new Component(el).getComponent() }
        }

        Venom.subscribe(Instance)
      }
    }
  },
  reload: function(alias: string = '') {
    this.initialize(alias)
  }
}
