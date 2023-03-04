import { useAppContext } from '../../context/appContext';
import Wrapper from './styles/textInput';

const TextInput = props => {
  const { invoiceAlert } = useAppContext();

  return <Wrapper {...props} required={invoiceAlert && !props.value}></Wrapper>;
};

export default TextInput;
