# Form Component

The `form-component` is component to create a component class instance of form.
Using `venom`, this component can be modified.

## Attributes

Theses attributes, if required, need be instead in document using [data-attributes](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/data-*).

| Name | Required | Type | Description |
| ---- | -------- | ---- | ----------- |
| `component` | `true` | `string` | Must be `notification` |
| `alias` | `true` | `string`,`int` | The unique id or name of this component |

## Proptype

| Function | Param | Description |
| -------- | ----- | ----------- |
| `getInstance` | | Retrieve `this` (typeof `Component`) reference of class |
| `getElement` | | Retrieve the element (typeof [HTMLElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement) instance |

The rest of helpers must be queried on [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Usage

For create a instance in `venom` and print a `HTMLElement` in your document.

**HTML**

```html
<div class="form" data-alias="my-custom-form-component" data-component="form" data-venom></div>
```

**Javascript**

```javascript
import { Venom } from "venom"

const MyCustomnotificationComponent = Venom.get(`my-custom-form-component`).component

```