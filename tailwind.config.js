module.exports = {
  presets: [
    require('./company_sstyles')
  ],
  purge: {
    enabled: true,
    content: ['./dist/**/*.html'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },

    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-debug-screens"),
  ],
}
