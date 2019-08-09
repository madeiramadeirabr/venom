# Component

The `component` is a class object instance of `DOMelement` parsed by `venom` class.
A `component` have a few most used functions/helpers to retrieve the spec data.

## Proptype

| Function | Param | Description |
| -------- | ----- | ----------- |
| `getInstance` | | Retrieve `this` (typeof `Component`) reference of class |
| `getElement` | | Retrieve the element (typeof [HTMLElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement) instance |
| `setContentHtml` | **content**`string` | Set the [innerHTML](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML) of element |
| `getContentHtml` | | Retrieve the content (as [innerHTML](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)) of element |
| `getAttributes` | | Retrive the list of [dataset](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/dataset) of element |
| `getClassnames` | | Retrive the list of [classList](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList) of element |
| `setIsDisabled` | `boolean` | Change disabled attr of this component |
| `setValue` | **value**`string` | Define the `value` of element or event instantiated |
| `getValue` | | Retrieve the `value` of element or event instantiated |
| `setEvent` | **event**`object` | Create a instance of created [event](https://developer.mozilla.org/pt-BR/docs/Web/Events) for this class |
| `getEvent` | | Retrieve the instance of [event](https://developer.mozilla.org/pt-BR/docs/Web/Events) instantiated |

The rest of helpers must be queried on [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)