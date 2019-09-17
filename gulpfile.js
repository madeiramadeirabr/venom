const { src, dest } = require('gulp')
const replace = require('gulp-replace')

exports.default = function () {

  console.log("\x1b[31m", `
  ██   ██  ██████  ██████  ██  ███████  ██████████    ██   ██  ██
  ██   ██  ██      ██  ██  ██  ██   ██  ██  ██  ██    ██   ██  ██
  ██   ██  ██ ███  ██  ██  ██  ██   ██  ██  ██  ██    ██   ██  ██
   █   █   ██      ██  ██  ██  ██   ██  ██  ██  ██    ██   ██  ██
    ███    ██████  ██  ██████  ███████  ██  ██  ██    ███████  ██
  `)

  src('resources/fonts/**/*')
    .pipe(dest('dist/fonts'))

  return src('resources/icons/**/*')
    .pipe(dest('dist/icons'))

  // return src([('css/venom.min.css')])
  //   .pipe(replace('helper', ''))
  //   .pipe(dest('css/'))
}