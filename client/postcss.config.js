// module.exports = {
//     // Add you postcss configuration here
//     // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
//     plugins: {
//         tailwindcss: {
//             content: ["./src/**/*.{html,js}","./src/*.{html,js}"],
//         },
//         autoprefixer: {},
//     },
// };

// const tailwindcss = require('tailwindcss');
// module.exports = {
//   plugins: [
//     'postcss-preset-env',
//     tailwindcss: {

//     }
//   ],
// };

module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    //   ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
  }