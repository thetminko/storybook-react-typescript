module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/App.tsx', './src/components/**.tsx', './src/components/**/*.tsx', './src/containers/**/*.tsx', './src/pages/**/*.tsx'], // this will only purge if NODE_ENV is production
  // purge: { // this will force purge even in dev. For testing only
  //   enabled: true,
  //   content: ['./src/App.tsx', './src/components/**.tsx', './src/components/**/*.tsx', './src/containers/**/*.tsx', './src/pages/**/*.tsx']
  // },
  theme: {
    extend: {
      fontFamily: {
        display: [],

      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'], // allow hover, focus for background color, https://tailwindcss.com/docs/pseudo-class-variants,
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    textAlign: ['responsive', 'focus'],
    textColor: ['group-hover']
  },
  plugins: [],
};
