import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { GoBackBtn, Loader } from '../../components/common';
import { checkResize } from '../../components/helpers/invoice.functions';
import {
  DetailHeader,
  DetailContent,
  DetailFooter,
  DeleteModal,
} from '../../components/invoiceDetail';
import { useAppContext } from '../../context/appContext';
import Wrapper from './styles/invoiceDetail';

const InvoiceDetail = () => {
  const { getSingleInvoice, singleInvoice, isLoading, isDeleting } =
    useAppContext();
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="max-container">
            <GoBackBtn />

            <DetailHeader
              status={singleInvoice?.status}
              graterThanTablet={graterThanTablet}
            />
            <DetailContent singleInvoice={singleInvoice} />
          </div>
          {!graterThanTablet && <DetailFooter />}
          {isDeleting && <DeleteModal />}
        </>
      )}
    </Wrapper>
  );
};

export default InvoiceDetail;
