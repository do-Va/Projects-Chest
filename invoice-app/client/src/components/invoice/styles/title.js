import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.div`
  margin-right: auto;

  h4 {
    color: var(--white);
    font-size: var(--f-lg);
    font-weight: var(--fw-bold);
  }

  p {
    font-size: var(--f-sm);
    font-weight: var(--fw-medium);
    color: var(--white-2);
  }

  @media ${mediaQuery.tablet} {
    font-size: var(--f-xl);
  }
`;

export default Wrapper;
