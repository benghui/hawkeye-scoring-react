module.exports = (db) => {
  const newUser = (req, res) => {
    res.send({ hello: 'hello' });
  };

  return {
    newUser
  };
};
