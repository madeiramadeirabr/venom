# Panel Component

The `form-component` is component to create a component class instance of form.
Using `venom`, this component can be modified.

## Attributes

Theses attributes, if required, need be instead in document using [data-attributes](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/data-*).

| Name        | Required | Type           | Description                             |
| ----------- | -------- | -------------- | --------------------------------------- |
| `component` | `true`   | `string`       | Must be `notification`                  |
| `alias`     | `true`   | `string`,`int` | The unique id or name of this component |

## Proptype

| Function      | Param | Description                                                         |
| ------------- | ----- | ------------------------------------------------------------------- |
| `getInstance` |       | Retrieve `this` (typeof `Component`) reference of class             |
| `show`        |       | Make this element visible                                           |
| `hide`        |       | Make this element invisible                                         |
| `toggle`      |       | Change ths current state of this element, make invisible or visible |

The rest of helpers must be queried on [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Usage

For create a instance in `venom` and print a `HTMLElement` in your document.

**HTML**

```html
<div class="panel" data-alias="my-custom-panel-component" data-component="panel" data-venom></div>
```

**Typescript**

```typescript
import { Venom } from 'venom'
import { PanelComponent } from '@madeiramadeira/venom/components/panel-component/index'

const MyCustomPanelComponent = Venom.getComponent(`my-custom-panel-component`) as PanelComponent

MyCustomPanelComponent.show()
```
