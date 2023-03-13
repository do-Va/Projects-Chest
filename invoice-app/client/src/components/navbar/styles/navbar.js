import styled from 'styled-components/macro';

import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.nav`
  width: 100%;
  height: 72px;
  background-color: var(--gray-2);
  position: relative;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${mediaQuery.tablet} {
    height: 80px;
  }

  @media ${mediaQuery.desktop} {
    position: fixed;
    width: 103px;
    min-height: 100vh;
    border-bottom-right-radius: var(--br-lg);
    flex-direction: column;
  }
`;

export default Wrapper;
