module.exports = {
  theme: {
    extend: {
      "spacing": {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
      maxHeight: theme => theme("spacing"),
      maxWidth: theme => theme("spacing"),
      minHeight: theme => theme("spacing"),
      minWidth: theme => theme("spacing"),
      colors: {
        dark: "#2C2F33",
        black: "#23272A",
      }
    },
    fontFamily: {
      body: ['Source Code Pro', 'monospace'],
    },
  },
  variants: ['responsive', 'group-hover', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled'],
  plugins: [],
}
