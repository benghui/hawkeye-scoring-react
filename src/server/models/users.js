module.exports = (dbPoolInstance) => {
  const checkLogin = (input, callback) => {
    const queryString = `SELECT * FROM users WHERE username = '${input.username}' AND password = '${
      input.password
    }'`;

    dbPoolInstance.query(queryString, (error, result) => {
      if (result.rows.length > 0) {
        callback(error, result.rows[0]);
      } else {
        callback(error, { wrong: 'wrongInput' });
      }
    });
  };

  const checkRegister = (input, callback) => {
    const queryString = `SELECT * FROM users WHERE username = '${input.username}' OR email = '${
      input.email
    }'`;

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {
        console.log('error in checking users: ', error.message);
        callback(error);
      } else {
        check = result.rows;
        if (check.length > 0) {
          if (check[0].email === input.email) {
            callback(error, { emailExist: 'emailExist' });
          } else if (check[0].username === input.username) {
            callback(error, { usernameExist: 'usernameExist' });
          }
        } else {
          const query = 'INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING id, username, email';
          const values = [input.username, input.password, input.email];

          dbPoolInstance.query(query, values, (error, result) => {
            callback(error, result.rows[0]);
          });
        }
      }
    });
  };

  return {
    checkLogin,
    checkRegister
  };
};
