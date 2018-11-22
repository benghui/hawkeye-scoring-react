module.exports = (db) => {
  const checkTraining = (req, res) => {
    db.training.checkTraining(req.body, (error, result) => {
      if (error) {
        console.log('error', error);
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    });
  };

  return {
      checkTraining
  };
};
