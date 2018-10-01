module.exports = function (api){
  let presets = [
    "@babel/preset-env"
  ];
  let plugins = [
    "@babel/plugin-proposal-class-properties"
  ];

  if(api.env('test')){
    plugins.push("istanbul");
  }

  console.log(`loaded babel v${api.version} config `)
  return {presets, plugins};
}
