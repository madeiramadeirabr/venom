const { src, dest } = require('gulp');

exports.default = function() {

  console.log("\x1b[31m", `
  ██   ██  ██████  ██████  ██  ███████  ██████████    ██   ██  ██  
  ██   ██  ██      ██  ██  ██  ██   ██  ██  ██  ██    ██   ██  ██   
  ██   ██  ██ ███  ██  ██  ██  ██   ██  ██  ██  ██    ██   ██  ██     
   █   █   ██      ██  ██  ██  ██   ██  ██  ██  ██    ██   ██  ██   
    ███    ██████  ██  ██████  ███████  ██  ██  ██    ███████  ██   
  `)

  return src('src/resources/fonts/**/*')
    .pipe(dest('css/fonts'));
}