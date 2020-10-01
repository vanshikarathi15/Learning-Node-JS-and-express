const http= require('http');
const port=1506;
const server=http.createServer(requesHandler);
function requesHandler(req,res){
    console.log(req.url)


const fs=require('fs');
if(req.url="/"){
    fs.readFile('./index.html', function(err,data){
        if(err){
            console.log("Error",err);
            return res.end("Hey,Its an error!");
        }
        return res.end(data);
    
    });
}



server.listen(port,function(err){
    if (err){
        console.log(err);
        return 
    }
    console.log("Server created at : ",port);
    
})
