import Wrapper from './styles/emptyInvoice';
import img from '../../assets/illustration-empty.svg';

const EmptyInvoice = ({ graterThanTablet }) => {
  return (
    <Wrapper>
      <img src={img} alt="empty illustration" />

      <h2>There is nothing here</h2>

      <p>
        Create {graterThanTablet ? 'a new invoice' : 'an invoice'} by clicking
        the <span>New {graterThanTablet && 'Invoice '}</span>
        button and get started
      </p>
    </Wrapper>
  );
};

export default EmptyInvoice;
