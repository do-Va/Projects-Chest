import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.div`
  width: 80px;
  height: 100%;
  border-left: 2px solid var(--gray-1);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: var(--br-full);
  }

  @media ${mediaQuery.tablet} {
    width: 96px;
  }

  @media ${mediaQuery.desktop} {
    width: 100%;
    height: 88px;

    border-left: none;
    border-top: 2px solid var(--gray-1);

    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export default Wrapper;
