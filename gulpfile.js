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

  return src('resources/fonts/**/*')
    .pipe(dest('css/fonts'))

  // return src([('css/venom.min.css')])
  //   .pipe(replace('helper', ''))
  //   .pipe(dest('css/'))
}