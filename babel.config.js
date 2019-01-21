module.exports = function (api) {
  let presets = [
    [
      '@babel/preset-env', {
        'useBuiltIns': 'entry'
      }
    ]
  ]
  let plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        'corejs': 2,
        'helpers': true,
        'regenerator': true,
        'useESModules': false
      }
    ]
  ]

  if (api.env('test')) {
    plugins.push('istanbul')
  }

  console.log(`loaded babel v${api.version} config `)
  return { presets, plugins }
}
