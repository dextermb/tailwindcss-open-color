# Tailwindcss _x_ Open Color

This plugin overrides the default color pallete to add colors from Open Color. The colors are pulled directly from Open Color's JSON file then formatted to work with Tailwindcss.

To find more information about [Tailwindcss][tailwindcss] or [Open Color][open-color] please check out their websites.

## Installation

Use `npm` or `yarn` to install the package:

```
yarn add tw-oc
```

Then within your `tailwind.config.js` that can be generated using:

```
npx tailwindcss init
```

Then require the plugin into your plugins array:

```
module.exports = {
  theme: {},
  variants: {},
  plugins: [
    require('tw-oc')
  ],
}
```


[tailwindcss]: tailwindcss.com
[open-color]: yeun.github.io/open-color
