#  Button Component

The ` button-component` is component to handle a button element in DOM Tree.
Using `venom`, this component can be modified.

## Attributes

Theses attributes, if required, need be instead in document using [data-attributes](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/data-*).

| Name | Required | Type | Description |
| ---- | -------- | ---- | ----------- |
| `component` | `true` | `string` | Must be `button` |
| `alias` | `true` | `string`,`int` | The unique id or name of this component |

## Proptype

| Function | Param | Description |
| -------- | ----- | ----------- |
| `getInstance` | | Retrieve `this` (typeof `Component`) reference of class |
| `getElement` | | Retrieve the element (typeof [HTMLElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement) instance |
| `changeContent` | `string` | Change the [innerHTML](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML) of current element |
| `setIsEnabled` | | Turns `element` visible (add css `helper--hidden` classname) |
| `setIsDisabled` | | Turns `element` invisible (remove css `helper--hidden` classname) |
| `injectHandler` | `{ trigger, handler }` | Add a event listener on this element reference |
| `startLoading` | `string` | Disable this button to prevent double click and change content |
| `stopLoading` |  | Enable this button and change content to origin |

The rest of helpers must be queried on [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Usage

For create a instance in `venom` and print a `HTMLElement` in your document.

**HTML**

```html
<button class="button button--default" data-alias="my-custom-button" data-component="button" data-venom></button>
```

**Javascript**

```javascript
import { Venom } from "venom"

const MyCustomButtonComponent = Venom.get(`my-custom-button`).component

MyCustomButtonComponent
  .changeContent('Click here')
  .setIsEnabled()
```