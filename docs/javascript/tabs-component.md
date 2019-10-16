#  Tab Component

The ` tab-component` is component to build switchable pages using a tab menu.
Using `venom`, this component can be modified.

## Attributes

Theses attributes, if required, need be instead in document using [data-attributes](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/data-*).

| Name | Required | Type | Description |
| ---- | -------- | ---- | ----------- |
| `component` | `true` | `string` | Must be `tabs` |
| `alias` | `true` | `string`,`int` | The unique id or name of this component |

## Proptype

| Function | Param | Description |
| -------- | ----- | ----------- |
| `getInstance` | | Retrieve `this` (typeof `Component`) reference of class |
| `getElement` | | Retrieve the element (typeof [HTMLElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement) instance |
| `changeContent` | `string` | Change the [innerHTML](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML) of current element |
| `applyIndicatorClass` | | Set the selected tab |
| `displaySelectedTab` | | Display the content of the selcted table |
| `selectTab` | | Select the table, apply the indicator and display the content |

The rest of helpers must be queried on [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

## Usage

For create a instance in `venom` and print a `HTMLElement` in your document.

**HTML**

```html
<div data-venom data-component="tabs" data-alias="my-custom-tab"> 
<ul class="venom tab">
    <li data-index="1" class="tab__item">TAB ONE</li>
    <li data-index="2" class="tab__item">TAB TWO</li>
    <li data-index="3" class="tab__item">TAB THREE</li>
    <li data-index="4" class="tab__item">TAB FOUR</li>
    <li data-index="5" class="tab__item">TAB FIVE</li>
</ul>
<div>
<div>
    <div class="tab__content" data-index="1">#1 - This is the tab 1 text</div>
    <div class="tab__content" data-index="2">#2 - This is the tab 2 text</div>
    <div class="tab__content" data-index="3">#3 - This is the tab 3 text</div>
    <div class="tab__content" data-index="4">#4 - This is the tab 4 text</div>
    <div class="tab__content" data-index="5">#5 - This is the tab 5 text</div>
</div>
```

**Javascript**

```javascript
import { Venom } from "venom"

const MyCustomButtonComponent = Venom.getComponent('my-custom-tab');

