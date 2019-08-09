# Password Visibility Component

The `password-visibility-component` is component to create an styled button in document to handle a target user input password.
Using `venom`, this component can be modified.

## Attributes

Theses attributes, if required, need be instead in document using [data-attributes](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/data-*).

| Name | Required | Type | Description |
| ---- | -------- | ---- | ----------- |
| `component` | `true` | `string` | Must be `password-visibility` |
| `alias` | `true` | `string`,`int` | The unique id or name of this component |
| `target` | `true` | `string`,`int` | The alias of target component |

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
<div class="form form__group-icon helper--with-pointer" data-alias="my-password-visibility-component" data-component="password-visibility" data-target="my-input-password-component-target" data-venom></div>
```

**Javascript**

```javascript
import { Venom } from "venom"

const PasswordVisibilityComponent = Venom.get(`my-password-visibility-component`).component
// TODO create handlers for this component

```
