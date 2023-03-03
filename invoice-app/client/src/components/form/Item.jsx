import { useAppContext } from '../../context/appContext';
import { InputGroup, TextInput } from '../common';
import Wrapper from './styles/item';
import icon from '../../assets/icon-delete.svg';

const Item = ({ check, amount, price, quantity, name }) => {
  const { changeInvoiceItemValue, deleteInvoiceItem } = useAppContext();

  const handleInvoiceItemInput = evn => {
    const name = evn.target.name;
    const value = evn.target.value;

    changeInvoiceItemValue({ check, name, value });
  };

  const handleDelete = () => {
    deleteInvoiceItem(check);
  };

  return (
    <Wrapper>
      <InputGroup name="itemName" longName="item name">
        <TextInput
          name="name"
          id="itemName"
          type="text"
          placeholder="item name"
          value={name}
          onChange={handleInvoiceItemInput}
        />
      </InputGroup>

      <div className="sub-container">
        <InputGroup name="quantity" longName="qty." width="64px">
          <TextInput
            name="quantity"
            id="quantity"
            type="number"
            placeholder="0"
            value={quantity}
            onChange={handleInvoiceItemInput}
          />
        </InputGroup>

        <InputGroup name="price" width="100px">
          <TextInput
            name="price"
            id="price"
            type="number"
            placeholder="0.00"
            value={price}
            onChange={handleInvoiceItemInput}
          />
        </InputGroup>

        <InputGroup name="total" width="max-content">
          <div className="amount ">
            <p>{amount}</p>

            <div className="img-container" onClick={handleDelete}>
              <img src={icon} alt="delete icon" />
            </div>
          </div>
        </InputGroup>
      </div>
    </Wrapper>
  );
};

export default Item;
