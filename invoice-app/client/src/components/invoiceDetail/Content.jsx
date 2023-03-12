import { Text } from '../common';
import { addDays, fixedDate } from '../helpers/invoice.functions';
import Wrapper from './styles/content';

const Content = ({
  name,
  description,
  address,
  city,
  postCode,
  country,
  date,
  createdAt,
  paymentTerms,
  clientName,
  clientAddress,
  clientCity,
  clientPostCode,
  clientCountry,
  clientEmail,
}) => {
  return (
    <Wrapper>
      <div className="header">
        <div className="name">
          <Text>
            <span>#</span>
            {name}
          </Text>

          <Text className="small">{description}</Text>
        </div>

        <div className="user-address">
          <Text className="small">{address}</Text>
          <Text className="small">{city}</Text>
          <Text className="small">{postCode}</Text>
          <Text className="small">{country}</Text>
        </div>
      </div>

      <div className="content">
        <div className="group">
          <div className="text-group">
            <Text className="small">Invoice Date</Text>
            <Text>{fixedDate(date)}</Text>
          </div>

          <div className="text-group">
            <Text className="small">Invoice Date</Text>
            <Text>{fixedDate(addDays(createdAt, paymentTerms))}</Text>
          </div>
        </div>

        <div className="group">
          <div className="text-group">
            <Text className="small">Bill To</Text>
            <Text>{clientName}</Text>
            <Text>{clientAddress}</Text>
            <Text>{clientCity}</Text>
            <Text>{clientPostCode}</Text>
            <Text>{clientCountry}</Text>
          </div>
        </div>

        <div className="group">
          <div className="text-group">
            <Text className="small">Sent to</Text>
            <Text>{clientEmail}</Text>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Content;
