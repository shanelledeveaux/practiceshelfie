const axios = require("axios");

const getInventory = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { inventory } = req.body;

  dbInstance
    .get_inventory()
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

const addProduct = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { name, price, imageurl } = req.body;

  dbInstance
    .add_product([name, price, imageurl])
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

const deleteProduct = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { id } = req.params;

  dbInstance
    .delete_product([id])
    .then(response => res.status(200).send(response))
    .catch(console.log);
};

module.exports = {
  getInventory,
  addProduct,
  deleteProduct
};
