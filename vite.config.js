const { resolve } = require('path')

module.exports = {
  build: {
    outDir: resolve(__dirname, './docs')
  },
  server: {
    fs: {
      strict: false,
    }
  }
}
