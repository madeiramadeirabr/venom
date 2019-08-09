# Notification Component

The `notification-component` is component to create an styled notification element in DOM Tree.
Using `venom`, this component can be modified.

## Attributes

Theses attributes, if required, need be instead in document using [data-attributes](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/data-*).

| Name | Required | Type | Description |
| ---- | -------- | ---- | ----------- |
| `component` | `true` | `string` | Must be `notification` |
| `alias` | `true` | `string`,`int` | The unique id or name of this component |
| `visible` | `false` | `boolean` | The unique id or name of this component |

## Proptype

| Function | Param | Description |
| -------- | ----- | ----------- |
| `getInstance` | | Retrieve `this` (typeof `Component`) reference of class |
| `getElement` | | Retrieve the element (typeof [HTMLElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement) instance |
| `changeContent` | `string` | Change the [innerHTML](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML) of current element |
| `changeToVisible` | | Turns `element` visible (add css `helper--hidden` classname) |
| `changeToInvisible` | | Turns `element` invisible (remove css `helper--hidden` classname) |
| `changeModifierTo` | `modifier` | Change `element` class name, and apply an styled modifier |
| `hideIn` | `milliseconds` | Change `element` class name, and hide in `milliseconds` specified |

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
import { DANGER_MODIFIER_CLASSNAME }  from "venom/components/notification"

const MyCustomnotificationComponent = Venom.get(`my-custom-notification`).component

MyCustomnotificationComponent
  .changeContent('My awesome and friendly message here')
  .changeModifierTo(DANGER_MODIFIER_CLASSNAME)
  .changeToVisible()
```

## Modifier

The file has located in `venom/components/notification`.

| Name | constant |
| ---- | -------- |
| danger | `DANGER_MODIFIER_CLASSNAME` |
| warning | `WARNING_MODIFIER_CLASSNAME` |
| info | `INFO_MODIFIER_CLASSNAME` |
| success | `SUCCESS_MODIFIER_CLASSNAME` |
