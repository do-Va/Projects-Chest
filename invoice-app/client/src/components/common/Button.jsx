import Wrapper from './styles/button';

const Button = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Button;
