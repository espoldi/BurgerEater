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
      if (typeof value === 'string' && value.indexOf(' ') >= 0) { value = `'${value}'`; }
      arr.push(`${key}=${value}`);
    }
  }
  return arr.toString();
};

const orm = {
  selectAll() {
    
  },

  insertOne() {

  },

  updateOne() {

  }
};

module.exports = orm;