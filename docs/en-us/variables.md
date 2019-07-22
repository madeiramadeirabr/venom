# Variables

> Venom have a lot of variables inside your basis. That variables can be used in your sass files, to make your customized styles. 
> Please, be careful to create a variable outside a venom basis, is not recommended recreate him.

# Color

> Do you find this variables in `sass/themes/default/colors.sass` file.

**Color name**

Common colors list is: ![#F41E1E](https://placehold.it/15/F41E1E/000000?text=+) `red`, ![#F4821E](https://placehold.it/15/F4821E/000000?text=+) `orange`, ![#DCDC18](https://placehold.it/15/DCDC18/000000?text=+) `yellow`, ![#18DC70](https://placehold.it/15/18DC70/000000?text=+) `green`, ![#053A6F](https://placehold.it/15/053A6F/000000?text=+) `blue`.

**Color variant**

All the colors have variants, like; `darkness`, `dark`, `light`, `lightness`.

**Usage**

The pattern of color variable is `$color-${COLOR_NAME}-${COLOR_VARIANT_NAME}`. Eg.: 

![#A50707](https://placehold.it/15/A50707/000000?text=+) `$color-red-light`, 
![#061B3B](https://placehold.it/15/061B3B/000000?text=+) `$color-blue-darkness`, 
![#155CC5](https://placehold.it/15/155CC5/000000?text=+) `$color-blue-light`, 
![#053A6F](https://placehold.it/15/053A6F/000000?text=+) `$color-blue`, 
![#2773E7](https://placehold.it/15/2773E7/000000?text=+) `$color-blue-lightness`, 
![#F4821E](https://placehold.it/15/F4821E/000000?text=+) `$color-orange` _(for regular color)_.

**Be careful**

_Eg.: `$color-purple-light` is a wrong variable, because `purple` is not listed in common colors._

**Another colors**

> Do you find this variables in `sass/colors.sass` file.

| Variable | Value |
| -------- | ----- |
| `$black` | ![#0D0D0D](https://placehold.it/15/0D0D0D/000000?text=+) `hsl(0, 0%, 5%)` |
| `$grey-darkness` | ![#333333](https://placehold.it/15/333333/000000?text=+) `hsl(0, 0%, 20%)` |
| `$grey-dark` | ![#4D4D4D](https://placehold.it/15/4D4D4D/000000?text=+) `hsl(0, 0%, 30%)` |
| `$grey` | ![#808080](https://placehold.it/15/808080/000000?text=+) `hsl(0, 0%, 50%)` |
| `$grey-light` | ![#0A0A0A](https://placehold.it/15/0A0A0A/000000?text=+) `hsl(0, 0%, 70%)` |
| `$grey-lightness` | ![#B3B3B3](https://placehold.it/15/B3B3B3/000000?text=+) `hsl(0, 0%, 90%)` |
| `$white` | ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `hsl(0, 0%, 100%)` |
| `$color-background` | ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `$white` |

# Text

> Do you find this variables in `sass/themes/common.sass` file.

### Size

| Variable | Value | Description |
| -------- | ----- | ----------- |
| `$size-small` | `10px` | Small font size. This is a **default** font size for `<small>` tag. |
| `$size-regular` | `14px` | **Default** font size for entire document. |
| `$size-large` | `18px` | Use in titles or subtitles. This is a **default** font size for `<h2>` tag. |
| `$size-extra-large` | `22px` | Is large than `$size-large`. Use in titles. This is a **default** font size for `<h1>` tag. |
| `$size-ultra-large` | `32px` | is large than `$size-extra-large` and the max font size. |

### Family

| Variable | Value | Description |
| -------- | ----- | ----------- |
| `$family-sans-serif` | `BlinkMacSystemFont, -apple-system, "Open Sans", sans-serif` | **Default** font family for entire texts in document. |
| `$family-monospace` | `monospace` | **Default** font family for `<code>`,`<pre>` tag elements. |

### Weight

| Variable | Value | Description |
| -------- | ----- | ----------- |
| `$weight-light` | `300` | Light text. |
| `$weight-regular` | `400` | Regular text. |
| `$weight-semibold` | `600` | Semibold text. |
| `$weight-bold` | `700` | Bold text. **Default** font weight for `<strong>` tag element. |