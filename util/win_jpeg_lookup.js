var fs = require('fs')
var paths = ['C:/libjpeg-turbo']

if (process.arch === 'x64') {
  paths.unshift('C:/libjpeg-turbo64')
}

paths.push(process.env.NODECANVAS_LIBJPEGTURBO_PATH)

paths.forEach(function(path){
  if (exists(path)) {
    process.stdout.write(path)
    process.exit()
  }
})

function exists(path) {
  try {
    return fs.lstatSync(path).isDirectory()
  } catch(e) {
    return false
  }
}
