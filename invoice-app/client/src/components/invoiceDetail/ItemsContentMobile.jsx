import { Text } from '../common';
import { numberFormat } from '../helpers/invoice.functions';
import Wrapper from './styles/itemsContentMobile';

const ItemsContentMobile = ({ name, price, quantity, amount }) => {
  return (
    <Wrapper>
      <div className="left-side">
        <Text>{name}</Text>

        <Text className="gray">
          {quantity} x £ {numberFormat(price)}
        </Text>
      </div>

      <Text>{numberFormat(amount)}</Text>
    </Wrapper>
  );
};

export default ItemsContentMobile;
