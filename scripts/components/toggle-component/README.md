# Toggle Component

The `toggle-component` is component to create an styled button in document to handle a target user input password.
Using `venom`, this component can be modified.

## Attributes

Theses attributes, if required, need be instead in document using [data-attributes](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/data-*).

| Name        | Required | Type     | Description                             |
| ----------- | -------- | -------- | --------------------------------------- |
| `component` | `true`   | `string` | Must be `password-visibility`           |
| `alias`     | `true`   | `string` | The unique id or name of this component |

## Proptype

| Function      | Param | Description                                             |
| ------------- | ----- | ------------------------------------------------------- |
| `getInstance` |       | Retrieve `this` (typeof `Component`) reference of class |
| `turnOn`      |       | Turn on toggle                                          |
| `turnOff`     |       | Turn off toggle                                         |
| `turn`        |       | Turn on/off toggle                                      |
| `isOn`        |       | Return if current status is on (active) `boolean`       |

The rest of helpers must be queried on [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Usage

For create a instance in `venom` and print a `HTMLElement` in your document.

**HTML**

```html
<label class="toggle" data-alias="my-toggle-component" data-component="toggle" data-venom>
  <input type="checkbox" />
  <span class="toggle__switch"></span>
  <span class="toggle__track"></span>
</label>
```

**Javascript**

```javascript
import { Venom } from 'venom'

const ToggleComponent = Venom.getComponent(`my-toggle-component`)
ToggleComponent.turnOn()

const isActive = ToggleComponent.isOn()
```
