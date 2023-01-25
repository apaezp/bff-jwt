const { Pool } = require("pg");
const { config } = require('../config/configDB.js')


const Connection = (() => {
  let instance;
  function createInstance() {
    const classObj = new Pool(config);
    return classObj;
  }
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
        console.log("New connection to the database");
      } else {
        console.log("Connection to the database already exists");
      }
      return instance;
    },
  };
})();

module.exports = Connection;