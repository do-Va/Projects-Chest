import Wrapper from './styles/title';

const Title = ({ graterThanTablet }) => {
  return (
    <Wrapper>
      <h4>Invoices</h4>
      <p>{graterThanTablet ? `There are 7 total invoices` : `7 invoices`}</p>
    </Wrapper>
  );
};

export default Title;
