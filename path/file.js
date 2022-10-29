const fs = require('fs')
const path =require('path')

let filepath =path.join(__dirname,'demo.txt')
//arrow function
fs.readFile(filepath, 'utf8',(err,data) => {
    //console.log(err)
    console.log(data)
}
)