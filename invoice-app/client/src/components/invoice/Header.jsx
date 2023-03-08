import Wrapper from './styles/header';
import { Filter, NewButton, Title } from '.';

const Header = ({ graterThanTablet }) => {
  return (
    <Wrapper>
      <Title graterThanTablet={graterThanTablet} />
      <Filter graterThanTablet={graterThanTablet} />
      <NewButton graterThanTablet={graterThanTablet} />
    </Wrapper>
  );
};

export default Header;
