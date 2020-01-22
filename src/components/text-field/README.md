# Text-field



# Usage

In your document:

```html
<div class="field">
  <input data-required data-validator="email|required" type="text" name="my-custom-text-field" id="my-custom-text-field" value="test" />
  <label for="my-custom-text-field">My custom label</label>
  <span class="field__feedback">My custom feedback</span>
</div>
```

```javascript
import { TextField, TEXTFIELD_SUCCESS_MODIFIER } from "ui-are-venom/components/text-field"

// find element in DOM
const MyInput = document.getElementById('my-custom-text-field')

// create a instance of component
const MyTextFieldComponent = new TextField(MyInput)

// to make this field disabled
MyTextFieldComponent.setDisabled(true)

// to change content of this text-field, change feedback message and change modifier
// import { TEXTFIELD_SUCCESS_MODIFIER } from "ui-are-venom/components/text-field"
MyTextFieldComponent.setValue('the new value').setFeedback('this my custom feedback').setModifier(TEXTFIELD_SUCCESS_MODIFIER)

// to get value of this input dinamicly
const Value = MyTextFieldComponent.getValue()



```