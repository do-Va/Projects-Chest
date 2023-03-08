import { useAppContext } from '../../context/appContext';
import Wrapper from './styles/title';

const Title = ({ graterThanTablet }) => {
  const { totalInvoices } = useAppContext();

  return (
    <Wrapper>
      <h4>Invoices</h4>
      <p>
        {graterThanTablet
          ? `There are ${totalInvoices} total invoices`
          : `${totalInvoices} invoices`}
      </p>
    </Wrapper>
  );
};

export default Title;
