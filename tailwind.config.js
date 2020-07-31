module.exports = {
  purge: [
    'src/**/*.vue',
    'src/**/*.html',
    'src/**/*.js'
  ],
  theme: {
    extend: {
      inset: {
        16: '4rem',
        32: '8rem',
        '1/2': '50%'
      },
      height: {
        '(screen-16)': 'calc(100vh - 15rem)'
      },
      lineHeight: {
        'extra-loose': '2.5'
      },
      borderRadius: {
        large: '5rem'
      },
      boxShadow: {
        outer: '0 0 20px 3px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  variants: {},
  plugins: []
}
