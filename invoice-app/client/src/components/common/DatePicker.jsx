import { useAppContext } from '../../context/appContext';
import Wrapper from './styles/datePicker';

const DatePicker = props => {
  const { invoiceAlert } = useAppContext();

  return <Wrapper {...props} required={invoiceAlert && !props.value} />;
};

export default DatePicker;
