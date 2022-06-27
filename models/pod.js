import mongoose from "mongoose";
const Schema = mongoose.Schema;
const PodSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    // mùi vị
    flavor: {
      type: String,
      require: true,
    },
    countOfUse: {
      type: String,
    },
    brand: {
      type: String,
    },
  },
  { timestamps: true }
);

export const schemaPod = mongoose.model("Pods", PodSchema);
