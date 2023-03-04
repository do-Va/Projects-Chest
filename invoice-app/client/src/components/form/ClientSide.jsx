import Wrapper from './styles/clientSide';
import { SubTitle } from '.';
import { DatePicker, InputGroup, Select, TextInput } from '../common';
import { useAppContext } from '../../context/appContext';

const ClientSide = () => {
  const {
    handleChange,
    clientName,
    clientEmail,
    clientAddress,
    clientCity,
    clientPostCode,
    clientCountry,
    date,
    description,
    paymentTermsOption,
  } = useAppContext();

  const handleInvoiceInput = evn => {
    const name = evn.target.name;
    const value = evn.target.value;

    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <SubTitle title="bill to" />

      <InputGroup name="clientName" longName="client's name">
        <TextInput
          name="clientName"
          id="clientName"
          type="text"
          placeholder="John Doe"
          value={clientName}
          onChange={handleInvoiceInput}
        />
      </InputGroup>

      <InputGroup name="clientEmail" longName="client's email">
        <TextInput
          name="clientEmail"
          id="clientEmail"
          type="text"
          placeholder="john@example.com"
          value={clientEmail}
          onChange={handleInvoiceInput}
        />
      </InputGroup>

      <InputGroup name="clientAddress" longName="street address">
        <TextInput
          name="clientAddress"
          id="clientAddress"
          type="text"
          placeholder="street address"
          value={clientAddress}
          onChange={handleInvoiceInput}
        />
      </InputGroup>

      <div className="container">
        <InputGroup name="clientCity">
          <TextInput
            name="clientCity"
            id="clientCity"
            type="text"
            placeholder="city"
            value={clientCity}
            onChange={handleInvoiceInput}
          />
        </InputGroup>

        <InputGroup name="clientPostCode" longName="post code">
          <TextInput
            name="clientPostCode"
            id="clientPostCode"
            type="text"
            placeholder="post code"
            value={clientPostCode}
            onChange={handleInvoiceInput}
          />
        </InputGroup>

        <InputGroup name="clientCountry">
          <TextInput
            name="clientCountry"
            id="clientCountry"
            type="text"
            placeholder="country"
            value={clientCountry}
            onChange={handleInvoiceInput}
          />
        </InputGroup>
      </div>

      <div className="sub-container space">
        <InputGroup name="date" longName="issue date">
          <DatePicker
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={handleInvoiceInput}
          />
        </InputGroup>

        <InputGroup longName="payment terms">
          <Select list={paymentTermsOption} />
        </InputGroup>
      </div>

      <InputGroup name="description" longName="project description">
        <TextInput
          name="description"
          id="description"
          type="text"
          placeholder="project description"
          value={description}
          onChange={handleInvoiceInput}
        />
      </InputGroup>
    </Wrapper>
  );
};

export default ClientSide;
