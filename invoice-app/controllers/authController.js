import { StatusCodes } from 'http-status-codes';

import User from '../model/User.js';
import { BadRequestErrors, NotFoundErrors } from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestErrors('please provide all values');
  }

  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    throw new BadRequestErrors('Email already in use');
  }

  const user = await User.create({ name, email, password });

  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    user: { email: user.email, name: user.name },
    token,
  });
};

const login = async (req, res) => {};

export { register, login };
