module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['IBM Plex Sans', 'sans'],
        // 'serif': ['Georgia', 'Cambria', ...],
        // 'mono': ['SFMono-Regular', 'Menlo', ...],
        // 'display': ['Oswald', ...],
        'body': ['IBM Plex Sans', 'sans'],
      },
      colors: {
        textSecondary: '#797F82',
      },
      width: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      screens: {
        'xxxs': '370px'
      }
    },
  },
  variants: {
    margin: ['responsive', 'first', 'last'],
    padding: ['responsive', 'first', 'last'],
  },
}
