module.exports = function(api) {
    api.cache(true);
  
    const presets = [
      ["@babel/preset-env", {
        "targets": {
          "browsers": ["last 2 versions", "not dead"]
        },
        "modules": false
      }]
    ];
  
    return {
      presets
    };
  };
  