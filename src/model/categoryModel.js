const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      require: true,
      min: 20,
      max: 40,
      default: 21
    },

    isActive: {
      type: Boolean,
      default: true,
    },

  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
