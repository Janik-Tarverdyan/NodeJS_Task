var express          = require('express'),
    bodyParser       = require('body-parser'),
    methodOverride   = require('method-override'),
    data             = require('./routes/sessions'),
    app              = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride());   // simulate DELETE and PUT
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/data', data.findAll);
app.get('/data/:id', data.findById);


app.get('/', function(req, res){
   res.render('table');
})

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
