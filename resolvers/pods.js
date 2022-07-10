import { schemaPod } from "../models/index";
import Auth from "../services/auth.service";

export const getPods = () =>
  schemaPod
    .find()
    .clone()
    .catch(function (err) {
      console.log(err);
    });

export const getPod = async (_, { id }, context) => {
  return schemaPod.findById(id);
};

export const getOilVape = () =>
  schemaOilVape
    .find()
    .clone()
    .catch(function (err) {
      console.log(err);
    });

// MUTAION
export const createPod = async (
  _,
  { name, category, flavor, countOfUse, brand },
  context
) => {
  try {
    if (!context.userId) throw new Error("You must be authenticated!");
    const pod = new schemaPod({
      name,
      category,
      flavor,
      countOfUse,
      brand,
    });
    const result = await pod.save();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
