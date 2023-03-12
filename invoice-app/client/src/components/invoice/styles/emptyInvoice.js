import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  img {
    width: 252px;
    margin-bottom: 42px;
  }

  h2 {
    font-size: var(--br-xl);
    color: var(--white);
    margin-bottom: 23px;
  }

  p {
    width: 176px;
    font-size: var(--f-sm);
    text-align: center;
    color: var(--white-2);

    span {
      font-weight: var(--fw-bold);
    }
  }

  @media ${mediaQuery.tablet} {
    img {
      margin-bottom: 66px;
    }

    p {
      width: 196px;
    }
  }
`;

export default Wrapper;
