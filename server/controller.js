const axios = require("axios");

const getInventory = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { inventory } = req.body;

  dbInstance
    .get_inventory()
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

module.exports = {
  getInventory
};
