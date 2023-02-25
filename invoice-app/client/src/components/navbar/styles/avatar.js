import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.div`
  width: 80px;
  height: 100%;
  border-left: 2px solid var(--gray-1);
  display: flex;
  align-items: center;
  justify-content: center;

  .circle {
    width: 32px;
    height: 32px;
    background-color: var(--white-2);
    border-radius: var(--br-full);
    display: grid;
    place-content: center;
    text-transform: uppercase;
  }

  @media ${mediaQuery.tablet} {
    width: 96px;
  }

  @media ${mediaQuery.desktop} {
    width: 100%;
    height: 88px;

    border-left: none;
    border-top: 2px solid var(--gray-1);

    .circle {
      width: 40px;
      height: 40px;
    }
  }
`;

export default Wrapper;
