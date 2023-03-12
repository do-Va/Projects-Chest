import { useEffect, useState } from 'react';
import Wrapper from './styles/invoice';
import { Header, InvoiceContainer } from '../../components/invoice';
import { checkResize } from '../../components/helpers/invoice.functions';

const Invoice = () => {
  const [graterThanTablet, setGraterThanTablet] = useState(false);

  useEffect(() => {
    checkResize(setGraterThanTablet);
  }, []);

  return (
    <Wrapper className="max-container">
      <Header graterThanTablet={graterThanTablet} />
      <InvoiceContainer graterThanTablet={graterThanTablet} />
    </Wrapper>
  );
};

export default Invoice;
