import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TextInput, InputGroup, Button, Loader } from '../components/common';
import { useAppContext } from '../context/appContext';
import Wrapper from './styles/sign';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const SignPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  // global state
  const { user, userLoading, setupUser, clearValues, displayForm } =
    useAppContext();

  const handleChange = evn => {
    setValues({ ...values, [evn.target.name]: evn.target.value });
  };

  const handleSubmit = evn => {
    evn.preventDefault();

    const { name, email, password, isMember } = values;

    const currentUser = { name, email, password };

    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Login Successful!',
      });
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: 'User Created!',
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
    displayForm(false);
    clearValues();
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h3>{values.isMember ? 'Login' : 'Register'}</h3>

      {!values.isMember && (
        <InputGroup name="name" width="100%">
          <TextInput
            name="name"
            id="name"
            type="text"
            value={values.name}
            placeholder="Name"
            onChange={handleChange}
          />
        </InputGroup>
      )}

      <InputGroup name="email" width="100%">
        <TextInput
          name="email"
          id="email"
          type="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup name="password" width="100%">
        <TextInput
          name="password"
          id="password"
          type="password"
          value={values.password}
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
        {userLoading ? <Loader /> : 'Submit'}
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
