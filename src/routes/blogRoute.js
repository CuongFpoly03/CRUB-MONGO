const express = require("express");
const route = express.Router();
const blogController = require("../controllers/blogContailler");
route.get("/", blogController.getAll);
route.get("/:Id", blogController.getOne);
route.post("/", blogController.addBlog);
route.delete("/:Id", blogController.deletePro);
route.put("/:Id", blogController.updateBlog);
module.exports = route;