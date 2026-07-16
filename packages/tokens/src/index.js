const colors = require('./colors');
const spacing = require('./spacing');
const borders = require('./borders');
const typography = require('./typography');
const shadows = require('./shadows');
const animation = require('./animation');

const tokens = {
  colors,
  spacing,
  borders,
  typography,
  shadows,
  animation,
};

module.exports = tokens;
module.exports.colors = colors;
module.exports.spacing = spacing;
module.exports.borders = borders;
module.exports.typography = typography;
module.exports.shadows = shadows;
module.exports.animation = animation;
