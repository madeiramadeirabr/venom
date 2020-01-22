# Button



# Usage

In your document:

```html
<button class="button button--is-primary" id="my-custom-button">
button text
</button>

<!-- or using a link -->
<a class="button button--is-primary" id="my-custom-button">
  <span class="button__text">
    button text
  </span>
</a>

<!-- or using input -->
<input type="submit" class="button button--is-primary" id="my-custom-button" value="button text" />
```

```javascript
import { Button } from "ui-are-venom/components/button"

// find element in DOM
const MyButton = document.getElementById('my-custom-button')

// create a instance of component
const MyButtonComponent = new Button(MyButton)

// to make this button disabled
MyButtonComponent.setDisabled(true)

// to change content of this button
MyButtonComponent.setText('the new content')

// to start loading, disable button and change content is needed
MyButtonComponent.setLoading(true, 'loading started')
// to stops loading
MyButtonComponent.setLoading(false)

```