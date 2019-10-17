# Button Component

The `button-component` is component to handle a button element in DOM Tree.
Using `venom`, this component can be modified.

## Attributes

Theses attributes, if required, need be instead in document using [data-attributes](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/data-*).

| Name        | Required | Type           | Description                             |
| ----------- | -------- | -------------- | --------------------------------------- |
| `component` | `true`   | `string`       | Must be `button`                        |
| `alias`     | `true`   | `string`,`int` | The unique id or name of this component |

## Proptype

| Function        | Param                  | Description                                                                                                   |
| --------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| `changeContent` | `string`               | Change the [innerHTML](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML) of current element |
| `setDisabled`   |                        | Turns `element` invisible (remove css `--hidden` classname)                                                   |
| `injectHandler` | `{ trigger, handler }` | Add a event listener on this element reference                                                                |
| `loadingStart`  | `string`               | Disable this button to prevent double click and change content                                                |
| `loadingStop`   |                        | Enable this button and change content to origin                                                               |

The rest of helpers must be queried on [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Usage

For create a instance in `venom` and print a `HTMLButtonElement` in your document.

**HTML**

```html
<button class="button button--is-primary" data-alias="my-custom-button" data-component="button" data-venom></button>
```

**Typescript**

```typescript
import { Venom } from '@madeiramadeira/venom'
import { ButtonComponent } from '@madeiramadeira/venom/components/button-component/index'

const MyCustomButtonComponent = Venom.getComponent(`my-custom-button`) as ButtonComponent

MyCustomButtonComponent.changeContent('click here').loadingStart('loading started')
```

## Modifier

The file has located in `venom/components/constants`.

| Name    | constant           |
| ------- | ------------------ |
| danger  | `DANGER_MODIFIER`  |
| warning | `WARNING_MODIFIER` |
| info    | `INFO_MODIFIER`    |
| success | `SUCCESS_MODIFIER` |
