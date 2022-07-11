import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const accessorySchema = new Schema(
  {
    batery: {
      type: String,
      unique: true,
    },
    coil: {
      type: String,
      unique: true,
    },
    cotton: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true },
);
export const schemaAccessory = mongoose.model('Accessory', accessorySchema);
