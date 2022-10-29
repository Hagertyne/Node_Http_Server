const path = require('path')

//get full path of any file
let filepath = path.join(__dirname,'http_server_path.js')
//File extension
let fileExtension = path.extname(filepath)
let basename = path.basename(filepath)
console.log(filepath)