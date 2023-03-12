import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import Wrapper from './styles/invoiceContainer';
import { InvoiceItem, EmptyInvoice } from '.';

const InvoiceContainer = ({ graterThanTablet }) => {
  const { getAllInvoices, invoices } = useAppContext();

  useEffect(() => {
    getAllInvoices();
  }, []);

  if (invoices.length === 0) {
    return (
      <Wrapper>
        <EmptyInvoice graterThanTablet={graterThanTablet} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {invoices.map(item => (
        <InvoiceItem
          key={item._id}
          {...item}
          graterThanTablet={graterThanTablet}
        />
      ))}
    </Wrapper>
  );
};

export default InvoiceContainer;
