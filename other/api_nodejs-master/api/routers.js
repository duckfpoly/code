'use strict';
module.exports = function(app) {
  var dataCtrl = require('./controllers/dataControllers.js');

  // todoList Routes
  app.route('/students')
    .get(dataCtrl.get)
    .post(dataCtrl.store);

  app.route('/students/:studentsId')
    .get(dataCtrl.detail)
    .put(dataCtrl.update)
    .delete(dataCtrl.delete);
};