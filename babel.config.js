module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module-resolver", {
        "root": ["./src"],
        "alias": {
          "@screens": "./src/screens",
          "@theme": "./src/theme",
          "@components": "./src/components",
          "@services": "./src/service",
        }
      }]
    ]
  };
};
