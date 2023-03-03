import Wrapper from './styles/inputGroup';

const InputGroup = ({ children, name, longName, width, item }) => {
  return (
    <Wrapper width={width} item={item}>
      <label htmlFor={name}>{longName || name}</label>
      {children}
    </Wrapper>
  );
};

export default InputGroup;
