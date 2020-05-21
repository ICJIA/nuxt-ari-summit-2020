const config = {
  publicPath: '/ariallsites2020',
  scrollToOptions: {
    container: 'body',
    duration: 500,
    easing: 'ease',
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
  },
  debug: false,
  theme: {
    dark: {
      color: '#fff',
      background: '#00695C'
    },
    light: {
      color: '#333',
      background: '#efefef'
    },
    white: {
      color: '#333',
      background: '#fff'
    }
  }
}

export default config
