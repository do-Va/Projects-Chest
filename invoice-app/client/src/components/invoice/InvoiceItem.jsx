import Wrapper from './styles/invoiceItem';
import { InvoiceStatus } from '.';
import { fixedDate, formatter } from './helpers/invoiceItem.functions';
import img from '../../assets/icon-arrow-right.svg';

const Invoice = ({
  graterThanTablet,
  name,
  clientName,
  status,
  date,
  items,
}) => {
  if (graterThanTablet) {
    return (
      <Wrapper>
        <p className="text">
          <span>#</span>
          {name}
        </p>
        <p className="text2">Due {fixedDate(date)}</p>
        <p className="text2">{clientName}</p>
        <p className="text">£ {formatter(items)}</p>
        <InvoiceStatus status={status} margin="0 20px 0 0" />
        <img src={img} alt="" />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="header">
        <p className="text">
          <span>#</span>
          {name}
        </p>
        <p className="text2">{clientName}</p>
      </div>

      <div className="footer">
        <div className="sub-container">
          <p className="text2">Due {fixedDate(date)}</p>
          <p className="text">£ {formatter(items)}</p>
        </div>

        <InvoiceStatus status={status} />
      </div>
    </Wrapper>
  );
};

export default Invoice;
