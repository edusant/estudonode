// var express = require('express');
// var app  = express();
var app = require('./config/server');


// app.set('view engine', 'ejs')
// app.get('/')
// app.get('/', function(req, res){
//     res.render("home/index");
// })

// var rotanoticias = require('./app/routes/noticias');

var rotahome = require('./app/routes/home')(app);

var rotanoticia = require('./app/routes/noticias')(app);

var rotaform = require('./app/routes/formulario_inclusao_noticias')(app);

// rotanoticia(app)

// rotahome(app)






app.listen(3000, function(){
    console.log("Okay Oka")
}) 