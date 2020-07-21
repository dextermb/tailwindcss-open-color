const plugin = require('tailwindcss/plugin')
const colors = require('open-color/open-color.json')

const formatted = {}

Object.entries(colors).forEach(([color, value]) => {
  if (!Array.isArray(value)) {
    formatted[color] = value

    return
  }

  formatted[color] = {}

  value.forEach((shade, index) => (
    formatted[color][index !== (value.length - 1) ? `${index + 1}`.padEnd(3, '0') : 1000] = shade
  ))
})

const OpenColor = plugin(() => null, {
  theme: {
    extend: {
      colors: formatted
    }
  }
})

module.exports = OpenColor
