import Wrapper from './styles/invoice';
import { Header, InvoiceContainer } from '../../components/invoice';

const Invoice = () => {
  return (
    <Wrapper className="max-container">
      <Header />
      <InvoiceContainer />
    </Wrapper>
  );
};

export default Invoice;
