const Blog = require("../model/blogModel");

const getAll = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (!blogs) {
      return res.status(404).json({ err: "notfound" });
    }
    return res.json(blogs);
  } catch (error) {
    res.status(500).json({ mes: "loi" });
  }
};

const getOne = async (req, res) => {
  const blogId = req.params.Id;
  try {
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ err: "notfound" });
    }
    return res.json(blog);
  } catch (error) {
    res.status(500).json({ mes: "loi" });
  }
};

const addBlog = async (req, res) => {
  try {
    const { title, content, author, tags, isActive } = req.body;
    const blog = await Blog.create({
      title,
      content,
      author,
      tags,
      isActive,
    });
    if (!blog) {
      return res.status(404).json({ err: "notfound" });
    }
    return res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ mes: "loi" });
  }
};

const deletePro = async (req, res) => {
  try {
    const blogId = req.params.Id;
    const deletePro = await Blog.findByIdAndDelete(blogId);
    if (!deletePro) {
      return res.status(404).json({ err: "notfound" });
    }
    return res.status(200).json();
  } catch (error) {
    res.status(500).json({ mes: "loi" });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.Id;
    const { title, content, author, tags, isActive } = req.body;

    const update = await Blog.findByIdAndUpdate(blogId, {title, content, author, tags, isActive}, {new: true});
    if (!update) {
      return res.status(404).json({ err: "notfound" });
    }
    return res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ mes: "loi" });
  }
};

module.exports = {
  getAll: getAll,
  getOne: getOne,
  addBlog: addBlog,
  deletePro: deletePro,
  updateBlog: updateBlog
};
