import Wrapper from './styles/inputGroup';

const InputGroup = ({ children, name }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{name}</label>
      {children}
    </Wrapper>
  );
};

export default InputGroup;
