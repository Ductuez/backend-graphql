import { schemaUser } from '../models/index';
import Auth from '../services/auth.service';
console.log(1);
// QUERY
export const getUsers = () =>
  schemaUser
    .find()
    .clone()
    .catch(function (err) {
      console.log(err);
    });

export const getUser = async (_, { id }, context) => {
  if (!context.userId) throw new Error('You must be authenticated!');
  if (context.userId !== id)
    throw new Error('You can only see you own datas little fella!');
  const users = schemaUser.findById(id);
  console.log(users);
  return users;
};

// MUTATION

export const signup = async (_, { email, username, password }) => {
  try {
    const hashedPwd = await Auth.hashPassword(password);
    const user = new schemaUser({ email, username, password: hashedPwd });
    const resultUser = await user.save();

    return resultUser;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (_, { email, username, password }) => {
  if (!username && !email) throw new Error('email or username required');
  const userPayload = email ? { email } : { username };
  const user = await schemaUser.findOne(userPayload);
  if (!user) throw new Error('Unknown user', userPayload);

  const correctPassword = await Auth.matchPasswords(password, user.password);
  if (!correctPassword) throw new Error('invalid password');

  return {
    jwt: Auth.generateJwt({
      userId: user.id,
      username: user.username,
      email: user.email,
    }),
  };
};
