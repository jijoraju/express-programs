var express = require('express');
var fs = require('fs');

var app = express();
var obj;
app.get('/books', function(req, res){
    fs.readFile(process.argv[3], function(err,data){
        if(err){
            res.send(err);
        }
        else{
            obj = JSON.parse(data);
            res.send(obj);
        }
        
    });
    
});
app.listen(process.argv[2]);