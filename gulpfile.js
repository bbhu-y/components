const { src, dest, parallel, watch } = require('gulp')
const babel = require('gulp-babel')

function copyOthers() {
  return src(['components/**/*.less', 'package.json', 'README.md'])
    .pipe(dest('build/'));
}

function compile() {
  return src('components/**/*.js')
    .pipe(babel())
    .pipe(dest('build/'))
}

function watchCompile() {
  watch('components/**/*', function () {
    compile()
    return copyOthers()
  });
}

function copy() {
  return src(['components/**/*', 'package.json', 'README.md'])
    .pipe(dest('build/'));
}

function watchCopy() {
  watch('components/**/*', function () {
    return copy()
  });
}

exports.copy = copy
exports.watchCopy = watchCopy
exports.build = parallel(compile, copyOthers)
exports.watchCompile = watchCompile
exports.default = parallel(compile, copyOthers)