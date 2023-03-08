import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import Wrapper from './styles/invoiceContainer';
import { InvoiceItem } from '.';

const InvoiceContainer = ({ graterThanTablet }) => {
  const { getAllInvoices, invoices } = useAppContext();

  useEffect(() => {
    getAllInvoices();
  }, []);

  if (invoices.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
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
