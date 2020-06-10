module.exports = {
  purge: [
    './src/**/*.js',
    './src/assets/main.css',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['IBM Plex Sans', 'sans'],
        'body': ['IBM Plex Sans', 'sans'],
      },
      colors: {
        textPrimary: '#2C3740',
        textSecondary: '#82888D',
      },
      width: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      screens: {
        'xxxs': '370px',
        'dark': {'raw': '(prefers-color-scheme: dark)'}
      },
      boxShadow: {
        'project-m': '0px 8px 18px rgba(0, 0, 0, 0.16), 0px 1px 4px rgba(0, 0, 0, 0.08)',
        'project-xl': '0px 14px 28px rgba(0, 0, 0, 0.22), 0px 1px 4px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  variants: {
    margin: ['responsive', 'hover', 'first', 'last'],
    padding: ['responsive', 'first', 'last'],
    boxShadow: ['responsive', 'hover'],
  },
}
