# Notification



# Usage

In your document:

```html
<div class="notification" id="my-custom-notification">
  <div class="notification__container">
    <div class="notification__content">
      my custom notification component
    </div>
    <span class="notification__close">Close</span>
  </div>
</div>
```

```javascript
import { Notification, NOTIFICATION_SUCCESS_MODIFIER } from "ui-are-venom/components/notification"

// find element in DOM
const MyNotification = document.getElementById('my-custom-notification')

// create a instance of component
const MyNotificationComponent = new Notification(MyNotification)

// to change modifier of component
// import { NOTIFICATION_SUCCESS_MODIFIER } from "ui-are-venom/components/notification"
MyNotificationComponent.setModifier(NOTIFICATION_SUCCESS_MODIFIER)

// to change a visibility (to show in) of component with a 5 seconds delay
MyNotificationComponent.setVisibile(true, 5000)

// to change a visibility of component to show instantaneosly
MyNotificationComponent.setVisibile(true)

// to change a visibility (to hides in) of component with a 5 seconds delay
MyNotificationComponent.setVisibile(false, 5000)

// to change content of component
MyNotificationComponent.setContent("my custom content")

```