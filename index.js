const http= require('http');
const fs = require('fs');
const port=3000;
const c =http.createServer(requesthandler);
function requesthandler(req,res){
    console.log(req.url);
    let filePath;
    //where do you save this folder inside conatct list folder
    switch (req.url){
        case '/':
            filePath='one.html'
            break;
        case '/profile':
            filePath='two.html'
            break;
        default:
            filePath='/three.html'
    }
    fs.readFile(filePath,function(err,data){
        if (err){
            console.log('error',err);
            return res.end('<h1>Error!')
        }
        return res.end(data);
    })

}
c.listen(port,function(err){
    if (err){
        console.log(err);
        return 
    }
    console.log("Server created at : ",port);
    
})