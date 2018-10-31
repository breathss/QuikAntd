const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

const themePath = path.join(__dirname, '/default.less');
const themes= lessToJs(fs.readFileSync(themePath, 'utf8'));
module.exports = themes
