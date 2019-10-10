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
| `setModifier` | **modifier**`string` | Define the `value` of element or event instantiated |

The rest of helpers must be queried on [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Validators

| Name | Description |
| ---- | ----------- |
| `mixed` | The value must be a physical (CPF) or legal (CNPJ) person document |
| `min` | Mininum characters length |
| `max` | Maximum characters length |
| `numeric` | Only numeric characters, a reg exp to [1-9] |
| `email` | A valid email address |
| `zipcode` | A valid zipcode number |

## Usage

For create a instance in `venom` and print a `HTMLElement` in your document.

**HTML**

```html
<div class="text-field">
  <div class="text-field__container">
    <input class="text-field__input" data-venom data-alias="my-custom-text-field" data-component="field" type="text" value="" name="my-custom-text-field" id="my-custom-text-field"/>
    <label class="text-field__label" for="my-custom-text-field">Test</label>
  </div>
  <span class="text-field__helper">helper</span>
</div>
```

**Javascript**

```javascript
import { Venom } from "venom"
import { SUCCESS_MODIFIER } from "venom/components/constants"

const MyCustomTextFieldComponent = Venom.get(`my-custom-text-field`).component

MyCustomTextFieldComponent
.setFocus()
.setValue('testing dynamic set field value')
.setState(SUCCESS_MODIFIER)

const value = MyCustomTextFieldComponent.getValue()
// console.log(value)
// output 'testing dynamic set field value'

```

**Create a custom keypress event**
```javascript
import { Venom } from "venom"

const MyCustomTextFieldComponent = Venom.get(`my-custom-text-field`).component
const element = MyCustomTextFieldComponent.getElement()

function myCustomKeypressHandler(event) {
  const component = MyCustomTextFieldComponent.getInstance()
  component.setEvent(event) // to apply event handler in current venom component instance
  const handledValue = component.getValue()
  console.log(handledValue)
}

element.addEventListener('keypress', myCustomKeypressHandler)
```