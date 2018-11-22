module.exports = (app, db) => {
  const users = require('./controllers/users')(db);
  const target = require('./controllers/target')(db);

  app.post('/api/checkLogin', users.checkLogin);
  app.post('/api/checkRegister', users.checkRegister);

  
};
