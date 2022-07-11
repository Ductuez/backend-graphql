import { schemaAccessory } from '../models/index';

export const getAccessory = () =>
  schemaAccessory
    .find()
    .clone()
    .catch(function (err) {
      console.log(err);
    });
