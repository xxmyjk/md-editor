// postcss config file
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer,
        precss
    ]
};