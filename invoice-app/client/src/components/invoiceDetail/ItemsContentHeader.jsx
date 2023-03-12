import { Text } from '../common';
import Wrapper from './styles/itemsContentHeader';

const ItemsContentHeader = () => {
  return (
    <Wrapper>
      <Text className="small">item name</Text>
      <Text className="small">QTY.</Text>
      <Text className="small">price</Text>
      <Text className="small">total</Text>
    </Wrapper>
  );
};

export default ItemsContentHeader;
