const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: [String],
      required: false,
    },
    color: {
      type: [String],
      required: true,
    },
    photos: {
      type: [String],
      required: false,
    },
    category_id: { type: mongoose.ObjectId, ref: "Category", required: true },
    subCategory_id: { type: mongoose.ObjectId, ref: "SubCategory", required: false },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
