# Field Component

The `field-component` is component to create an styled and handled input element in your document.
Using `venom`, this component can be modified.

## Attributes

Theses attributes, if required, need be instead in document using [data-attributes](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/data-*).

| Name | Required | Type | Description |
| ---- | -------- | ---- | ----------- |
| `component` | `true` | `string` | Must be `field` |
| `alias` | `true` | `string`,`int` | The unique id or name of this component |
| `validator` | `false` | `string` | List with pipe the validators to be applied in this component |
| `trigger` | `false` | `string` | If component have validators, the trigger define when validator is visible |
| `target` | `false` | `string` | If the target attribute is present and has a `venom` instance of a component (using `alias`), when that validator is `true`, toggle a `disabled` attribute of the target element |


## Proptype

| Function | Param | Description |
| -------- | ----- | ----------- |
| `getInstance` | | Retrieve `this` (typeof `Component`) reference of class |
| `getElement` | | Retrieve the element (typeof [HTMLElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement) instance |
| `setEvent` | **event**`object` | Create a instance of created [event](https://developer.mozilla.org/pt-BR/docs/Web/Events) for this class |
| `getEvent` | | Retrieve the instance of [event](https://developer.mozilla.org/pt-BR/docs/Web/Events) instantiated |
| `setValue` | **value**`string` | Define the `value` of element or event instantiated |
| `getValue` | | Retrieve the `value` of element or event instantiated |

The rest of helpers must be queried on [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Validators

| Name | Description |
| ---- | ----------- |
| `mixed` | The value must be a physical (CPF) or legal (CNPJ) person document |
| `min` | Mininum characters length |
| `max` | Maximum characters length |
| `numeric` | Only numeric characters, a reg exp to [1-9] |
| `email` | A valid email address |

## Usage

For create a instance in `venom` and print a `HTMLElement` in your document.

**HTML**

```html
<input class="form form__field" data-venom data-validator="min|max" data-min-length="5" data-trigger="blur" data-max-length="48" data-alias="my-custom-field-component" data-component="field" type="text" />
```

**Javascript**

```javascript
import { Venom } from "madeiramadeira-venom"

const MyCustomFieldComponent = Venom.get(`my-custom-field-component`).component

MyCustomFieldComponent.setValue('testing dynamic set field value')

const value = MyCustomFieldComponent.getValue()
// console.log(value)
// output 'testing dynamic set field value'

```

**Create a custom keypress event**
```javascript
import { Venom } from "venom"

const MyCustomFieldComponent = Venom.get(`my-custom-field-component`).component
const element = MyCustomFieldComponent.getElement()

function myCustomKeypressHandler(event) {
  const component = MyCustomFieldComponent.getInstance()
  component.setEvent(event) // to apply event handler in current venom component instance
  const handledValue = component.getValue()
  console.log(handledValue)
}

element.addEventListener('keypress', myCustomKeypressHandler)
```