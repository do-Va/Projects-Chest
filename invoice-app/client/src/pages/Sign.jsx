import { TextInput, InputGroup, Button } from '../components/common';
import Wrapper from './styles/sign';

const SignPage = () => {
  return (
    <Wrapper>
      <h3>Register</h3>

      <InputGroup name="name">
        <TextInput name="name" id="name" type="text" placeholder="Name" />
      </InputGroup>

      <InputGroup name="email">
        <TextInput name="email" id="email" type="email" placeholder="Email" />
      </InputGroup>

      <InputGroup name="password">
        <TextInput
          name="password"
          id="password"
          type="password"
          placeholder="Password"
        />
      </InputGroup>

      <Button
        type="submit"
        color="--white"
        background="--purple"
        hoverBackground="--light-purple"
      >
        Register
      </Button>
    </Wrapper>
  );
};

export default SignPage;
