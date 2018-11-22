module.exports = (dbPoolInstance) => {
  const checkTraining = (input, callback) => {
    const query = 'SELECT * FROM trainings';

    dbPoolInstance.query(query, (error, result) => {
      console.log('trainings: ', result.rows[0]);
      callback(error, { training: result.rows[0] });
    });
  };
  return {
    checkTraining
  };
};
