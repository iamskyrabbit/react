var models = require('../models');

exports.index = function(req, res, next) {
  models.Employee.all().then(employees => {
    res.render('employee/index', {employees : employees});
  });
};