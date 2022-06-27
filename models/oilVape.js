import mongoose from "mongoose";
const Schema = mongoose.Schema;
const OidVape = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    // mùi vị
    flavor: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
    },
    ml: {
      type: String,
    },
  },
  { timestamps: true }
);

export const schemaOilVape = mongoose.model("OilVape", OidVape);
