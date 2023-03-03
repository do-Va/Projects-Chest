import { useAppContext } from '../../context/appContext';
import { Button } from '../common';
import Item from './Item';
import Wrapper from './styles/itemContainer';

const ItemContainer = () => {
  const { addInvoiceItem, items } = useAppContext();

  return (
    <Wrapper>
      <p className="title">Item List</p>

      <div className="item-container">
        {items.map(item => (
          <Item key={item.check} {...item} />
        ))}
      </div>

      <Button
        type="button"
        color="--gray"
        background="--gray-2"
        hoverBackground="--gray-1"
        onClick={addInvoiceItem}
      >
        + Add New Item
      </Button>
    </Wrapper>
  );
};

export default ItemContainer;
