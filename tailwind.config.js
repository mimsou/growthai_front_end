const { theme } = require('./src/styles/theme'); 

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: {
        sans: theme.fonts.sans,
      },
      fontSize: theme.fontSizes,
      spacing: theme.spacing,
      borderRadius: theme.borderRadius,
      boxShadow: theme.shadows,
    },
  },
  plugins: [],
};