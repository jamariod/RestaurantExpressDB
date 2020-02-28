const host = "localhost",
  database = "restaurant";

const options = {
  host: host,
  database: database
};

const pgp = require("pg-promise")({
  query: function(e) {
    console.log("Query:", e.query);
  }
});

const db = pgp(options);

module.exports = db;
