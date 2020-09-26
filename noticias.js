// console.log("Criando um site de noticias com o node js")
var http = require('http');

http.createServer(function(req, res){
    var categoria = req.url;
    if(categoria == '/tecnologia'){
        res.end("<html><body>Portal de tecologia</body></html>");     
    } else if(categoria == '/moda'){
        res.end("<html><body>Portal de moda</body></html>");     
    }
    else{
        res.end("<html><body>Portal de noticias</body></html>");
    }
}).listen(3000);

