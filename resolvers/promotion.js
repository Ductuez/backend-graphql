import { schemaPromotion } from '../models/index';

export const getPromotions = () =>
  schemaPromotion
    .find()
    .clone()
    .catch(function (err) {
      console.log(err);
    });

export const getPromotion = async (_, { id }, context) => {
  return schemaPromotion.findById(id);
};

export const createPromotion = async (
  _,
  { value, percent, from, to, active },
  context,
) => {
  try {
    if (!context.userId) throw new Error('You must be authenticated!');
    const promotion = new schemaPromotion({
      value,
      percent,
      from,
      to,
      active,
    });
    const result = await promotion.save();
    return result;
  } catch (error) {
    console.log(error);
  }
};
