import Wrapper from './styles/detailItemsTotal';
import { formatter } from '../helpers/invoice.functions';

const DetailItemsTotal = ({ items }) => {
  return (
    <Wrapper>
      <p className="title">Amount Due</p>
      <p className="total">£ {formatter(items)}</p>
    </Wrapper>
  );
};

export default DetailItemsTotal;
