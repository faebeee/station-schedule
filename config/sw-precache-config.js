module.exports = {
  staticFileGlobs: [
    'dist/static/css/**.css',
    'dist/**.html',
    'dist/static/js/**.js',
    'dist/fonts/**/*'
  ],
  stripPrefix: "dist",
  runtimeCaching: [
    {
      urlPattern: /^http:\/\/transport\.opendata\.ch\/v1/,
      handler: 'networkFirst'
    },
    {
      urlPattern: '/^https:\\/\\/code\\\.jquery\.com\\/jquery-3\.2\.1\.min\.js',
      handler: 'cacheFirst'
    },
    {
      urlPattern: '/^https:\\/\\/fonts\.googleapis\.com\\/icon?family=Material+Icons',
      handler: 'cacheFirst'
    },
    {
      urlPattern: '/^https:\\/\\/cdnjs\.cloudflare\.com\\/ajax\\/libs\\/materialize/0\.100\.2/',
      handler: 'cacheFirst'
    }
  ]
};
