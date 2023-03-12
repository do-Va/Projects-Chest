import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.div`
  padding: 24px;
  background-color: var(--dark-2);

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);

  .title {
    font-size: var(--f-sm);
    font-weight: var(--fw-medium);
  }

  .total {
    font-size: 18px;
    font-weight: var(--fw-bold);
  }

  @media ${mediaQuery.phone} {
    .total {
      font-size: var(--f-lg);
    }
  }
`;

export default Wrapper;
