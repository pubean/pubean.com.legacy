var util = require('util');


module.exports = {
  src: './src/images/icons/**/*.{png,gif,jpg}',
  destImage: './src/images/sprite.png',
  destCSS: './src/styles/sprite.css',
  imgPath: '../images/sprite.png',
  padding: 2,
  algorithm: 'binary-tree',
  algorithmOpts: { sort: false },
};
