const { src, dest } = require('gulp');

exports.default = function() {
  return src('src/resources/fonts/**/*')
    .pipe(dest('css/fonts'));
}