import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import Wrapper from './styles/invoiceContainer';
import { InvoiceItem, EmptyInvoice } from '.';
import { Loader } from '../common';

const InvoiceContainer = ({ graterThanTablet }) => {
  const { getAllInvoices, invoices, isLoading, query } = useAppContext();

  useEffect(() => {
    getAllInvoices();
  }, [query]);

  if (isLoading) {
    return <Loader />;
  } else if (!isLoading && invoices.length === 0) {
    return (
      <Wrapper>
        <EmptyInvoice graterThanTablet={graterThanTablet} />
      </Wrapper>
    );
  } else {
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
  }
};

export default InvoiceContainer;
