const isProd = process.env.NODE_ENV === "production";

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "./src/**/*.html",
  ],
});

module.exports = {
  plugins: [
    require("postcss-import"),
    require('tailwindcss')(require("./tailwind.config")),
    require("postcss-nesting"),
    require('autoprefixer'),
    ...isProd ? [purgecss] : [],
  ]
}