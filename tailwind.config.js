const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "about": "url('/images/bg-about.png')",
        "future": "url('/images/bg-future.png')",
        "skills": "url('/images/bg-skills.png')",
      }),
      colors: {
        "font-black": "#384359",
        "font-green": "#008c8d",
        "header-green": "#6bc2c3",
        "header-black": "#262c3a",
        "ber-light-green": "#c5eaea",
        "ber-dark-green": "#2bb9ba",
        "line-green": "#c5eaea",
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1440px",
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [
    plugin(function({ addBase, config }){
      addBase({
        'h2': { fontSize: config('theme.fonsSize.2xl')},
      })
    })
  ],
  corePlugins: {
    backgroundRepeat: false,
  }
}
