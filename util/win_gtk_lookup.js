var fs = require('fs')
var paths = ['C:/GTK', process.env.NODECANVAS_GTK_PATH]

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
