import styled from 'styled-components/macro';

import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.nav`
  width: 100%;
  height: 72px;
  background-color: var(--gray-2);

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${mediaQuery.phone} {
    height: 80px;
  }

  @media ${mediaQuery.desktop} {
    width: 103px;
    height: 100%;
    min-height: 100vh;
    border-bottom-right-radius: var(--br-lg);
    flex-direction: column;
  }
`;

export default Wrapper;
