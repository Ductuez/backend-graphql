import mongoose from "mongoose";
const Schema = mongoose.Schema;
const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    key: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
export const schemaCategory = mongoose.model("Category", categorySchema);
