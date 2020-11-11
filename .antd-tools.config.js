const fs = require('fs');
const path = require('path');
const packageInfo = require('./package.json');

// We need compile additional content for antd user
function finalizeCompile() {
 
}

function finalizeDist() {
 
}

function generateThemeFileContent(){
  
}

module.exports = {
  compile: {
    finalize: finalizeCompile,
  },
  dist: {
    finalize: finalizeDist,
  },
  generateThemeFileContent,
};
