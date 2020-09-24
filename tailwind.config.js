module.exports = {
  purge: false,
  future: {
    removeDeprecatedGapUtilities: true
  },
  theme: {
    extend: {
      colors: {
        accent: '#41B883',
        accentDark: '#45A278',
        light: {
          200: '#FBFCFC',
          400: '#EEF5F5',
          600: '#E6EEEE'
        },
        sepia: {
          text: '#473742',
          200: '#F1E7D0',
          400: '#EBDDBF',
          600: '#E3D2AC',
          800: '#BEAA7F'
        },
        dark: {
          500: '#2E3134',
          700: '#212529',
          900: '#12181E'
        }
      },
      fontSize: {
        22: '1.375rem'
      },
      spacing: {
        72: '18rem',
        84: '21rem'
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%'
      }
    },
    fontFamily: {}
  },
  variants: {
    margin: ['responsive', 'last']
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.pin-c-x': {
          left: '50%',
          transform: 'translateX(-50%)'
        },
        '.pin-c-y': {
          top: '50%',
          transform: 'translateY(-50%)'
        },
        '.pin-c': {
          top: '50%',
          left: '50%',
          transform: 'translate3d(-50%, -50%, 0)'
        }
      }

      addUtilities(newUtilities)
    }
  ]
}
