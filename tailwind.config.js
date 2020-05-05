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
        gray: {
          100: '#E9E9E9',
          200: '#C8C8C8',
          300: '#A7A7A7',
          400: '#646464',
          500: '#222222',
          default: '#222222',
          600: '#1F1F1F',
          700: '#141414',
          800: '#0F0F0F',
          900: '#0A0A0A',
        },
        primary: {
          100: '#E6F8FE',
          200: '#BFEEFB',
          300: '#99E4F9',
          400: '#4DCFF5',
          500: '#00BBF0',
          default: '#00BBF0',
          600: '#00A8D8',
          700: '#007090',
          800: '#00546C',
          900: '#003848',
        },
        background: theme => theme("colors.gray.500")
      }
    },
    fontFamily: {
      body: () => theme("fontFamily.sans"),
    },
  },
  variants: ['responsive', 'group-hover', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled'],
  plugins: [],
}
