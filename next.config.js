const withStylus = require('@zeit/next-stylus')
const withCss = require('@zeit/next-css')
const compose = require('next-compose')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = compose([
    [withStylus],
    [withCss],
])
