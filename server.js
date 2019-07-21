var fs = require('fs');
var path = require('path');
var Q = require('q');
const cors = require('cors');

var express = require('express');
var bodyParser = require('body-parser');

var port = 9999;

var commentFile = path.join(__dirname, 'products.json');

var app = express();

app.use('/', express.static(path.join(__dirname, 'src')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var readData = function () {
    var defer = Q.defer();

    fs.readFile(commentFile, function (error, data) {
        if (error) {
            return defer.reject(error);
        }

        return defer.resolve(JSON.parse(data));
    });

    return defer.promise;
};

var getCommentsPage = function () {
    return readData().then(function (data) {
        return data;
    });
};

app.use(function (req, res, next) {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// list
app.get('/products', function (req, res) {
    getCommentsPage().then(function (data) {
        res.json(data);
    }).fail(function (error) {
        console.error(error);
        res.sendStatus(500);
    });
});


app.listen(port, function () {
    console.log('Server started: http://localhost:' + port + '/');
});