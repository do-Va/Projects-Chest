import Wrapper from './styles/text';

const Text = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Text;
