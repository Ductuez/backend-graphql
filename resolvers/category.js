import { schemaCategory } from "../models/index";

export const getCategory = () =>
  schemaCategory
    .find()
    .clone()
    .catch(function (err) {
      console.log(err);
    });
