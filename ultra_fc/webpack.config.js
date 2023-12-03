module.exports = {
    // ...other webpack configurations...
  
    module: {
      rules: [
        // ...other rules...
  
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.svg$/,
          use: 'vue-svg-loader',
        },
      ],
    },
  };
  