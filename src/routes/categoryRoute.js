const express = require("express");
const route = express.Router();
const categoryController = require("../controllers/categoryController")

route.get("/",categoryController.getAll);
route.get("/:cateId", categoryController.getOne);
route.post("/addcate", categoryController.addCate);
route.put("/:cateId", categoryController.updateCate);
route.delete("/:cateId", categoryController.delteteCate);
module.exports = route;