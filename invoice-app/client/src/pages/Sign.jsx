import { useState } from 'react';

import { TextInput, InputGroup, Button } from '../components/common';
import { useAppContext } from '../context/appContext';
import Wrapper from './styles/sign';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const SignPage = () => {
  const [values, setValues] = useState(initialState);

  // global state
  const { isLoading, setupUser } = useAppContext();

  const handleChange = evn => {
    setValues({ ...values, [evn.target.name]: evn.target.value });
  };

  const handleSubmit = evn => {
    evn.preventDefault();

    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      console.log('Error');

      return;
    }

    const currentUser = { name, email, password };

    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
      });
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
      });
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h3>{values.isMember ? 'Login' : 'Register'}</h3>

      {!values.isMember && (
        <InputGroup name="name">
          <TextInput
            name="name"
            id="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
        </InputGroup>
      )}

      <InputGroup name="email">
        <TextInput
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup name="password">
        <TextInput
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </InputGroup>

      <Button
        type="submit"
        color="--white"
        background="--purple"
        hoverBackground="--light-purple"
      >
        Submit
      </Button>

      <p className="member">
        {values.isMember ? 'Not a member yet?' : 'Already a member?'}
        <button type="button" onClick={toggleMember} className="btn">
          {!values.isMember ? 'Login' : 'Register'}
        </button>
      </p>
    </Wrapper>
  );
};

export default SignPage;
