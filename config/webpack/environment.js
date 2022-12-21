const { environment } = require('@rails/webpacker')

// const webpack = require('webpack')
// environment.plugins.prepend(
//   'Provide',
//   new webpack.ProvidePlugin({
//     $: 'jquery/src/jquery',
//     jQuery: 'jquery/src/jquery',
//       "window.jQuery": "jquery"
//   })
// )

const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    "window.jQuery": "jquery"  })
)


module.exports = environment
