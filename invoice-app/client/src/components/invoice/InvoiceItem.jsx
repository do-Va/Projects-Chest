import { useNavigate } from 'react-router-dom';

import Wrapper from './styles/invoiceItem';
import { InvoiceStatus, Text } from '../common';
import { fixedDate, formatter } from '../helpers/invoice.functions';
import img from '../../assets/icon-arrow-right.svg';

const Invoice = ({
  graterThanTablet,
  name,
  clientName,
  status,
  date,
  items,
  _id,
}) => {
  const navigate = useNavigate();

  if (graterThanTablet) {
    return (
      <Wrapper onClick={() => navigate(`/${_id}`)} className="radius-box">
        <Text>
          <span>#</span>
          {name}
        </Text>
        <Text className="small">Due {fixedDate(date)}</Text>
        <Text className="small">{clientName}</Text>
        <Text>£ {formatter(items)}</Text>
        <InvoiceStatus status={status} margin="0 20px 0 0" />
        <img src={img} alt="" />
      </Wrapper>
    );
  }

  return (
    <Wrapper onClick={() => navigate(`/${_id}`)} className="radius-box">
      <div className="header">
        <Text>
          <span>#</span>
          {name}
        </Text>
        <Text className="small">{clientName}</Text>
      </div>

      <div className="footer">
        <div className="sub-container">
          <Text className="small">Due {fixedDate(date)}</Text>
          <Text>£ {formatter(items)}</Text>
        </div>

        <InvoiceStatus status={status} />
      </div>
    </Wrapper>
  );
};

export default Invoice;
