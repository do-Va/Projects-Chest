import Wrapper from './styles/invoiceStatus';

const InvoiceStatus = ({ status, margin }) => {
  return (
    <Wrapper className={status} margin={margin}>
      <div className="circle"></div>
      <p>{status}</p>
    </Wrapper>
  );
};

export default InvoiceStatus;
