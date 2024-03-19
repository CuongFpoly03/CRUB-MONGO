const { name } = require("ejs");
const Product = require("../model/productModel");
const getAll = async (req, res) => {
  try {
    const allproduc = await Product.find();
    res.status(200).json(allproduc);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getOnePro = async (req, res) => {
  try {
    const proId = req.params.proId;
    const pro = await Product.findById(proId);
    if (!pro) {
      return res.status(404).json({ erorr: "sp k ton tai" });
    }
    res.status(200).json({ pro });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addPro = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    return res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const updatePro = async (req, res) => {
  console.log('vv', req.body);
  try {
    const proId = req.params.proId;
    const { name, price, description, image, category } = req.body;
    const upda = await Product.findByIdAndUpdate(
      proId,
      req.body,
      { new: true }
    );
    if (!upda) {
      return res.status(404).json({ err: "not found" });
    }
    return res.status(200).json(upda);
  } catch (error) {
    res.status(500).json({ err: "loi" });
  }
};

const deltetePro = async (req, res) => {
  try {
    const proId = req.params.proId;
    const dele = await Category.findByIdAndDelete(proId);
    if (!dele) {
      return res.status(404).json({ err: "not found" });
    }
    return res.status(200).json({ success: "thanh cong" });
  } catch (error) {
    res.status(500).json({ err: "loi" });
  }
};
module.exports = {
  getAll: getAll,
  getOnePro: getOnePro,
  addPro: addPro,
  updatePro: updatePro,
  deltetePro: deltetePro,
};
