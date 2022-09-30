var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

app.get('/pago', ((req, res) => {
    res.write('<html><head></head><body>');
    res.write('<p style="font-size: 50px">Pagamento aprovado!</p>');
    res.write('<a style="font-size: 50px" href="https://www.google.com" target="_blank">Clique aqui para ver o PDF no Google Drive</a>');
    res.end('</body></html>');
}))

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});