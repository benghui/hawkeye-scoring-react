module.exports = (db) => {
  const checkLogin = (req, res) => {
    db.users.checkLogin(req.body, (error, result) => {
      if (error) {
        console.log('error', error);
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    });
  };

  const checkRegister = (req, res) => {
    db.users.checkRegister(req.body, (error, result) => {
      if (error) {
        console.log('error', error);
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    });
  };

  return {
    checkLogin,
    checkRegister
  };
};
