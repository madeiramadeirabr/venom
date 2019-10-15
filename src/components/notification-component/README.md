# Notification Component

The `notification-component` is component to create an styled notification element in DOM Tree.
Using `venom`, this component can be modified.

## Attributes

Theses attributes, if required, need be instead in document using [data-attributes](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/data-*).

| Name | Required | Type | Description |
| ---- | -------- | ---- | ----------- |
| `component` | `true`  | `string`       | Must be `notification` |
| `alias`     | `true`  | `string`,`int` | The unique id or name of this component |
| `visible`   | `false` | `boolean`      | The unique id or name of this component |

## Proptype

| Function | Param | Description |
| -------- | ----- | ----------- |
| `getInstance` |                | Retrieve `this` (typeof `Component`) reference of class |
| `setContent`  | `string`       | Change the [innerHTML](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML) of current element |
| `setVisibile` |                | Turns `element` visible or invisible (add css `--hidden` classname) |
| `hideIn`      | `milliseconds` | Change `element` class name, and hide in `milliseconds` specified |

The rest of helpers must be queried on [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Usage

For create a instance in `venom` and print a `HTMLElement` in your document.

**HTML**

```html
<div class="notification notification__container" data-alias="my-custom-notification" data-component="notification" data-venom data-visible="false"></div>
```

**Javascript**

```javascript
import { Venom } from "venom"
import { DANGER_MODIFIER }  from "venom/components/constants"

const MyCustomnotificationComponent = Venom.getComponent(`my-custom-notification`)

MyCustomnotificationComponent
  .setContent('My awesome and friendly message here')
  .setModifier(DANGER_MODIFIER)
  .setVisibile(true)
  .hideIn(10000)
```

## Modifier

The file has located in `venom/components/constants`.

| Name | constant |
| ---- | -------- |
| danger | `DANGER_MODIFIER` |
| warning | `WARNING_MODIFIER` |
| info | `INFO_MODIFIER` |
| success | `SUCCESS_MODIFIER` |
