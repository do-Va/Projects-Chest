import User from '../model/User.js';

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      console.log('Please provide all values');
    }

    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      console.log('Email already in use');
    }

    const user = await User.create({ name, email, password });

    res.status(200).json({
      user: { email: user.email, name: user.name },
    });
  } catch (error) {
    console.log(error);

    res.send(error);
  }
};

const login = async (req, res) => {};

export { register, login };
