const axios = require("axios");

const getHouses = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { inventory } = req.body;

  dbInstance
    .get_houses()
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

module.exports = {
  getHouses
};
