# Modal Component

The `modal-component` is a component to create modal dialogs to the user .
Using `venom`, this component can be modified.

## Attributes

Theses attributes, if required, need be instead in document using [data-attributes](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/data-*).

| Name           | Required | Type           | Description                                                              |
| -------------- | -------- | -------------- | ------------------------------------------------------------------------ |
| `component`    | `true`   | `string`       | Must be `collapse`                                                       |
| `alias`        | `true`   | `string`,`int` | The unique id or name of this component                                  |
| `buttonclose`  | `false`  | `boolean`      | Used to set if the footer will contain a close button. Default is false  |
| `buttonaction` | `false`  | `boolean`      | Used to set if the footer will contain a action button. Default is false |
| `buttonheader` | `false`  | `boolean`      | Used to set if the header will contain a close button. Default is true   |
| `height`       | `false`  | `string`,`int` | Set a custom height to the modal box                                     |
| `width`        | `false`  | `string`,`int` | Set a width height to the modal box                                      |

## Proptype

| Function              | Param                                                                         | Description                                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `getInstance`         |                                                                               | Retrieve `this` (typeof `Component`) reference of class                                                                     |
| `getElement`          |                                                                               | Retrieve the element (typeof [HTMLElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement) instance           |
| `addButtonHeader`     | `string`                                                                      | Change the [innerHTML](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML) of current element               |
| `setSize`             |                                                                               | Set the size of the modal based in the attributes height and size. Called in the constructor when the component is rendered |
| `setWidth`            | `string|number`                                                               | Set the width of the modal                                                                                                  |
| `setHeight`           | `string|number`                                                               | Set the height of the modal                                                                                                 |
| `injectActionHandler` | `action`, `function`                                                          | Set the function of the Action button                                                                                       |
| `close`               |                                                                               | Close the modal                                                                                                             |
| `open`                |                                                                               | Open the modal                                                                                                              |
| `setBodyContent`      | `content`                                                                     | Set the content of the body                                                                                                 |
| `setTitle`            | `title`                                                                       | Set the content of the title                                                                                                |
| `resetClose`          | `` | Change the action `click` of button to default function (as close modal) |
| `changeClose`         | `function`                                                                    | Change the action of `click` of close button                                                                                |
| `setTitleModifier`    | `string`                                                                      | Add class on `title` element                                                                                                |

The rest of helpers must be queried on [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Usage

For create a instance in `venom` and print a `HTMLElement` in your document.

**HTML**

```html
<div data-venom data-component="modal" data-alias="custom-modal" class="modal modal--is-hidden">
  <div class="modal__container">
    <div class="modal__header grid__row">
      <div class="grid__column grid__column--has-content-centered helper--has-text-bold helper--has-text-large">
        <span data-modal="button">
          Botão fechar
        </span>
        <span data-modal="title" class="helper--has-margin-left">
          Titulo
        </span>
      </div>
    </div>
    <div class="modal__body">Conteudo</div>
  </div>
</div>
```

**Javascript**

```javascript
import { Venom } from 'venom'

const modal = Venom.getComponent('custom-modal')
modal.show()
```
