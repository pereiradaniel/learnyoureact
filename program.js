var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({transformViews: false}));

require('babel/register')({
    ignore: false
});

app.use('/', function (req, res) {
    res.render('index', '');
});

app.listen(app.get('port'), function () {
});

// The code above creates a small Express server that renders our React
// components. If someone navigates to /, views/index.jsx will be rendered.
// This program uses the express-react-views module.

