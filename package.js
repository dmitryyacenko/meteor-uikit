Package.describe({
  name: 'unclefeudor:meteor-uikit',
  version: '1.0.2',
  summary: 'A lightweight and modular front-end framework for developing fast and powerful web interfaces',
  git: 'https://github.com/dmitryyacenko/meteor-uikit',
  documentation: 'README.md'
});

Package.onUse(function (api, where) {

  api.versionsFrom('METEOR@1.4.1');

  const path = Npm.require('path');
  const assetPath = path.join('src');

  //js
  api.addFiles(path.join(assetPath, 'js', 'uikit.min.js'), 'client');

  //css
  api.addFiles(path.join(assetPath, 'css', 'uikit.min.css'), 'client');

  //icons
  api.addAssets(path.join(assetPath, 'js', 'uikit-icons.min.js'), 'client');

});
