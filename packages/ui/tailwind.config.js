const defaultTheme = require('config/defaultTailwind.config')

module.exports = {
  content: ['./**/*.{js,ts,jsx,tsx}'],
  theme: {
    // ...defaultTheme.theme,

    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
