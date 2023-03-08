import { useEffect, useState } from 'react';
import Wrapper from './styles/invoice';
import { Header, InvoiceContainer } from '../../components/invoice';

const Invoice = () => {
  const [graterThanTablet, setGraterThanTablet] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setGraterThanTablet(true);
      } else {
        setGraterThanTablet(false);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Wrapper className="max-container">
      <Header graterThanTablet={graterThanTablet} />
      <InvoiceContainer graterThanTablet={graterThanTablet} />
    </Wrapper>
  );
};

export default Invoice;
