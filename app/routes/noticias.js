
module.exports = function(app){
app.get('/noticias', function(req, res){

    var mysql = require('mysql')
        var connection = mysql.createConnection({
            host: 'localhost',
            password:'',
            user: 'root',
            database:'noticias'

        })

        connection.query('SELECT * FROM noticias', function(erro, result){
            res.send(result)
        })

    // res.render("noticias/noticias");
})
}