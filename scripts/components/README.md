# Component

The `component` is a class object instance of `DOMelement` parsed by `venom` class.
A `component` have a few most used functions/helpers to retrieve the spec data.

## Proptype

| Function | Param | Description |
| -------- | ----- | ----------- |
| `attachEvent` | **trigger** `string`, **callback** `function` | Attach event on element, helper to `addEventListener` function |
| `getAlias` | | Retrive the id `alias` of this element |
| `getAttributes` | | Retrive the list of [dataset](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/dataset) of element |
| `getClassnames` | | Retrive the list of [classList](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList) of element |
| `getComponent` | | Retrieve `this` (typeof `Component`) reference of class |
| `getElement` | | Retrieve the element (typeof [HTMLElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement) instance |
| `setEvent` | **event** `object` | Create a instance of created [event](https://developer.mozilla.org/pt-BR/docs/Web/Events) for this class |
| `getEvent` | | Retrieve the instance of [event](https://developer.mozilla.org/pt-BR/docs/Web/Events) instantiated |
| `setContentHtml` | **content** `string` | Set the [innerHTML](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML) of element |
| `getContentHtml` | | Retrieve the content (as [innerHTML](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)) of element |
| `getTagname` | | Get tagname of element, eg.: `div`, `span`, `label` |

The rest of helpers must be queried on [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)


# Input Component

## Proptype

| Function | Param | Description |
| -------- | ----- | ----------- |
| `setDisable` | **value** `string` | Define the `disabled` attr of element |
| `getDisable` | | Retrieve the `disabled` attr of element |
| `setValue` | **value** `string` | Define the `value` of element |
| `getValue` | | Retrieve the `value` of element |
| `setType` | **value** `string` | Define the `type` of element |
| `getType` | | Retrieve the `type` of element |

The rest of helpers must be queried on [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)