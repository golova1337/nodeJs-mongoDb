const mongoose = require("mongoose");

const { Schema } = mongoose;

const SubcategorySchema = new Schema(
  {
    name: String,
    description: String,
    photos: [String],
  },
  { timestamps: true }
);

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    photos: {
      type: [String],
      required: false,
    },
    subcategories: {
      type: [SubcategorySchema],
      unique: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
