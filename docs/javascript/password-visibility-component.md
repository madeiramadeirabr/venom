# Password Visibility Component

The `password-visibility-component` is component to create an styled button in document to handle a target user input password.
Using `venom`, this component can be modified.

## Attributes

Theses attributes, if required, need be instead in document using [data-attributes](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/data-*).

| Name        | Required | Type     | Description                             |
| ----------- | -------- | -------- | --------------------------------------- |
| `component` | `true`   | `string` | Must be `password-visibility`           |
| `alias`     | `true`   | `string` | The unique id or name of this component |
| `target`    | `true`   | `string` | The alias of target component           |

## Proptype

| Function      | Param | Description                                             |
| ------------- | ----- | ------------------------------------------------------- |
| `getInstance` |       | Retrieve `this` (typeof `Component`) reference of class |

The rest of helpers must be queried on [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Usage

For create a instance in `venom` and print a `HTMLElement` in your document.

**HTML**

```html
<div
  class="form form__group-icon --with-pointer"
  data-alias="my-password-visibility-component"
  data-component="password-visibility"
  data-target="my-input-password-component-target"
  data-venom
></div>
```

**Typescript**

```typescript
import { Venom } from 'venom'
import { PasswordVisibilityComponent } from '@madeiramadeira/venom/components/panel-component/index'

const PasswordVisibilityComponent = Venom.getComponent(`my-password-visibility-component`) as PasswordVisibilityComponent
```
