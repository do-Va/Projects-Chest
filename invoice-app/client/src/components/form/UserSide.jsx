import Wrapper from './styles/userSide';
import { SubTitle } from '.';
import { InputGroup, TextInput } from '../common';
import { useAppContext } from '../../context/appContext';

const UserSide = () => {
  const { handleChange, address, city, postCode, country } = useAppContext();

  const handleInvoiceInput = evn => {
    const name = evn.target.name;
    const value = evn.target.value;

    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <SubTitle title="bill from" />

      <InputGroup name="address" longName="street address">
        <TextInput
          name="address"
          id="address"
          value={address}
          type="text"
          placeholder="street address"
          onChange={handleInvoiceInput}
        />
      </InputGroup>

      <div className="container">
        <InputGroup name="city">
          <TextInput
            name="city"
            id="city"
            type="text"
            placeholder="city"
            value={city}
            onChange={handleInvoiceInput}
          />
        </InputGroup>

        <InputGroup name="postCode" longName="post code">
          <TextInput
            name="postCode"
            id="postCode"
            type="text"
            placeholder="post code"
            value={postCode}
            onChange={handleInvoiceInput}
          />
        </InputGroup>

        <InputGroup name="country">
          <TextInput
            name="country"
            id="country"
            type="text"
            placeholder="country"
            value={country}
            onChange={handleInvoiceInput}
          />
        </InputGroup>
      </div>
    </Wrapper>
  );
};

export default UserSide;
