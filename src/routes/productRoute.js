const express = require("express");
const route = express.Router();
const productController = require("../controllers/productController")
route.get("/", productController.getAll);
route.get("/:proId", productController.getOnePro);
route.post("/add", productController.addPro);
route.put("/:proId", productController.updatePro);
route.delete("/:proId", productController.deltetePro);

module.exports = route;