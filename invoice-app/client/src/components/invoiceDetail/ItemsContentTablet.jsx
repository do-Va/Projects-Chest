import { Text } from '../common';
import { numberFormat } from '../helpers/invoice.functions';
import Wrapper from './styles/itemsContentTablet';

const ItemsContentTablet = ({ name, price, quantity, amount }) => {
  return (
    <Wrapper>
      <Text>{name}</Text>
      <Text>{quantity}</Text>
      <Text>{numberFormat(price)}</Text>
      <Text>{numberFormat(amount)}</Text>
    </Wrapper>
  );
};

export default ItemsContentTablet;
