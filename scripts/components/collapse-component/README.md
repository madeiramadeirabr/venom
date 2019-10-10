# Collaps Component

The `collapse-component` is component to show/hide the content of a box.
Using `venom`, this component can be modified.

## Attributes

Theses attributes, if required, need be instead in document using [data-attributes](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/data-*).

| Name        | Required | Type           | Description                             |
| ----------- | -------- | -------------- | --------------------------------------- |
| `component` | `true`   | `string`       | Must be `collapse`                      |
| `alias`     | `true`   | `string`,`int` | The unique id or name of this component |

## Proptype

| Function        | Param    | Description                                                                                                       |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| `getInstance`   |          | Retrieve `this` (typeof `Component`) reference of class                                                           |
| `getElement`    |          | Retrieve the element (typeof [HTMLElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement) instance |
| `changeContent` | `string` | Change the [innerHTML](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML) of current element     |
| `hide`          |          | Hide the content of the collapse                                                                                  |
| `show`          |          | Show the content of the collapse                                                                                  |
| `toggle`        |          | Switch the content between visible/invisible                                                                      |

The rest of helpers must be queried on [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Usage

For create a instance in `venom` and print a `HTMLElement` in your document.

**HTML**

```html
<div data-venom data-component="collapse" data-alias="custom-collapse">
  <div class="collapse collapse__container">
    <div class="collapse__title helper--has-text-semibold">
      Blandit dapibus potenti lectus semper
    </div>
    <button class="collapse__open"></button>
  </div>
  <p class="collapse__content helper--is-hidden">
    Litora congue ut erat sociosqu venenatis placerat risus lacus habitant, elit aliquam nunc amet est etiam phasellus orci ad, venenatis
    vel dui scelerisque mattis aliquet phasellus hendrerit.
  </p>
</div>
```

**Javascript**

```javascript
import { Venom } from 'venom'

const customCollapse = Venom.getComponent('custom-collapse')
```
