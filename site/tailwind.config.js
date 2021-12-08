module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: 'class',
  i18n: {
    locales: ['en-GB'],
    defaultLocale: 'en-GB',
  },
  purge: {
    content: [
      './src/pages/**/*.tsx',
      './src/common/**/*.tsx',
      './src/layout/**/*.tsx',
    ],
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
      backgroundImage: theme => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
  future: {
    purgeLayersByDefault: true,
  },
};
