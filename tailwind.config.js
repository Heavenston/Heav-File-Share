module.exports = {
  theme: {
    extend: {
      maxHeight: theme => theme("spacing"),
      maxWidth: theme => theme("spacing"),
      "spacing": {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
    },
    fontFamily: {
      body: ['Source Code Pro', 'monospace'],
    },
  },
  variants: ['responsive', 'group-hover', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled'],
  plugins: [],
}
