import { InvoiceStatus } from '../common';
import Wrapper from './styles/detailHeader';
import { DetailButtonContainer } from '.';

const DetailHeader = ({ status, graterThanTablet }) => {
  return (
    <Wrapper className="radius-box">
      <p className="status">status</p>

      <InvoiceStatus status={status} />

      {graterThanTablet && <DetailButtonContainer margin="0 0 0 auto" />}
    </Wrapper>
  );
};

export default DetailHeader;
