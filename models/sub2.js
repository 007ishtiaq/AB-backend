const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const sub2Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    parent: { type: ObjectId, ref: "sub" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sub2", sub2Schema);
