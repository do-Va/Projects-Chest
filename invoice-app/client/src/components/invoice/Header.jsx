import { useEffect, useState } from 'react';

import Wrapper from './styles/header';
import { Filter, NewButton, Title } from '.';

const Header = () => {
  const [graterThanTablet, setGraterThanTablet] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setGraterThanTablet(true);
      } else {
        setGraterThanTablet(false);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Wrapper>
      <Title graterThanTablet={graterThanTablet} />
      <Filter graterThanTablet={graterThanTablet} />
      <NewButton graterThanTablet={graterThanTablet} />
    </Wrapper>
  );
};

export default Header;
