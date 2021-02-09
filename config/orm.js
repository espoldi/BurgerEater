const connection = require("./configuration.js");

const printQuestionMarks = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
};

const objToSql = (ob) => {
  const arr = [];

  for (const key in ob) {
    let value = ob[key];

    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }
      arr.push(`${key}=${value}`);
    }
  }
  return arr.toString();
};

const orm = {
  selectAll(table, cb) {
    const queryString = `SELECT * FROM ${table};`;
    connection.query(queryString, (err, result) => {
      if (err) { throw err; }
      cb(result);
    });
  },

  insertOne(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table}`;

    queryString += ` (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) { throw err; }

      cb(result);
    });
  },

  updateOne(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table}`;

    queryString += ` SET ${objToSql(objColVals)} WHERE ${condition};`;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) { throw err; }

      cb(result);
    });
  }
};

module.exports = orm;