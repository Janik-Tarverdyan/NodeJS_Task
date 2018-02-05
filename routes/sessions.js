var data = require('../stocks.json');

exports.findAll = function (req, res, next) {
    res.send(data);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(data[id]);
};
