import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const promotionSchema = new Schema(
  {
    value: {
      type: Number,
      unique: true,
    },
    percent: {
      type: Number,
      unique: true,
    },
    from: {
      type: String,
      unique: true,
    },
    to: {
      type: String,
      unique: true,
    },
    active: {
      type: Boolean,
    },
  },
  { timestamps: true },
);
export const schemaPromotion = mongoose.model('promotion', promotionSchema);
