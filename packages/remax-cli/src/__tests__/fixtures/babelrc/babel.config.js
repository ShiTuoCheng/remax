module.exports = function(api) {
  api.cache(true);

  return {
    plugins: ['loop-optimizer'],
    presets: [
      [
        'remax',
        {
          typescript: {
            allowNamespaces: true,
          },
        },
      ],
    ],
  };
};
