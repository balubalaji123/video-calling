// const client=require('socket.io').listen(3000).sockets;
const express=require('express')
const app=express()
const path=require('path')
const bodyparser=require('body-parser')
// var server = require('http').Server(app);
var server = require('http').Server(app);
var client = require('socket.io')(server);

// const client=require('socket.io').listen(3001).sockets;
// app.use(bodyparser.urlencoded({extended:true}))
// app.use(bodyparser.json())
// app.set('views', path.join(__dirname, ''));
// app.set('view engine', 'jade');
// app.use(express.static(__dirname+'index.html'))
// app.set('views', path.join(__dirname, 'index.html'));
// var http = require('http')
// const fs = require('fs');
// fs.readFile('./index.html', function (err, html) {
//    if (err) {
//        throw err; 
//    }       
//  const server=  http.createServer(function(request, response) {  
//        response.writeHeader(200, {"Content-Type": "text/html"});  
//        response.write(html);  
//        response.end();  
//    })
// });

app.use('/', express.static(__dirname + '/index.html'));



app.get('/',function(req,res){
   res.sendFile(__dirname+'/index.html')
})
client.on('connection',function(socket)
{
console.log('connection')
socket.on('input',function(data)
{
   let name=data.name;
   let message=data.message;
   
   //check for name and msg
   

        client.emit('output',[data])   
   
});

}
)

server.listen(3000)
// app.listen(3000)
