const Category = require("../model/categoryModel");

const getAll = async (req, res) => {
  try {
    const cate = await Category.find();
    res.status(200).json(cate);
  } catch (error) {
    res.status(500).json({ message: "loi" });
  }
};

const getOne = async (req, res) => {
  try {
    const cateID = req.params.cateId;
    const cate = await Category.findById(cateID);
    if (!cate) {
      return res.status(500).json({ error: "loi" });
    }
    return res.status(200).json({ cate });
  } catch (error) {
    res.status(500).json({ message: "loi" });
  }
};

const addCate = async (req, res) => {
  try {
    console.log(req.body);
    const addCate = await Category.create(req.body);
    return res.status(200).json(addCate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCate = async (req, res) => {
  try {
    const cateId = req.params.cateId;
    const { name, description } = req.body;
    const upda = await Category.findByIdAndUpdate(
      cateId,
      { name, description },
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

const delteteCate = async (req, res) => {
  try {
    const cateId = req.params.cateId;
    const dele = await Category.findByIdAndDelete(cateId);
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
  getOne: getOne,
  addCate: addCate,
  updateCate: updateCate,
  delteteCate: delteteCate,
};
