const { response } = require('express')

const http = require('http')
const fs = require('fs')
const path =require('path')

const server = http.createServer((request,response) =>{
    let filepath = path.join(__dirname,'public', request.url == '/' ? 'home.html': request.url)
    let ContentType = getContentType(filepath) || 'text/html'
    let emptyPagePath = path.join(__dirname,'public','404.html')
    fs.readFile(filepath,'utf8', (err,content) => {
        if(err){
            // Error code for files not found
            if(err.code === 'ENOENT'){
                fs.readFile(emptyPagePath,'utf8',(err,content) => {
                    response.writeHead(200,{'Content-Type': ContentType})
                    response.end(content)
                })
              
            }else{
                response.writeHead(500)
                response.end('A Server error Has Occured')
            }
        }
        if(!err){
            response.writeHead(200,{'Content-Type': ContentType})
            response.end(content)
        }
    })
})

//define our function

const getContentType = (filepath) => {
    let extname = path.extname(filepath)
    if(extname === '.js'){
        return 'text/javascript'
    }

    if(extname === '.css'){
        return 'text/css'
    }
    if(extname === '.png'){
        return 'image/png'
    }
    if(extname === '.jpg'){
        return 'image/jpg'
    }
}

const port = 5000

server.listen(port,() => {
    console.log("I am your Server on port 5000")
})