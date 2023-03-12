import Wrapper from './styles/detailContent';
import { Content, DetailItemsContainer } from '.';

const DetailContent = ({ singleInvoice }) => {
  return (
    <Wrapper className="radius-box">
      <Content {...singleInvoice} />
      <DetailItemsContainer items={singleInvoice.items} />
    </Wrapper>
  );
};

export default DetailContent;
