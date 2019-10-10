# Loading Component

The `loading-component` is used to create a loading indicator.
Using `venom`, this component can be modified.

## Attributes

This component don't need any HTML attibutes because it is created using Typescript and don't need any HTML code.

## Constructor Parameter

| Param | Description                                                                            |
| ----- | -------------------------------------------------------------------------------------- |
| `el`  | The element that will receive the loading. By default the loading is added to the body |

## Proptype

| Function         | Param         | Required | Description                                                              |
| ---------------- | ------------- | -------- | ------------------------------------------------------------------------ |
| `loadingStart`   | `loadingText` | `false`  | Start the loading with the loadingText or the default text: "Loading..." |
| `loadingStop`    |               |          | Stop the loading                                                         |
| `setLoadingText` | `string`      | `true`   | Change the text of the loading                                           |

## Usage

Import the loading sass file into your page.

Create a instance of the LoadingComponent in the javascript.

**Javascript**

```javascript
const loadingController = new LoadingComponent()
loadingController.loadingStart('Please wait ...')
loadingController.loadingStop()
```

**Sass**

```sass

@import "../components/loading"

```
