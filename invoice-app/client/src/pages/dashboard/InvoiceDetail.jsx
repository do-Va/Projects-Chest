import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { GoBackBtn } from '../../components/common';
import { checkResize } from '../../components/helpers/invoice.functions';
import {
  DetailHeader,
  DetailContent,
  DetailFooter,
} from '../../components/invoiceDetail';
import { useAppContext } from '../../context/appContext';
import Wrapper from './styles/invoiceDetail';

const InvoiceDetail = () => {
  const { getSingleInvoice, singleInvoice } = useAppContext();
  const params = useParams();

  const [graterThanTablet, setGraterThanTablet] = useState(false);

  useEffect(() => {
    checkResize(setGraterThanTablet);
  }, []);

  useEffect(() => {
    getSingleInvoice(params.id);
  }, [params.id]);

  return (
    <Wrapper>
      <div className="max-container">
        <GoBackBtn />

        <DetailHeader
          status={singleInvoice?.status}
          graterThanTablet={graterThanTablet}
        />
        <DetailContent singleInvoice={singleInvoice} />
      </div>

      {!graterThanTablet && <DetailFooter />}
    </Wrapper>
  );
};

export default InvoiceDetail;
